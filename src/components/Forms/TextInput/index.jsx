import React from 'react';
import PropTypes from 'prop-types';
import Styles from './TextInput.module.scss';
import classNames from 'classnames';

const TextInput = ({ label, ...props }) => {
  return (
    <div className={Styles.container}>
      <input type='text' className={Styles.input} {...props} placeholder=' ' />
      <label className={Styles.label}>{label}</label>
    </div>
  );
};

TextInput.propTypes = {

};

export default TextInput;
