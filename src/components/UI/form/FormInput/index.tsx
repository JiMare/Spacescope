import React from 'react';
import styles from './styles.module.scss';

export interface FormInputProps {
  value: string;
  setValue: (value: string) => void;
}

const FormInput = ({ value, setValue }: FormInputProps): JSX.Element => {
  const handleChange = (event: any): void => {
    setValue(event.target.value);
  };

  return (
    <input value={value} onChange={handleChange} className={styles.input} />
  );
};

export default FormInput;
