import React, {useContext} from 'react';

import styles from './rate-card.module.scss';
import {RWButton} from '../button/button';
import {ModalContext} from "../../contexts/modal";
import {ContactForm} from "../contact-form/contact-form";
import {RateContext} from "../../contexts/rate";

export function Rate(props) {
  const {price, name, description} = props;
  const modalContext = useContext(ModalContext);
  const rateContext = useContext(RateContext);

  const onClick = () => {
    rateContext.rate.setRate({rateName: name, price, description});

    modalContext.open(
      <ContactForm />
    )
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>
        {name}
      </h2>
      <span className={styles.price}>
        {price} р/мес
      </span>
      <ul>
        <RateDescription description={description}/>
      </ul>
      <RWButton className={styles.button} onClick={onClick}>
        Подключить
      </RWButton>
    </div>
  );
}

function RateDescription({description}) {
  return description.map(item => <li key={item}>{item}</li>);
}