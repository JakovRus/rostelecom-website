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
    <div className={styles.burger}
         onClick={show}/>
  );
}

function MobileMenu() {
 return (
   <Navigation className={styles.menuMobile}/>
 )
}