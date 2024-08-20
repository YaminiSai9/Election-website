import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Election Polling</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/polls">Polls</Link></li>
                    <li><Link to="/results">Results</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
