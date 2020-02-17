import React, {useState} from 'react';
import {RWInput, RWPhoneInput} from "../input/input";
import {RWButton} from "../button/button";

import styles from './contact-from.module.scss';

export function ContactForm() {
  const [name, _setName] = useState('');
  const [phone, _setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const setName = (event) => {
    const {value} = event.target;
    _setName(value);
  };

  const setPhone = (event) => {
    const {value} = event.target;
    _setPhone(value);
  };

  const submit = () => {
    setSubmitted(true);
  };

  return (
    <div className={styles.form}>
      {
        !submitted ? (
          <Form name={name} setName={setName}
                phone={phone} setPhone={setPhone}
                submit={submit} />
        ) : (
          <span className={styles.successMessage}>
            Ваша заявка принята! Наш сотрудник скоро перезвонит Вам.
          </span>
        )
      }
    </div>
  );
}

function Form(props) {
  return (
    <>
      <RWInput value={props.name} onChange={props.setName}
               placeholder='Имя' containerClass={styles.formElement}/>
      <RWPhoneInput value={props.phone} onChange={props.setPhone}
                    placeholder='Номер телефона'
                    containerClass={styles.formElement}/>
      <RWButton className={styles.formElement}
                onClick={props.submit}>
        Подключить
      </RWButton>
    </>
  )
}