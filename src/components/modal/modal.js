import React from 'react';

import styles from './modal.module.scss';
import {CloseButton} from "../close-button/close-button";

export function Modal({children, visible, closeButtonHidden}) {
  const className = visible ? styles.modal : styles.modal_hidden;

  return (
    <div className={className}>
      <div className={styles.content}>
        {children}
        {
          !closeButtonHidden && <CloseButton />
        }
      </div>
    </div>
  );
}