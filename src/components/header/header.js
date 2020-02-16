import React from 'react';
import Headroom from 'react-headroom';
import {Link} from 'gatsby';

import {Navigation} from '../navigation/navigation';

import styles from './header.module.scss';

const Header = () => {
  const headerItems = ['Интернет', 'Интернет + тв', 'Видеонаблюдение'];

  return (
    <Headroom
      upTolerance={10}
      downTolerance={10}>
      <div className={styles.container}>
        <Link to='/' className={styles.logo}/>
        <Navigation items={headerItems}/>
      </div>
    </Headroom>
  );
};

export default Header;

