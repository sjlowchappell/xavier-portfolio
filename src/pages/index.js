import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';

const IndexPage = () => (
    <div>
        <Hero />
        <div style={{ padding: `100vh 0px 0px 0px` }}>
            <Layout>
                <SEO title="Home" />
                <p>Welcome to your new portfolio, Xavier.</p>
            </Layout>
        </div>
    </div>
);

export default IndexPage;
