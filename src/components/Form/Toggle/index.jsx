import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Toggle.module.scss';
import classNames from 'classnames';

const Toggle = ({ label, ...props }) => {
  return (
    <label className={Styles.switch}>
      <input type='checkbox' {...props} />
      <span className={classNames(Styles.slider, Styles.round)} />
    </label>
  );
};

Toggle.propTypes = {
  label: PropTypes.string,
};

export default Toggle;
