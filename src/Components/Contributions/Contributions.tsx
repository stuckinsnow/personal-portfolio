import { useEffect, useState } from 'react';
import { ContributionData, fetchContributions } from '../../utils/github';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import ReactCalendarHeatmap from 'react-calendar-heatmap';
import './Contributions.scss';

const Contributions = () => {
    const token = process.env.REACT_APP_API_KEY || '';
    const userName = process.env.REACT_APP_USERNAME || '';

    const [githubData, setGithubData] = useState<ContributionData | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            console.log('Fetching data...');
            if (userName) {
                try {
                    const data = await fetchContributions(token, userName);
                    console.log('Data fetched:', data);

                    // Extracted data from weeks
                    const extractedData = data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
                    console.log('Extracted Data from Weeks:', extractedData);

                    setGithubData(data);
                    setError(null);
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


    const handleSnackbarClose = () => {
        setError(null);
    };

    const heatmapData = githubData
        ? githubData.user.contributionsCollection.contributionCalendar.weeks.flatMap((week) =>
            week.contributionDays.map((day) => ({
                date: new Date(day.date).toISOString().split('T')[0], // Extract the date part
                count: day.contributionCount,
            }))
        )
        : [];

    return (
        <div className='c-contributions'>
            <Snackbar open={!!error} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <MuiAlert elevation={6} variant='filled' severity='error' onClose={handleSnackbarClose}>
                    {error}
                </MuiAlert>
            </Snackbar>

            {heatmapData.length === 0 ? (
                <p>Loading...</p>
            ) : (

                <ReactCalendarHeatmap
                    startDate={heatmapData[0]?.date}
                    endDate={heatmapData[heatmapData.length - 1]?.date}
                    values={heatmapData}
                    classForValue={(value) => {
                        console.log('Value:', value);
                        if (!value) {
                            return 'color-empty';
                        }
                        // Limit the value.count to a maximum of 6
                        const count = Math.min(value.count, 6);
                        return `color-github-${count}`;
                    }}
                />
            )}
        </div>
    );
};

export default Contributions;
