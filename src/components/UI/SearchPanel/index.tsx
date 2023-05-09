import React from 'react';
import classes from './styles.module.scss';
import Button from '../Button';

export interface SearchPanelProps {
  children: React.ReactNode;
  onSearch: () => void;
}

const SearchPanel = ({ children, onSearch }: SearchPanelProps): JSX.Element => {
  return (
    <div className={classes.searchPanel}>
      <div>
        {children}
      </div>
      <Button onClick={onSearch}>Search</Button>
    </div>
  );
};

export default SearchPanel;
