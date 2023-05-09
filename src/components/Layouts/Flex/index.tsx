import React from 'react';
import clsx from 'clsx';
import styles from './flex.module.scss';

type Props = {
  children: React.ReactNode;
  justifyContent?: 'center' | 'space-between';
  alignItems?: 'center';
  wrap?: boolean;
};

const Flex = ({
  children, wrap, justifyContent = 'center', alignItems = 'center',
}: Props): JSX.Element => {
  return (
    <div
      className={clsx(styles.flex, styles[`justify--${justifyContent}`], styles[`align--${alignItems}`], { [styles['flex--wrap']]: wrap })}
    >
      {children}
    </div>
  );
};

export default Flex;
