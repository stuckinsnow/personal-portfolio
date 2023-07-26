import React, { useEffect, useState } from 'react';
import { fetchContributions, ContributionData } from '../../utils/github';
import './Contributions.scss';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Contributions: React.FC = () => {
    const token = process.env.REACT_APP_API_KEY || '';
    const userName = process.env.REACT_APP_USERNAME || '';

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
            }
        };
        fetchData();
    }, [token, userName]);

    const handleSnackbarClose = () => {
        setError(null);
    };

    return (
        <div className='footer'>
            <Snackbar open={!!error} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <MuiAlert elevation={6} variant="filled" severity="error" onClose={handleSnackbarClose}>
                    {error}
                </MuiAlert>
            </Snackbar>

            {contributionData && (
                <>
                    <p>Total Contributions: {contributionData.user.contributionsCollection.contributionCalendar.totalContributions}</p>
                </>
            )}
        </div>
    );
};

export default Contributions;
