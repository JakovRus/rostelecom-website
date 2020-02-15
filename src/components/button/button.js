import React from 'react';
import styles from './button.module.scss'

export function RWButton(props) {
  return (
    <button {...props} className={`${styles.button} ${props.className}`}>
      {props.children}
    </button>
  );
}