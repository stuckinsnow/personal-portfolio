import { graphql } from '@octokit/graphql';

export const getApiUrl = () => {
  const serverBaseUrl = process.env.REACT_APP_API_URL;
  return `${serverBaseUrl}/users/stuckinsnow/`;
};

export interface ContributionData {
  user: {
    contributionsCollection: {
      contributionCalendar: {
        totalContributions: number;
        weeks: {
          contributionDays: {
            date: string;
            contributionCount: number;
          }[];
        }[];
      };
    };
  };
}

export const fetchContributions = async (token: string, userName: string) => {
  const query = `
    query($userName: String!) {
      user(login: $userName) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await graphql(query, {
      userName,
      headers: {
        authorization: `token ${token}`,
      },
    });

    const data = response as unknown as ContributionData;
    return data;
  } catch (error) {
    console.error('Error fetching GitHub contribution data:', error);
    throw error;
  }
};
