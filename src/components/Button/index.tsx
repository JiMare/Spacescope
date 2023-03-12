import React from 'react';
import clsx from 'clsx';
import styles from './button.module.scss';

export interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * True if button is disabled
   */
  disabled?: boolean;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  size = 'medium',
  children,
  onClick, disabled = false
}: ButtonProps) : JSX.Element => {
  return (
    <button
      type="button"
      className={
        clsx(styles.button,
        styles['button--'+size], {
          [styles['button--primary']]: primary,
              [styles['button--secondary']]: !primary
        })
      }
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
