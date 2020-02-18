import React from 'react';
import {Link} from 'gatsby';

import styles from './navigation-item.module.scss';

export function NavigationItem({text, to, className, active}) {
  return (
    <Link to={to} className={`${getStyles(active)} ${className}`}>
      {text}
    </Link>
  );
}

function getStyles(active) {
  return active ?
    `${styles.item} ${styles.active}` :
    styles.item;
}