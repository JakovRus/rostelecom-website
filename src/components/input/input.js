import React from 'react';
import InputMask from 'react-input-mask';

import styles from './input.module.scss';

export function RWInput(props) {
  const {placeholder, ...rest} = props;

  return (
    <InputLabel label={placeholder}>
      <input {...rest} className={`${styles.input} ${rest.className}`}/>
    </InputLabel>
  )
}

export function RWPhoneInput(props) {
  const {placeholder, ...rest} = props;
  const mask = "+7 (999) 999-99-99";

  return (
    <InputLabel label={placeholder}>
      <InputMask mask={mask} alwaysShowMask {...rest}
                 className={`${styles.input} ${rest.className}`}/>
    </InputLabel>
  )
}

function InputLabel(props) {
  return (
    <label className={styles.label}>
      {props.label}
      {props.children}
    </label>
  )
}