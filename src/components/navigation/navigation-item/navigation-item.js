import React from 'react';
import {Link} from 'gatsby';

import styles from './navigation-item.module.scss';

export function NavigationItem({text, to, className}) {
  return (
    <Link to={to} className={`${styles.item} ${className}`}>
      {text}
    </Link>
  );
}