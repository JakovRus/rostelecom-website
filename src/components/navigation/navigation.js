import React from 'react';
import {NavigationItem} from './navigation-item/navigation-item';

import styles from './navigation.module.scss';


const items = [
  {
    title: 'Интернет',
    to: '/internet/',
  }, {
    title: 'Интернет + ТВ',
    to: '/',
  }, {
    title: 'Видеонаблюдение',
    to: '/cctv/'
  }];

export function Navigation({className}) {
  return (
    <nav className={`${styles.navigation} ${className}`}>
      <NavigationItems items={items}/>
    </nav>
  );
}

function NavigationItems({items}) {
  return items.map(item => <NavigationItem to={item.to} text={item.title} key={item.title + item.to}/>);
}