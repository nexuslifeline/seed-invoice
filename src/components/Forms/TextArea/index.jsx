import React from 'react';
import PropTypes from 'prop-types';
import Styles from './TextArea.module.scss';
import classNames from 'classnames';

const TextArea = ({ label, ...props }) => {
  return (
    <div className={Styles.container}>
      <textarea className={Styles.textarea} {...props}  />
      <label className={Styles.label}>{label}</label>
    </div>
  );
};

TextArea.propTypes = {

};

export default TextArea;
