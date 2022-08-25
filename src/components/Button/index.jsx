import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Button.module.scss';
import classNames from 'classnames';
import { variants, variantClasses } from './common/contants';

import Content from './common/Content';
import ButtonMenu from './ButtonMenu';

const Button = ({ moreActions, icon, iconPlacement, label, variant, block, classsName, children, ...props }) => {
  if (moreActions?.length > 0) {
    return <ButtonMenu {...{ moreActions, icon, iconPlacement, label, variant, block }} />;
  }

  return (
    <button
      className={classNames(Styles.button, variantClasses[variant], classsName, { [Styles.block]: block })}
      {...props}>
      {children || <Content {...{ icon, iconPlacement, label }} />}
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
