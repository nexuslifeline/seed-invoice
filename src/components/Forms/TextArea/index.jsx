import React from 'react';
import PropTypes from 'prop-types';
import Styles from './TextArea.module.scss';
import classNames from 'classnames';

const TextArea = ({ label, containerClassName, ...props }) => {
  return (
    <div className={classNames(Styles.container, containerClassName)}>
      <textarea className={Styles.input} {...props} placeholder=' ' />
      <label className={Styles.label}>{label}</label>
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  containerClassName: PropTypes.string,
};

export default TextArea;
