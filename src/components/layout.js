import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import './layout.css';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <div className="wrapper">
                <Header siteTitle={data.site.siteMetadata.title} />
                <main>{children}</main>
                <footer>
                    <p>
                        © {new Date().getFullYear()}, Designed and Built by
                        {` `}
                        <a href="https://www.samlow-chappell.com">
                            Sam Low-Chappell
                        </a>
                    </p>
                </footer>
            </div>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
