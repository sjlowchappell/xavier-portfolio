import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import headShot from '../images/smilingHeadshot.jpg';
import styles from './about.module.css';
import video from '../images/header.mp4';

const About = () => (
    <div>
        <Layout>
            <SEO title="About" />
            <div className={styles.aboutContainer}>
                <div className={styles.headshot}>
                    <img src={headShot} alt="" />
                </div>
                <div className={styles.bio}>
                    <h1>Xavier Leong</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi molestias mollitia cumque modi, at ea? Non
                        culpa sit, molestias fugit, sapiente iure eos minus
                        repellat doloribus cupiditate alias velit.
                        Necessitatibus?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Excepturi molestias mollitia cumque modi, at ea? Non
                        culpa sit, molestias fugit, sapiente iure eos minus
                        repellat doloribus cupiditate alias velit.
                        Necessitatibus?
                    </p>
                </div>
            </div>
            <div className={styles.mission}>
                <h2>My Mission</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptates, temporibus a, sapiente aliquam eos fugit quos
                    explicabo aliquid laborum dolore aspernatur perspiciatis
                    labore saepe beatae consectetur non facilis soluta alias.
                </p>
            </div>
            <div>
                <h2>Video Resume</h2>
                <div className={styles.videoContainer}>
                    <video
                        muted
                        controls
                        id="videoResume"
                        className={styles.video}
                    >
                        <source src={video} type="video/mp4"></source>
                    </video>
                </div>
            </div>
            <div>
                <h2>The Numbers</h2>
                <div className={styles.numbersContainer}>
                    <div>
                        <h3>33,000+ video views</h3>
                    </div>
                    <div>
                        <h3>27 Articles Written</h3>
                    </div>
                    <div>
                        <h3>872 article shares</h3>
                    </div>
                    <div>
                        <h3>12 Product Reviews</h3>
                    </div>
                </div>
            </div>
        </Layout>
    </div>
);

export default About;
