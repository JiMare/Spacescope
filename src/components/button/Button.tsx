import React from 'react';
import clsx from 'clsx';
import './button.css';

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
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  size = 'medium',
  children,
  onClick,
}: ButtonProps) : JSX.Element => {
  return (
    <button
      type="button"
      className={
        clsx(
        `button button--${size}`, { 
          'button--primary': primary,
          'button--secondary': !primary
        })
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
