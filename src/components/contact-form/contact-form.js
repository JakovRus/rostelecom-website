import React, {useState} from 'react';
import {RWInput, RWPhoneInput} from "../input/input";
import {RWButton} from "../button/button";

import styles from './contact-from.module.scss';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  console.log(phone);

  return (
    <div className={styles.form}>
      <RWInput value={name} onChangeText={setName}
               placeholder='Имя' containerClass={styles.formElement}/>
      <RWPhoneInput value={phone} onChangeText={setPhone}
                    placeholder='Номер телефона'
                    containerClass={styles.formElement}/>
      <RWButton className={styles.formElement}>
        Подключить
      </RWButton>
    </div>
  );
}