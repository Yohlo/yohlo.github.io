import React from 'react';
import { Link } from 'react-router-dom';
import { toggleDarkTheme } from '../../actions';
import { Toggle } from '../Toggle';
import { connect } from "react-redux";
import './styles.css';

const Header = () => (
    <header>

        {/*<nav>
            <ul>
                <li><Link to="/">Main</Link> </li>
                <li><Link to="/Second">Second</Link> </li>
                <li><Link to="/Third">Third</Link> </li>
            </ul>
        </nav>*/}
        {
            /*<DarkThemeToggle className="darkThemeToggle" />*/     
        }
    </header>
)

const DarkThemeToggle = connect(
    null, 
    mapDispatchToProps
)(Toggle);

function mapDispatchToProps(dispatch, props) {
    return { 
        ...props,
        onClick: () => dispatch(toggleDarkTheme())
     };
}

export default Header;