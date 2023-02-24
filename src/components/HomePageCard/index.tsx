import classes from './styles.module.css';

const HomePageCard = (): JSX.Element => {
  return (
    <div className={classes.card}>
      <h3>Explore the universe with us, use</h3>
      <h1 className={classes.title}>SpaceScope</h1>
      <p>
        This application is based on NASA&apos;s API. You can browse the latest space images, find
        out about the weather on Mars, or track Earth&apos;s climate changes here. You can also get
        information about ongoing missions and much more. Discover the mysteries of the universe
        with us and let them inspire you. Start your discoveries right now.`
      </p>
    </div>
  );
};

export default HomePageCard;
