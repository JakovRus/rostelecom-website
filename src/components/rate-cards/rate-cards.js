import React from 'react';
import {Rate} from '../rate-card/rate-card';
import styles from './rate-cards.module.scss';

export function RateCards(props) {
  const {data, type} = props;
  const {edges} = data[type];
  const rates = getRates(edges);

  return (
    <div className={styles.container}>
      {rates}
    </div>
  );
}

export const rateTypes = {
  INTERNET_AND_TV: 'allRatesInternetAndTvJson',
  INTERNET: 'INTERNET',
  CCTV: 'CCTV',
};

function getRates(edges) {
  return edges.map(edge => {
    const {node} = edge;
    return (
      <Rate name={node.name}
            description={node.description}
            price={node.price}/>
    );
  });
}