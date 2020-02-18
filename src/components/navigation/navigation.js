import React from 'react';
import {NavigationItem} from './navigation-item/navigation-item';

import styles from './navigation.module.scss';


const items = [
  {
    title: 'Интернет',
    to: '/internet/',
  },
  {
    title: 'Интернет + ТВ',
    to: '/',
  },
  {
    title: 'Видеонаблюдение',
    to: '/cctv/'
  },
];

export function Navigation({className, pathname}) {
  return (
    <nav className={`${styles.navigation} ${className}`}>
      <NavigationItem to='/' text='Главная'
                      className={styles.mainLink}/>
      <NavigationItems items={items} pathname={pathname}/>
    </nav>
  );
}

function NavigationItems({items, pathname}) {
  return items.map(item => {
      const active = item.to === pathname;

      return (
        <NavigationItem to={item.to} key={item.title + item.to}
                        text={item.title} active={active} />
      );
    }
  );
}