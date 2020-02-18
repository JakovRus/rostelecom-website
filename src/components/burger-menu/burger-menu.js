import React, {useContext} from 'react';
import styles from './burger-menu.module.scss';
import {ModalContext} from '../../contexts/modal';
import {Navigation} from '../navigation/navigation';

export function BurgerMenu() {
  const context = useContext(ModalContext);
  const show = () => {
    context.open(<MobileMenu/>);
  };

  return (
    <div className={styles.burgerContainer} onClick={show}>
      <div className={styles.burger}/>
    </div>
  );
}

function MobileMenu() {
  return (
    <div className={styles.menuContainer}>
      <Navigation className={styles.menuMobile}/>
    </div>
  )
}