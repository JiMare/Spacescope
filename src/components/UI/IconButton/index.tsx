import React from 'react';
import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

const IconButton = ({ children, onClick }: Props): JSX.Element => {
  return (
    <button type="button" onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default IconButton;
