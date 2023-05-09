import { useTranslate } from '@tolgee/react';
import Card from '../../../UI/Card';
import classes from './styles.module.scss';

const HomePageCard = (): JSX.Element => {
  const { t } = useTranslate();
  return (
    <Card secondary>
      <h3>{t('EXPLORE_WITH_US')}</h3>
      <h1 className={classes.title}>SpaceScope</h1>
      <p>{t('INTRODUCING_APP')}</p>
    </Card>
  );
};

export default HomePageCard;
