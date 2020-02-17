import React, {useContext} from 'react';
import {ModalContext} from "../../contexts/modal";

import styles from './close-button.module.scss';

export function CloseButton() {
  const context = useContext(ModalContext);

  return (
    <div className={styles.closeBtn} onClick={context.close}/>
  );
}