import React from 'react';
import {NavigationItem} from './navigation-item/navigation-item';

import styles from './navigation.module.scss';


const items = ['Интернет', 'Интернет + тв', 'Видеонаблюдение'];

export function Navigation({className}) {
  return (
    <nav className={`${styles.navigation} ${className}`}>
      <NavigationItems items={items}/>
    </nav>
  );
}

function NavigationItems({items}) {
  return items.map(item => <NavigationItem to={item} text={item} key={item}/>);
}