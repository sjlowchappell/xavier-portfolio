import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './header.module.css';
import video from '../images/header.mp4';

const Header = ({ siteTitle }) => (
    <header className={styles.header}>
        <video autoPlay muted loop id="myVideo" className={styles.video}>
            <source src={video} type="video/mp4"></source>
        </video>

        <div className={styles.content}>
            <h1>Xavier Leong</h1>
            <p>Video Editor</p>
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
