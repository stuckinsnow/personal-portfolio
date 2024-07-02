import { useEffect } from 'react';
import { animateLetters } from './function/wobbleEffect';
import { Link } from 'react-router-dom';

import './WobbleButton.scss'

const WobbleButton = () => {

    useEffect(() => {
        animateLetters('.wobble__btn');
    }, []);

    return (

        <main className="wobble">
            <Link to="/snippets" className="wobble__btn ">Hover the Wobble Button</Link>
        </main>

    );
}

export default WobbleButton;