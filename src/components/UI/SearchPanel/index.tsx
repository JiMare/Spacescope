import React from 'react';
import classes from './styles.module.scss';
import Button from '../Button';

export interface SearchPanelProps {
  children: React.ReactNode;
  onSearch: () => void;
  disabled?: boolean;
}

const SearchPanel = ({ children, onSearch, disabled = false }: SearchPanelProps): JSX.Element => {
  return (
    <div className={classes.searchPanel}>
      {children}
      <Button onClick={onSearch} disabled={disabled}>Search</Button>
    </div>
  );
};

export default SearchPanel;
