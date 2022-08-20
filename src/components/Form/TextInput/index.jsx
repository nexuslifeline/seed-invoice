import React from 'react';
import PropTypes from 'prop-types';
import Styles from './TextInput.module.scss';
import classNames from 'classnames';

const TextInput = ({ label, containerClassName, ...props }) => {
  return (
    <div className={classNames(Styles.container, containerClassName)}>
      <input type='text' className={Styles.input} {...props} />
      <label className={Styles.label}>{label}</label>
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  containerClassName: PropTypes.string,
};

export default TextInput;
