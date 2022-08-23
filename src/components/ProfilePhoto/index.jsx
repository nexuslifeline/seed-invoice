import classNames from 'classnames';
import React, { useRef } from 'react';
import Styles from './ProfilePhoto.module.scss';
import PropTypes from 'prop-types';

const ProfilePhoto = ({ file, onRemove, ...props }) => {
  const inputRef = useRef(null);

  const onBrowse = () => {
    inputRef.current.click();
  };

  return (
    <div className={classNames(Styles.container, Styles.square)}>
      <img src={file} alt='' className={Styles.photo} />
      <input type={'file'} className={Styles.input} ref={inputRef} {...props} />
      <button className={Styles.browse} onClick={onBrowse}>
        +
      </button>
      <button className={Styles.remove} onClick={onRemove}>
        x
      </button>
    </div>
  );
};

ProfilePhoto.propTypes = {
  onRemove: PropTypes.func,
};

export default ProfilePhoto;
