import React from 'react';
import { useTolgee } from '@tolgee/react';

const LanguageSwitch = (): JSX.Element => {
  const tolgee = useTolgee(['language']);

  return (
    <div>
      <button type="button" onClick={(): Promise<void> => tolgee.changeLanguage('cs-CZ')}>
        CZ
      </button>
      <button type="button" onClick={(): Promise<void> => tolgee.changeLanguage('en')}>
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
