import React from 'react';
import styles from './container.module.scss';

export function RWContainer(props) {
  const {children, ...rest} = props;

  return (
    <div {...rest} className={`${styles.container} ${rest.className}`}>
      {children}
    </div>
  );
}