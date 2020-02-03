import React from 'react';
import styles from './hero.module.css';
import video from '../images/header.mp4';

const Hero = () => (
    <div className={styles.header}>
        <video autoPlay muted loop id="myVideo" className={styles.video}>
            <source src={video} type="video/mp4"></source>
        </video>

        <div className={styles.content}>
            <h1>Xavier Leong</h1>
            <p>Video Editor</p>
        </div>
    </div>
);

export default Hero;
