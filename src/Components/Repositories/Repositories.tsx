import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, HttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Link } from 'react-router-dom';

import './Repositories.scss';

const client = new ApolloClient({
  link: setContext((_, { headers }) => {
    const token = process.env.REACT_APP_API_KEY;
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  }).concat(new HttpLink({
    uri: `${process.env.REACT_APP_API_URL}/graphql`,
  })),
  cache: new InMemoryCache(),
});


const GET_REPOSITORIES = gql`
  query {
    viewer {
       repositories(first: 3, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          name
          description
          url
        }
      }
    }
  }
`;

const RepositoriesWithoutApollo: React.FC = () => {
  const { loading, error, data } = useQuery(GET_REPOSITORIES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='c-repositories writing-block'>
      <h3>Recent Commits:</h3>
      {data.viewer.repositories.nodes.map((repo: any) => (
        <ul key={repo.name} className='repo-list'>
          {/* {repo.description && <p>{repo.description}</p>} */}
          <li className='repo-list__item'>
            <Link to={repo.url} className='repo-list__link'>{repo.name}</Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

const Repositories: React.FC = () => (
  <ApolloProvider client={client}>
    <RepositoriesWithoutApollo />
  </ApolloProvider>
);

export default Repositories;
