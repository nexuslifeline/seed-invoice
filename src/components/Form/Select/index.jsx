import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Select.module.scss';
import classNames from 'classnames';
import ReactSelect from 'react-select';
import ReactAsyncSelect from 'react-select/async';

const Select = ({ label, value, isAsync, containerClassName, ...props }) => {
  const BaseSelect = isAsync ? ReactAsyncSelect : ReactSelect;
  return (
    <div className={classNames(Styles.container, containerClassName)}>
      <BaseSelect className={Styles.baseSelect} classNamePrefix={'select'} {...props} />
      <label className={classNames(Styles.label, { [Styles.hasValue]: !!value })}>{label}</label>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  containerClassName: PropTypes.string,
  isAsync: PropTypes.bool,
};

Select.defaultProps = {
  isAsync: false,
};

export default Select;
