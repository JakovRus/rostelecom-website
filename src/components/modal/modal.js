import React from 'react';

import styles from './modal.module.scss';
import {CloseButton} from "../close-button/close-button";

export function Modal({children, visible, close}) {
  const className = visible ? styles.modal : styles.modal_hidden;

  const preventClose = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={className}>
      <div onClick={close} className={styles.content}>
        <div onClick={preventClose}>
        {children}
        </div>
        <CloseButton />
      </div>
    </div>
  );
}