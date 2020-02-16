import React from 'react';
import {NavigationItem} from './navigation-item/navigation-item';

import styles from './navigation.module.scss';

export function Navigation({items}) {
  return (
    <nav className={styles.navigation}>
      <NavigationItems items={items}/>
    </nav>
  );
}

function NavigationItems({items}) {
  return items.map(item => <NavigationItem to={item} text={item} key={item}/>);
}