import React from 'react';
import classes from './HomePage.module.css';
import HomePageCard from '../components/home/HomePageCard';

const HomePage = (): JSX.Element => {
  return (
    <div className={classes.home}>
      <HomePageCard />
    </div>
  );
};

export default HomePage;
