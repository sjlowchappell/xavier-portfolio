import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import styles from './header.module.css';
// import video from '../images/header.mp4';

const Header = ({ siteTitle }) => (
    <header>
        <nav className={styles.nav}>
            <p>xavier logo</p>
            <ul>
                <li className={styles.navItem}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/about">About</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/work">Work</Link>
                </li>
                <li className={styles.navItem}>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
