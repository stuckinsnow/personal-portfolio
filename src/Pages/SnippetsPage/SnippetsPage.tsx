import { Link } from 'react-router-dom';
import './SnippetsPage.scss';

const SnippetsPage = () => {
    return (
        <div className='bebop'>
            <h1 className='snippets-head'>This page contains a list of snippets</h1>

            <Link to="/wobble-button">Wobble Button</Link>

            <iframe src="https://app.polymuse.tech/embed?id=20240905190805" width="100%" height="500" data-bg="#FFFFFF" frameborder="0" allowfullscreen></iframe>
            <iframe src="https://app.polymuse.tech/embed?id=Ideet" width="100%" height="500" data-bg="#FFFFFF" frameborder="0" allowfullscreen></iframe>
            <iframe src="https://app.polymuse.tech/embed?id=20241009152627" width="100%" height="500" data-bg="#FFFFFF" frameborder="0" allowfullscreen></iframe>

        </div>
    )
}

export default SnippetsPage;
