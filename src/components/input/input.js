import React from 'react';
import InputMask from 'react-input-mask';

import styles from './input.module.scss';

export function RWInput(props) {
  const {placeholder, containerClass, invalid, ...rest} = props;
  const _styles = getStyles(invalid);

  return (
    <InputLabel label={placeholder} invalid={invalid}
                className={containerClass}>
      <input {...rest} className={`${_styles.input} ${rest.className}`}/>
    </InputLabel>
  )
}

export function RWPhoneInput(props) {
  const {placeholder, containerClass, invalid, ...rest} = props;
  const _styles = getStyles(invalid);
  const mask = "+7 (999) 999-99-99";


  return (
    <InputLabel label={placeholder} invalid={invalid}
                className={containerClass}>
      <InputMask mask={mask} alwaysShowMask {...rest} type='tel'
                 className={`${_styles.input} ${rest.className}`}/>
    </InputLabel>
  )
}

function InputLabel(props) {
  const _styles = getStyles(props.invalid);
  return (
    <label className={`${_styles.container} ${props.className}`}>
      <span className={_styles.label}>{props.label}</span>
      {props.children}
    </label>
  )
}

function getStyles(invalid) {
  return invalid ? {
    container: styles.container,
    label: `${styles.label} ${styles.labelInvalid}`,
    input: `${styles.input} ${styles.inputInvalid}`,
  } : styles;
}