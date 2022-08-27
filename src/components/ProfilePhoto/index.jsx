import React, { useRef } from 'react';
import Styles from './ProfilePhoto.module.scss';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import IconCamera from 'components/Icons/Camera';
import IconRemove from 'components/Icons/Times';
import classNames from 'classnames';

const ProfilePhoto = ({ src, onRemove, initials, containerProps, allowUpload, round, profileId, ...props }) => {
  const inputRef = useRef(null);
  const fileTypes = 'image/png, image/jpeg, image/jpg';
  const { width, height } = containerProps;
  const onBrowse = () => inputRef.current.click();
  const initialStyles = [
    { color: 'white', backgroundColor: 'red' },
    { color: 'white', backgroundColor: 'blue' },
    { color: 'white', backgroundColor: 'green' },
    { color: 'white', backgroundColor: 'purple' },
    { color: 'white', backgroundColor: 'gray' },
    { color: 'white', backgroundColor: 'orange' },
    { color: 'white', backgroundColor: 'yellow' },
    { color: 'white', backgroundColor: 'maroon' },
    { color: 'white', backgroundColor: 'olive' },
    { color: 'white', backgroundColor: 'lime' },
    { color: 'white', backgroundColor: 'aqua' },
  ];
  const initialStyleIndex = profileId
    ? profileId % initialStyles.length
    : Math.floor(Math.random() * initialStyles.length - 1);

  return (
    <div
      className={classNames(Styles.container, (round && Styles.round) || Styles.square)}
      style={{ ...containerProps, width: `${width}px`, height: `${height}px` }}>
      {(src && <img src={src} alt='No Selected' className={Styles.photo} />) || (
        <div className={Styles.initials} style={{ ...initialStyles[initialStyleIndex], fontSize: width / 4 }}>
          {initials}
        </div>
      )}
      <input type={'file'} className={Styles.input} ref={inputRef} {...props} accept={fileTypes} />
      {allowUpload && (
        <>
          <Button className={Styles.browse} onClick={onBrowse}>
            <IconCamera className={Styles.browseIcon} />
          </Button>
          {src && (
            <Button className={Styles.remove} onClick={onRemove} variant={Button.Variants.SECONDARY}>
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
  containerProps: PropTypes.object,
  initials: PropTypes.string,
  profileId: PropTypes.number,
};

ProfilePhoto.defaultProps = {
  allowUpload: true,
  containerProps: { height: 100, width: 100 },
  initials: 'UN', //Unnamed
};

export default ProfilePhoto;
