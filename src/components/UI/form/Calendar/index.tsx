import React, { useState } from 'react';
import clsx from 'clsx';
import DatePicker from 'react-multi-date-picker';
import DateObject from 'react-date-object';
import styles from './styles.module.scss';

export interface CalendarProps {
  value: DateObject;
  onChange: (value: DateObject) => void;
}

const Calendar = ({ value, onChange }: CalendarProps): JSX.Element => {
  const [error, setError] = useState<boolean>(false);
  const onDateChange = (newValue: DateObject): void => {
    if (newValue == null) {
      setError(true);
    } else {
      onChange(newValue);
      setError(false);
    }
  };

  return (
    <div className={clsx(
      styles.calendar,
      error ? styles.invalid : '',
    )}
    >
      <DatePicker
        value={value}
        onChange={onDateChange}
      />
    </div>
  );
};

export default Calendar;
