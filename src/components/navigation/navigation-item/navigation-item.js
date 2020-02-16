import React from 'react';
import {Link} from 'gatsby';

import styles from './navigation-item.module.scss';

export function NavigationItem({text, to}) {
  return (
    <Link to={to} className={styles.item}>
      {text}
    </Link>
  );
}