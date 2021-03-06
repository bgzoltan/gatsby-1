import * as React from "react";
// import { Link } from "gatsby";
import { Link, useStaticQuery, graphql } from "gatsby";

import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  console.log(data);
  return (
    <div className={container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>

      <header className={siteTitle}>
        {data.site.siteMetadata.title}
      </header>

      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              HOME
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/aboutus" className={navLinkText}>
              ABOUT
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              BLOG
            </Link>
          </li>
        </ul>
      </nav>

      <main>
        <h1 className={heading}>
          {pageTitle}
        </h1>
        {children}
      </main>
    </div>
  );
};
export default Layout;
