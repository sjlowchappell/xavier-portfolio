import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import styles from './index.module.css';

const IndexPage = () => (
    <div>
        <Hero />
        <div style={{ padding: `100vh 0px 0px 0px` }}>
            <Layout>
                <SEO title="Home" />
                <p>Welcome to your new portfolio, Xavier.</p>
                <div className={styles.service}>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.serviceDescription}>
                        <h2>Service 1</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Cupiditate esse laudantium rem asperiores ex
                            eligendi, saepe exercitationem voluptate modi?
                            Assumenda animi distinctio fugiat. Velit assumenda
                            possimus fugiat similique asperiores sed.
                        </p>
                    </div>
                </div>
                <div className={styles.service}>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.serviceDescription}>
                        <h2>Service 2</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Cupiditate esse laudantium rem asperiores ex
                            eligendi, saepe exercitationem voluptate modi?
                            Assumenda animi distinctio fugiat. Velit assumenda
                            possimus fugiat similique asperiores sed.
                        </p>
                    </div>
                </div>
                <div className={styles.service}>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div className={styles.serviceDescription}>
                        <h2>Service 3</h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Cupiditate esse laudantium rem asperiores ex
                            eligendi, saepe exercitationem voluptate modi?
                            Assumenda animi distinctio fugiat. Velit assumenda
                            possimus fugiat similique asperiores sed.
                        </p>
                    </div>
                </div>
            </Layout>
        </div>
    </div>
);

export default IndexPage;
