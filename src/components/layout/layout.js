import React from 'react';

import Header from '../header/header';
import {RWContainer} from '../container/container';

import 'semantic-ui-css/semantic.min.css';
import '../../styles/clear.scss';
import styles from './layout.module.scss';

import {ModalWrapper} from '../modal-wrapper';
import {Footer} from "../footer/footer";

export const Layout = ({children, pathname}) => {

  return (
    <ModalWrapper>
      <div className={styles.container}>
        <Header pathname={pathname} />
        <RWContainer className={styles.content}>
          {children}
        </RWContainer>
        <Footer />
      </div>
    </ModalWrapper>
  );
};
