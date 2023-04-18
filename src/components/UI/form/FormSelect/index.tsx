import React from 'react';
import styles from './styles.module.scss';

export type FormSelectType = {
  value: string | number;
  label: string;
};
export interface FormSelectProps {
  list: FormSelectType[];
  value: string | number;
  setValue: (value: string | number) => void;
}

const FormSelect = ({ list, value, setValue }: FormSelectProps): JSX.Element => {
  const handleChange = (event: any): void => {
    setValue(event.target.value);
  };

  return (
    <select value={value} onChange={handleChange} className={styles.select}>
      {list.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
    </select>
  );
};

export default FormSelect;
