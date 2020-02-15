import React from 'react';
import {Card} from 'semantic-ui-react';
import {Link} from 'gatsby';

import styles from './rate-card.module.scss';

export function Rate(props) {
  const {price, name, description} = props;

  return (
    <Card as={Link}>
      <Card.Content className={styles.content}>
        <Card.Header as='h1'>
          {name}
        </Card.Header>
        <Card.Description>
          <ul>
            <RateDescription description={description} />
          </ul>
        </Card.Description>
        <Card.Meta className={styles.price}>
          {price} р/мес
        </Card.Meta>
      </Card.Content>
    </Card>
  )
}

function RateDescription({description}) {
  return description.map(item => <li>{item}</li>)
}