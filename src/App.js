import './App.css';
import { useQuery, gql } from '@apollo/client';
import { useEffect } from 'react';

const GET_DATA = gql`
    {
        launchesPast(limit: 10) {
            mission_name
            launch_date_local
            launch_site {
                site_name_long
            }
            links {
                article_link
                video_link
            }
            rocket {
                rocket_name
            }
        }
    }
`;

function App() {
    const { loading, error, data } = useQuery(GET_DATA);
    useEffect(() => {
        console.log(loading, error, data);
    }, [loading, error, data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return data
        ? data.launchesPast.map((launch) => <h3>{launch.mission_name}</h3>)
        : null;
}

export default App;
