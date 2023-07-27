import { useEffect, useState } from 'react';
import { ContributionData, fetchContributions } from '../../utils/github';
import Repositories from '../Repositories/Repositories';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

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
                const contributionCount = week.contributionDays[0].contributionCount;
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

    return (
        <div>
            <Snackbar open={!!error} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleSnackbarClose}>
                    {error}
                </MuiAlert>
            </Snackbar>

            <p>Total Contributions: {contributionData?.user.contributionsCollection.contributionCalendar.totalContributions}</p>

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
