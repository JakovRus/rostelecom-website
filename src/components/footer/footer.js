import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';

import styles from './footer.module.scss';
import {RWContainer} from "../container/container";

export function Footer() {
  const data = useStaticQuery(graphql`
    query SitePhoneNumbersQuery {
      site {
        siteMetadata {
          phoneNumbers
        }
      }
    }
  `);

  return (
    <footer className={styles.footer}>
      <RWContainer className={styles.container}>
        <p className={styles.text}>
          Продолжая использовать наш сайт, вы даете согласие на
          обработку файлов Cookies и других пользовательских данных.
        </p>
        <PhoneNumbers phoneNumbers={data.site.siteMetadata.phoneNumbers} />
      </RWContainer>
    </footer>
  );
}

function PhoneNumbers({phoneNumbers}) {
  const items =  phoneNumbers.map(phoneNumber => {
    return (
      <span key={phoneNumber} className={styles.phoneNumber}>
        {phoneNumber}
      </span>
    )
  });

  return (
    <div className={styles.phoneNumbers}>
      {items}
    </div>
  );
}