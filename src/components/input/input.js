import React from 'react';
import InputMask from 'react-input-mask';

import styles from './input.module.scss';

export function RWInput(props) {
  const {placeholder, containerClass, ...rest} = props;

  return (
    <InputLabel label={placeholder} className={containerClass}>
      <input {...rest} className={`${styles.input} ${rest.className}`}/>
    </InputLabel>
  )
}

export function RWPhoneInput(props) {
  const {placeholder, containerClass, ...rest} = props;
  const mask = "+7 (999) 999-99-99";

  return (
    <InputLabel label={placeholder} className={containerClass}>
      <InputMask mask={mask} alwaysShowMask {...rest} type='tel'
                 className={`${styles.input} ${rest.className}`}/>
    </InputLabel>
  )
}

function InputLabel(props) {
  return (
    <label className={`${styles.container} ${props.className}`}>
      <span className={styles.label}>{props.label}</span>
      {props.children}
    </label>
  )
}