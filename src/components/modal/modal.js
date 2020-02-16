import React from 'react';

import styles from './modal.module.scss';

export function Modal({children, visible, close}) {
  const className = visible ? styles.modal : styles.modal_hidden;

  return (
    <div className={className}>
      <div onClick={close} className={styles.content}>
        {children}
      </div>
    </div>
  );
}