import { useEffect, useState } from 'react';
import { ContributionData, fetchContributions } from '../../utils/github';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { BarChart } from '@mui/x-charts';
import './Contributions.scss';


const Contributions = () => {
    const token = process.env.REACT_APP_API_KEY || '';
    const userName = process.env.REACT_APP_USERNAME || '';

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
                    // console.log(contributionData);
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
                const modifiedDate = contributionDate.substring(5);

                return { date: modifiedDate, count: contributionCount };
            });
            setWeeklyContributions(contributionsData);
        }
    }, [contributionData]);

    const handleSnackbarClose = () => {
        setError(null);
    };
    const xAxisData = [...weeklyContributions.map((week) => week.count)].reverse();
    const yAxisData = [...weeklyContributions.map((week) => week.date)].reverse();

    // console.log(xAxisData);

    return (

        <div className='c-contributions'>


            {/* <section className="component-header">
                <h2 className="component-header__title">
                    GitHub Contributions
                </h2>
            </section> */}

            <Snackbar open={!!error} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleSnackbarClose}>
                    {error}
                </MuiAlert>
            </Snackbar>

            {weeklyContributions.length === 0 ? (
                <p>Loading...</p>
            ) : (

                <>
                    <BarChart

                        xAxis={[{
                            id: 'barCategories',
                            data: yAxisData, // date
                            scaleType: 'band',
                        },
                        ]}

                        series={
                            [
                                { data: xAxisData, stack: 'A', label: 'Weekly GitHub Contributions' },
                                // { data: [13, 22, 43, 24, 45, 65, 17, 38, 19, 8, 17, 10], stack: 'B', label: 'C' },
                            ]}
                    // width={600}
                    // height={350}
                    />

                </>
            )}
            {/* <p>Total Contributions: {contributionData?.user.contributionsCollection.contributionCalendar.totalContributions}</p> */}
        </div>
    );
};

export default Contributions;
