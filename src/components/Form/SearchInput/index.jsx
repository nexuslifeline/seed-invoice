import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import MagnifyingGlass from '@components/Icons/MagnifyingGlass';
import InvalidFeedback from '@components/InvalidFeedback';

import Styles from './SearchInput.module.scss';

const SearchInput = forwardRef(
  ({ label, error, containerClassName, ...props }, ref) => {
    return (
      <div className={Styles.container}>
        <div className={classNames(Styles.searchContainer, containerClassName)}>
          <MagnifyingGlass className={Styles.icon} />
          <input ref={ref} type='text' className={Styles.input} {...props} />
        </div>
        {error && <InvalidFeedback error={error} />}
      </div>
    );
  }
);

SearchInput.propTypes = {
  label: PropTypes.string,
  containerClassName: PropTypes.string,
  error: PropTypes.string
};

SearchInput.InstanceOf = 'SearchInput';

export default SearchInput;
