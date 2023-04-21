import { useTolgee } from '@tolgee/react';
import styles from './styles.module.scss';
import IconButton from '../IconButton';
import Flex from '../../Layouts/Flex';

const LanguageSwitch = (): JSX.Element => {
  const tolgee = useTolgee(['language']);

  return (
    <Flex>
      <IconButton onClick={(): Promise<void> => tolgee.changeLanguage('cs-CZ')}>
        <img src="images/cz_icon.png" alt="cz-icon" className={styles.icon} />
      </IconButton>
      <IconButton onClick={(): Promise<void> => tolgee.changeLanguage('en')}>
        <img src="images/en_icon.png" alt="en-icon" className={styles.icon} />
      </IconButton>
    </Flex>
  );
};

export default LanguageSwitch;
