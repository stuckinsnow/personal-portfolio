import { useEffect, useState } from 'react';
import { ContributionData, fetchContributions } from '../../utils/github';
import Repositories from '../Repositories/Repositories';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { BarChart, LineChart } from '@mui/x-charts';

import './Contributions.scss';

const Contributions: React.FC = () => {
    let token = process.env.REACT_APP_API_KEY || '';
    let userName = process.env.REACT_APP_USERNAME || '';

    const [contributionData, setContributionData] = useState<ContributionData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [weeklyContributions, setWeeklyContributions] = useState<{ date: string; count: number }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            if (userName) {
                try {
                    const data = await fetchContributions(token, userName);
                    setContributionData(data);
                    setError(null);
                    console.log(contributionData);
                } catch (error) {
                    console.error('Error fetching GitHub contribution data:', error);
                    setError('An error occurred while fetching GitHub contribution data.');
                }
            } else {
                setError('Sorry, something happened.');
            }
        };
        fetchData();
    }, [token, userName]);

    useEffect(() => {
        const weeks = contributionData?.user.contributionsCollection.contributionCalendar.weeks;

        if (weeks && weeks.length >= 52) {
            const last12Weeks = weeks.slice(weeks.length - 12);

            const contributionsData = last12Weeks.map((week, index) => {

                let totalContributions = 0;

                for (let i = 0; i < 7; i++) {
                    totalContributions += week.contributionDays[i]?.contributionCount || 0;
                }




                const contributionCount = totalContributions;


                const contributionDate = week.contributionDays[0].date;




                const weekNumber = weeks.length - 12 + index + 1; // Adding 1 to convert from zero-based index to week number
                return { date: contributionDate, count: contributionCount };
            });



            setWeeklyContributions(contributionsData);
        }




    }, [contributionData]);






    const handleSnackbarClose = () => {
        setError(null);
    };


    const xAxisData = [...weeklyContributions.map((week) => week.count)].reverse();
    const yAxisData = [...weeklyContributions.map((week) => week.date)].reverse();

    // const xAxisData = weeklyContributions.map((week) => week.count);
    // const yAxisData = weeklyContributions.map((week) => week.date);

    console.log(xAxisData);

    return (
        <div>
            <Snackbar open={!!error} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleSnackbarClose}>
                    {error}
                </MuiAlert>
            </Snackbar>

            <p>Total Contributions: {contributionData?.user.contributionsCollection.contributionCalendar.totalContributions}</p>







            {weeklyContributions.length === 0 ? (
                // Render a loading state or an empty state here
                <p>Loading...</p>
            ) : (
                <>
                    {/* Your existing JSX for other components */}
                    <LineChart
                        xAxis={[{
                            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

                            ]

                        }]}
                        series={[
                            {
                                data: xAxisData,
                            },
                        ]}
                        width={500}
                        height={300}
                    />


                    {/* ... (rest of your JSX) */}

                    <BarChart
                        xAxis={[
                            {
                                id: 'barCategories',
                                data: yAxisData,
                                scaleType: 'band',
                            },
                        ]}
                        series={[
                            {
                                data: xAxisData,
                            },
                        ]}
                        width={500}
                        height={300}
                    />


                </>
            )}
            {/* 

            <LineChart
                xAxis={[{ data: [1, '2', 3, 5, 8, 10] }]}
                series={[
                    {
                        data: [2, 5.5, 2, 8.5, 1.5, 5],
                    },
                ]}
                width={500}
                height={300}
            /> */}





            {weeklyContributions.map((week, index) => (
                <div key={index} className={`fun--${index}`}>
                    <span className='date'>Date: {week.date}</span>
                    <span className='count'>Count: {week.count}</span>
                </div>
            ))}
            <p>Total Contributions: {contributionData?.user.contributionsCollection.contributionCalendar.totalContributions}</p>
            <p>Total Number: {contributionData?.user.contributionsCollection.contributionCalendar.weeks[52].contributionDays[0].contributionCount}</p>
            <p>Total String: {contributionData?.user.contributionsCollection.contributionCalendar.weeks[52].contributionDays[0].date}</p>



            <Repositories />
        </div>
    );
};

export default Contributions;
