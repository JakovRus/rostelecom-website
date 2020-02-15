import React from 'react';
import {Container} from 'semantic-ui-react';
import styles from "./container.module.scss"

export function RWContainer(props) {
  const {children, ...rest} = props;

  return (
    <Container {...rest} className={`${styles.container} ${rest.className}`}>
      {children}
    </Container>
  );
}