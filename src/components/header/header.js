import React from 'react';
import Headroom from 'react-headroom';
import {Link} from 'gatsby';

import {Navigation} from '../navigation/navigation';

import styles from './header.module.scss';
import {BurgerMenu} from '../burger-menu/burger-menu';

const Header = ({pathname}) => {
  return (
    <Headroom
      upTolerance={10}
      downTolerance={10}
      className={styles.headroom}
    >
      <div className={styles.container}>
        <Link to='/' className={styles.logo}/>
        <Navigation pathname={pathname}/>
        <BurgerMenu/>
      </div>
    </Headroom>
  );
};

export default Header;

