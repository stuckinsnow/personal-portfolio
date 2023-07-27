import { useEffect, useState } from 'react';
import { ContributionData, fetchContributions } from '../../utils/github';
import './Contributions.scss';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Contributions: React.FC = () => {
    let token = process.env.REACT_APP_API_KEY || '';
    let userName = process.env.REACT_APP_USERNAME || '';

    // token = 'bob';
    // userName = 'bob';

    const [contributionData, setContributionData] = useState<ContributionData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            if (userName) {
                try {
                    const data = await fetchContributions(token, userName);
                    setContributionData(data);
                    setError(null);
                } catch (error) {
                    console.error('Error fetching GitHub contribution data:', error);
                    setError('An error occurred while fetching GitHub contribution data.');
                }
            } else {
                setError('Else error');
            }
        };
        fetchData();
    }, [token, userName]);

    const handleSnackbarClose = () => {
        setError(null);
    };

    console.log(contributionData?.user.contributionsCollection.contributionCalendar.weeks[52]);
    console.log(contributionData?.user.contributionsCollection.contributionCalendar.weeks[52].contributionDays);

    // contributionDays: {
    //     date: string;
    //     contributionCount: number;

    return (
        <div className='footer'>
            hi
            <Snackbar open={!!error} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleSnackbarClose}>
                    {error}
                </MuiAlert>
            </Snackbar>


            <p>Total Contributions: {contributionData?.user.contributionsCollection.contributionCalendar.totalContributions}</p>
            <p>Total Number: {contributionData?.user.contributionsCollection.contributionCalendar.weeks[52].contributionDays[0].contributionCount}</p>
            <p>Total String: {contributionData?.user.contributionsCollection.contributionCalendar.weeks[52].contributionDays[0].date}</p>


        </div>
    );
};

export default Contributions;
