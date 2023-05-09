import React from 'react';
import styles from './styles.module.scss';

export interface FormFieldProps {
  label: string;
  children: React.ReactNode;
  required?: boolean;
}

const FormField = ({ label, children, required = false }: FormFieldProps): JSX.Element => {
  return (
    <div className={styles.formField}>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label>
        <div>
          {label}
          {' '}
          {required && <span className={styles.required}>*</span>}
        </div>
        {children}
      </label>
    </div>
  );
};

export default FormField;
