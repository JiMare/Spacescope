import React from 'react';
import clsx from 'clsx';
import styles from './card.module.scss';

interface Props {
  children: React.ReactNode;
  secondary?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const Card = ({ children, secondary = false, size }: Props): JSX.Element => {
  return (
    <div className={clsx(styles.card, styles[`card--${size}`], { [styles['card--primary']]: !secondary, [styles['card--secondary']]: secondary })}>{children}</div>
  );
};

export default Card;
