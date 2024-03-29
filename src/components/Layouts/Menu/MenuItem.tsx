import React from 'react';
import { useTranslate } from '@tolgee/react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import styles from './menu.module.scss';

type Props = NavLinkProps & {
  label: string;
  children?: React.ReactNode;
};

const activeStyle = {
  color: '#3cbdd9',
  textDecoration: 'underline',
};

const MenuItem = ({ label, children, ...props }: Props): JSX.Element => {
  const { t } = useTranslate();
  return (
    <NavLink
      className={styles.navlink}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      /* @ts-ignore somehow style is not defined on NavLink after styling */
      style={({ isActive }): string | undefined => (isActive ? activeStyle : undefined)}
    >
      {t(label)}
    </NavLink>
  );
};

export default MenuItem;
