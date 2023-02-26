import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  ...rest
}) => {
  const classNames = `button button--${variant} button--${size}`;

  return (
    <button className={classNames} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

