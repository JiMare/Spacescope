import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './header.module.scss';
import Container from '../Container';
import Flex from '../Flex';

type Props = {
  children: React.ReactNode;
};

const Header = ({ children }: Props): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Flex justifyContent="space-between">
          <NavLink to="/">
            <img src="images/logo.png" alt="spacescope logo" />
          </NavLink>
          {children}
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
