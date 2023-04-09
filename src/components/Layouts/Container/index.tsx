import React from 'react';
import styles from './container.module.scss';

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props): JSX.Element => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Container;
