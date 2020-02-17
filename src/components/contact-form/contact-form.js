import React, {useState} from 'react';
import {RWInput, RWPhoneInput} from "../input/input";
import {RWButton} from "../button/button";

import styles from './contact-from.module.scss';
import {useValidation, validate} from "./utils";

const initialState = {
  name: false,
  phone: false,
};

export function ContactForm() {
  const [name, _setName] = useState('');
  const [phone, _setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [invalidState, setInvalid] = useState(initialState);
  const [dirtyState, setDirty] = useState(initialState);

  const isInvalid = useValidation(
    name,
    phone,
    invalidState,
    setInvalid,
    dirtyState
  );

  const setName = (event) => {
    setDirty(Object.assign({}, dirtyState, {name: true}));

    const {value} = event.target;
    _setName(value);
  };

  const setPhone = (event) => {
    setDirty(Object.assign({}, dirtyState, {phone: true}));

    const {value} = event.target;
    _setPhone(value);
  };

  const submit = () => {
    const invalid = validate(name, phone, setInvalid, dirtyState, setDirty);
    if(invalid) {
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className={styles.container}>
      {
        !submitted ? (
          <Form name={name} setName={setName}
                phone={phone} setPhone={setPhone}
                submit={submit} invalidState={invalidState}
                invalid={isInvalid}
          />
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
    <div className={styles.form}>
      <RWInput value={props.name} onChange={props.setName}
               placeholder='Имя' containerClass={styles.formElement}
               invalid={props.invalidState.name}/>
      <RWPhoneInput value={props.phone} onChange={props.setPhone}
                    placeholder='Номер телефона'
                    containerClass={styles.formElement}
                    invalid={props.invalidState.phone}/>
      <RWButton className={styles.formElement}
                onClick={props.submit}
                disabled={props.invalid}
      >
        Подключить
      </RWButton>
    </div>
  )
}