import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
        <p>Hello</p>
        <nav>
            <ul>
                <li><Link to="/">Main</Link> </li>
                <li><Link to="/Second">Second</Link> </li>
                <li><Link to="/Third">Third</Link> </li>
            </ul>
        </nav>
    </header>
)

export default Header;