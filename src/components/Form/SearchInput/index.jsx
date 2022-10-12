import React from 'react';
import PropTypes from 'prop-types';
import Styles from './SearchInput.module.scss';
import classNames from 'classnames';
import MagnifyingGlass from 'components/Icons/MagnifyingGlass';

const SearchInput = ({ label, containerClassName, ...props }) => {
  return (
    <div className={classNames(Styles.container, containerClassName)}>
      <MagnifyingGlass className={Styles.icon} />
      <input type='text' className={Styles.input} {...props} />
      <label className={Styles.label}>{label}</label>
    </div>
  );
};

SearchInput.propTypes = {
  label: PropTypes.string,
  containerClassName: PropTypes.string,
};

export default SearchInput;
