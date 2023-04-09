import styles from './styles.module.scss';
import HomePageCard from '../../components/modules/Home/HomePageCard';
import Container from '../../components/Layouts/Container';
// import Flex from '../../components/Layouts/Flex';

const HomePage = (): JSX.Element => {
  return (
    <div className={styles.home}>
      <Container>
        <div className={styles.flex}>
          <HomePageCard />
        </div>
      </Container>
    </div>
  );
};

export default HomePage;
