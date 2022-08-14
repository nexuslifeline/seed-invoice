import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Button.module.scss';
import classNames from 'classnames';

const sizeClasses = {
  sm: Styles.small,
  md: Styles.medium,
  lg: Styles.large
};

const sizes = {
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
};

const variantClasses = {
  primary: Styles.primary,
  secondary: Styles.secondary,
  warning: Styles.warning,
  danger: Styles.danger,
  success: Styles.success
}

const variants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  WARNING: 'warning',
  DANGER: 'danger',
  SUCCESS: 'success'
}

const Button = ({ label, size, variant, onClick, disabled, children }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={classNames(Styles.container, variantClasses[variant], sizeClasses[size])}>
      {children || label}
    </button>
  );
};

Button.Sizes = sizes;
Button.Variants = variants;

Button.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
  isBlock: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool
};

Button.defaultProps = {
  label: 'Button',
  size: Button.Sizes.MEDIUM,
  variant: Button.Variants.PRIMARY,
  disabled: false
}

export default Button;