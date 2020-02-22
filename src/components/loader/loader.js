import React from 'react';

import styles from './loader.module.scss';

export function Loader({className}) {
  return (
    <div className={`${styles.loader} ${className}`}>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
  );
}