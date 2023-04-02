import React from 'react';
import PropTypes from 'prop-types';
import Styles from './TextArea.module.scss';
import classNames from 'classnames';
import InvalidFeedback from 'components/InvalidFeedback';

const TextArea = ({ label, containerClassName, error, hideLabel = true, ...props }) => {
  return (
    <div className={classNames(Styles.container, containerClassName)}>
      <textarea className={Styles.input} {...props} placeholder=' ' />
      {!hideLabel && <label className={Styles.label}>{label}</label>}
      {error && <InvalidFeedback error={error} />}
    </div>
  );
};

TextArea.propTypes = {
  label: PropTypes.string,
  containerClassName: PropTypes.string,
  error: PropTypes.string,
};

export default TextArea;
