import { Link } from 'react-router-dom';
import './SnippetsPage.scss';

import umami from '@umami/node';


umami.init({
    websiteId: '0ecf9fe8-7745-4391-910f-c815185f208b',
    hostUrl: 'https://umami-wwows8g84w0g40gc0k88cgwg.184.73.178.248.sslip.io/'
});

umami.track({ url: 'https://expsr.com/snippets' });

const SnippetsPage = () => {
    return (
        <div className='bebop'>
            <h1 className='snippets-head'>This page contains a list of snippets</h1>

            <Link to="/wobble-button">Wobble Button</Link>

        </div>
    )
}

export default SnippetsPage;
