import React, { useRef } from 'react';
import Styles from './ProfilePhoto.module.scss';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import IconCamera from 'components/Icons/Camera';
import IconRemove from 'components/Icons/Times';
import IconNoImage from 'components/Icons/NoImage';
import classNames from 'classnames';

const ProfilePhoto = ({ src, onRemove, width, height, allowUpload, round, ...props }) => {
  const inputRef = useRef(null);
  const fileTypes = 'image/png, image/jpeg, image/jpg';

  const onBrowse = () => inputRef.current.click();

  return (
    <div
      className={classNames(Styles.container, (round && Styles.round) || Styles.square)}
      style={{ width: `${width}px`, height: `${height}px` }}>
      {(src && <img src={src} alt='No Selected' className={Styles.photo} />) || (
        <IconNoImage className={Styles.noImage} />
      )}
      <input type={'file'} className={Styles.input} ref={inputRef} {...props} accept={fileTypes} />
      {allowUpload && (
        <>
          <Button className={Styles.browse} onClick={onBrowse}>
            <IconCamera className={Styles.browseIcon} />
          </Button>
          {src && (
            <Button className={Styles.remove} onClick={onRemove} variant={Button.Variants.SECONDARY_OUTLINE}>
              <IconRemove className={Styles.iconRemove} />
            </Button>
          )}
        </>
      )}
    </div>
  );
};

ProfilePhoto.propTypes = {
  src: PropTypes.string,
  onRemove: PropTypes.func,
  allowUpload: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ProfilePhoto.defaultProps = {
  allowUpload: true,
  width: 100,
  height: 100,
};

export default ProfilePhoto;
