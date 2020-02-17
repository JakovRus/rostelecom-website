import React from 'react';

import styles from './rate-card.module.scss';
import {RWButton} from '../button/button';

export function Rate(props) {
  const {price, name, description} = props;

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
      <RWButton className={styles.button}>
        Подключить
      </RWButton>
    </div>
  );
}

function RateDescription({description}) {
  return description.map(item => <li key={item}>{item}</li>);
}