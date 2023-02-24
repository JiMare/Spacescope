import classes from './styles.module.css';
import HomePageCard from '../../components/HomePageCard';

const HomePage = (): JSX.Element => {
  return (
    <div className={classes.home}>
      <HomePageCard />
    </div>
  );
};

export default HomePage;
