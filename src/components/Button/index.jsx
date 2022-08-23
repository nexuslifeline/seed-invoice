import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Styles from './Button.module.scss';
import classNames from 'classnames';
import { Menu, Transition } from '@headlessui/react';

const variantClasses = {
  primary: Styles.primary,
  secondary: Styles.secondary,
  primaryOutline: Styles.primaryOutline,
  secondaryOutline: Styles.secondaryOutline,
};

const variants = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  PRIMARY_OUTLINE: 'primaryOutline',
  SECONDARY_OUTLINE: 'secondaryOutline',
};

const iconPlacements = {
  LEFT: 'left',
  RIGHT: 'right',
};

const ButtonDefaultContent = ({ label, icon, iconPlacement }) => {
  const isIconLeft = iconPlacement === iconPlacements.LEFT ?? false;

  return (
    <div>
      {icon && isIconLeft && <span className={classNames(Styles.icon, Styles.iconLeft)}>{icon}</span>}
      {label}
      {icon && !isIconLeft && <span className={classNames(Styles.icon, Styles.iconRight)}>{icon}</span>}
    </div>
  );
};

const MenuItemDefaultContent = ({ label, icon }) => {
  return (
    <div>
      {icon && <span className={classNames(Styles.icon, Styles.iconLeft)}>{icon}</span>}
      {label}
    </div>
  );
};

const Button = ({ moreActions, icon, iconPlacement, label, variant, block, children, ...props }) => {
  const blockClass = block ? Styles.block : '';

  if (moreActions?.length > 0) {
    return (
      <Menu as='div' className={Styles.menu}>
        <Menu.Button className={classNames(Styles.button, variantClasses[variant], blockClass)}>
          <ButtonDefaultContent icon={icon} iconPlacement={iconPlacement} label={label} />
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
            {moreActions.map(({ label, icon, children, ...props }, index) => (
              <Menu.Item key={index} className={Styles.menuItem} {...props}>
                <div>{children || <MenuItemDefaultContent icon={icon} label={label} />}</div>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    );
  }

  return (
    <button className={classNames(Styles.button, variantClasses[variant], blockClass)} {...props}>
      {children || <ButtonDefaultContent icon={icon} iconPlacement={iconPlacement} label={label} />}
    </button>
  );
};

Button.Variants = variants;

Button.propTypes = {
  label: PropTypes.string,
  isBlock: PropTypes.bool,
  block: PropTypes.bool,
  moreActions: PropTypes.array,
  icon: PropTypes.any,
};

Button.defaultProps = {
  label: 'Button',
  variant: Button.Variants.PRIMARY,
  block: false,
};

export default Button;
