
import { useEffect, useState } from 'react';
import './Footer.scss';
import axios from 'axios';

interface GitHubData {
    followers: number;
}

const Footer: React.FC = () => {

    const url = process.env.REACT_APP_API_URL || '';
    const token = process.env.REACT_APP_API_KEY || '';
    const [gitHub, setGitHub] = useState<GitHubData | null>(null);

    useEffect(() => {
        fetchGit();
    }, []);

    const fetchGit = async () => {
        try {
            const response = await axios.get(`${url}`, {
                headers: {
                    Authorization: `token ${token}`,
                },
            });

            const data = response.data as GitHubData;

            setGitHub(data);
        } catch (error) {
            console.error('Error fetching GitHub data:', error);
        }
    };

    return (
        <div>
            {gitHub && (
                <>
                    <p>Followers: {gitHub.followers}</p>
                </>
            )}
        </div>
    );
};

export default Footer

