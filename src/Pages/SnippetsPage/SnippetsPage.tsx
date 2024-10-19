import { Link } from 'react-router-dom';
import './SnippetsPage.scss';

const SnippetsPage = () => {
    return (
        <div className='bebop'>
            <h1 className='snippets-head'>This page contains a list of snippets</h1>

            <Link to="/wobble-button">Wobble Button</Link>

        </div>
    )
}

export default SnippetsPage;
