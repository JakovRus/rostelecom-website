import React from 'react';

import Header from '../header/header';
import {RWContainer} from '../container/container';

import 'semantic-ui-css/semantic.min.css';
import '../../styles/clear.scss';
import styles from './layout.module.scss';

import {ModalWrapper} from '../modal-wrapper';

export const Layout = ({children}) => {
  return (
    <ModalWrapper>
      <div className={styles.container}>
        <Header/>
        <RWContainer className={styles.content}>
          {children}
        </RWContainer>
      </div>
    </ModalWrapper>
  );
};
