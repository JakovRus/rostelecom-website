import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import Header from '../header/header';
import {RWContainer} from '../container/container';

import 'semantic-ui-css/semantic.min.css';
import '../../styles/clear.scss';
import styles from './layout.module.scss';

const Layout = ({children}) => {
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
      <Header siteTitle={data.site.siteMetadata.title}/>
      <RWContainer className={styles.container}>
        {children}
      </RWContainer>
    </>
  );
};

export default Layout;
