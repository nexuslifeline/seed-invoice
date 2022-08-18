import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Styles from './Button.module.scss';
import classNames from 'classnames';
import { Menu, Transition } from '@headlessui/react';

const sizeClasses = { sm: Styles.small, md: Styles.medium, lg: Styles.large };

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
  success: Styles.success,
  primaryOutline: Styles.primaryOutline,
  secondaryOutline: Styles.secondaryOutline,
  dangerOutline: Styles.dangerOutline,
  successOutline: Styles.successOutline,
};

const variants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  WARNING: 'warning',
  DANGER: 'danger',
  SUCCESS: 'success',
  PRIMARY_OUTLINE: 'primaryOutline',
  SECONDARY_OUTLINE: 'secondaryOutline',
  DANGER_OUTLINE: 'dangerOutline',
  SUCCESS_OUTLINE: 'successOutline',
};
const Button = ({ moreActions, label, size, variant, disabled, pill, block, children, ...props }) => {
  const pillClass = pill ? Styles.pill : '';
  const blockClass = block ? Styles.block : '';
  if (moreActions && moreActions.length > 0) {
    return (
      <Menu as='div' className={Styles.menu}>
        <Menu.Button
          className={classNames(Styles.container, variantClasses[variant], sizeClasses[size], pillClass, blockClass)}>
          {label}
          <svg
            width='24px'
            height='24px'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            className={Styles.chevronDown}>
            <path d='M22.987 10.25l-9 7.99c-.57.51-1.28.76-1.99.76s-1.42-.25-1.98-.74c0-.01-.01-.01-.01-.01l-.02-.02-8.98-7.98c-1.24-1.1-1.35-3.002-.25-4.242 1.1-1.24 3-1.35 4.23-.25l7.01 6.23 7.01-6.23c1.24-1.1 3.13-.99 4.24.25 1.1 1.24.98 3.13-.26 4.24z' />
          </svg>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter={Styles.transitionEnter}
          enterFrom={Styles.enterFrom}
          enterTo={Styles.enterTo}
          leave={Styles.transitionLeave}
          leaveFrom={Styles.leaveFrom}
          leaveTo={Styles.leaveTo}>
          <Menu.Items className={Styles.menuItems}>
            {moreActions.map(({ label, ...props }, index) => (
              <Menu.Item key={index} className={Styles.menuItem} {...props}>
                <div style={{ maxWidth: '100%' }}>{label}</div>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    );
  } else {
    return (
      <button
        disabled={disabled}
        className={classNames(Styles.container, variantClasses[variant], sizeClasses[size], pillClass, blockClass)}
        {...props}>
        {children || label}
      </button>
    );
  }
};

Button.Sizes = sizes;
Button.Variants = variants;

Button.propTypes = {
  label: PropTypes.string,
  size: PropTypes.string,
  isBlock: PropTypes.bool,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  pill: PropTypes.bool,
  block: PropTypes.bool,
  moreActions: PropTypes.array,
};

Button.defaultProps = {
  label: 'Button',
  size: Button.Sizes.MEDIUM,
  variant: Button.Variants.PRIMARY,
  disabled: false,
  pill: false,
  block: false,
};

export default Button;
