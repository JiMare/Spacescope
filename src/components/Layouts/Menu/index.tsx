import React from 'react';
import styles from './menu.module.scss';

type Props = {
  children: React.ReactNode;
};

const Menu = ({ children }: Props): JSX.Element => {
  return <div className={styles.menu}>{children}</div>;
};

export default Menu;
