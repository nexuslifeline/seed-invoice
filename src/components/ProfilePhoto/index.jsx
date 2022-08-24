import React, { useRef } from 'react';
import Styles from './ProfilePhoto.module.scss';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import classNames from 'classnames';

const ProfilePhoto = ({ file, onRemove, width, height, showUploadRemove, round, ...props }) => {
  const inputRef = useRef(null);

  const onBrowse = () => {
    inputRef.current.click();
  };

  const CameraIcon = ({ className }) => {
    return (
      <svg className={classNames(className)} viewBox='0 0 28 28' version='1.1' xmlns='http://www.w3.org/2000/svg'>
        <g id='🔍-Product-Icons'>
          <g id='ic_fluent_camera_28_regular'>
            <path
              d='M16.9510797,2.50304787 C17.7274884,2.50304787 18.4490393,2.9033378 18.8600157,3.56205529 L20.3810589,6 L22.75,6 C24.5449254,6 26,7.45507456 26,9.25 L26,21.75 C26,23.5449254 24.5449254,25 22.75,25 L5.25,25 C3.45507456,25 2,23.5449254 2,21.75 L2,9.25 C2,7.45507456 3.45507456,6 5.25,6 L7.81851226,6 L9.2010861,3.62210494 C9.60389995,2.92930357 10.3448058,2.50304787 11.1462,2.50304787 L16.9510797,2.50304787 Z M16.9510797,4.00304787 L11.1462,4.00304787 C10.9172302,4.00304787 10.7030739,4.10743702 10.5620036,4.28269019 L10.4978287,4.3760669 L8.8983713,7.12698098 C8.76410002,7.35791477 8.51713142,7.5 8.25,7.5 L5.25,7.5 C4.28350169,7.5 3.5,8.28350169 3.5,9.25 L3.5,21.75 C3.5,22.7164983 4.28350169,23.5 5.25,23.5 L22.75,23.5 C23.7164983,23.5 24.5,22.7164983 24.5,21.75 L24.5,9.25 C24.5,8.28350169 23.7164983,7.5 22.75,7.5 L19.9649865,7.5 C19.7061837,7.5 19.4656667,7.36657003 19.3286745,7.14699753 L17.5873917,4.35605034 C17.4503996,4.13647785 17.2098826,4.00304787 16.9510797,4.00304787 Z M14,9.5009905 C17.0375661,9.5009905 19.5,11.9634244 19.5,15.0009905 C19.5,18.0385566 17.0375661,20.5009905 14,20.5009905 C10.9624339,20.5009905 8.5,18.0385566 8.5,15.0009905 C8.5,11.9634244 10.9624339,9.5009905 14,9.5009905 Z M14,11.0009905 C11.790861,11.0009905 10,12.7918515 10,15.0009905 C10,17.2101295 11.790861,19.0009905 14,19.0009905 C16.209139,19.0009905 18,17.2101295 18,15.0009905 C18,12.7918515 16.209139,11.0009905 14,11.0009905 Z'
              id='🎨-Color'></path>
          </g>
        </g>
      </svg>
    );
  };

  const RemoveIcon = ({ className }) => {
    return (
      <svg className={classNames(className)} viewBox='0 0 512 512' data-name='Layer 1' id='Layer_1'>
        <polygon
          class='cls-1'
          points='304.41 160 352 207.59 303.59 256 352 304.41 304.41 352 256 303.59 207.59 352 160 304.41 208.41 256 160 207.59 207.59 160 256 208.41 304.41 160'
        />
      </svg>
    );
  };

  const NoImage = ({ className }) => {
    return (
      <svg className={classNames(className)} version='1.1' viewBox='0 0 256 256'>
        <g transform='translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)'>
          <path
            d='M 88 20.462 c -1.104 0 -2 0.896 -2 2 v 45.076 c 0 1.713 -0.675 3.268 -1.768 4.424 L 62.666 49.866 c -0.74 -0.759 -1.944 -0.808 -2.744 -0.112 L 45.115 62.63 l -2.122 -2.183 c -0.771 -0.793 -2.037 -0.809 -2.828 -0.039 s -0.81 2.036 -0.039 2.828 l 3.441 3.538 c 0.739 0.76 1.945 0.812 2.746 0.114 l 14.81 -12.878 l 19.417 19.894 c -0.324 0.05 -0.653 0.084 -0.991 0.084 H 25.162 c -1.104 0 -2 0.896 -2 2 s 0.896 2 2 2 h 54.386 c 2.036 0 3.932 -0.594 5.54 -1.605 c 0.037 -0.022 0.073 -0.042 0.109 -0.066 C 88.082 74.456 90 71.22 90 67.538 V 22.462 C 90 21.357 89.104 20.462 88 20.462 z'
            transform=' matrix(1 0 0 1 0 0) '
            stroke-linecap='round'
          />
          <path
            d='M 89.489 5.094 c -0.739 -0.823 -2.001 -0.892 -2.825 -0.153 l -7.882 7.07 H 10.452 C 4.688 12.01 0 16.699 0 22.462 v 45.076 c 0 4.26 2.565 7.926 6.229 9.552 l -5.565 4.992 c -0.822 0.738 -0.891 2.003 -0.153 2.825 C 0.906 85.347 1.452 85.571 2 85.571 c 0.476 0 0.953 -0.169 1.335 -0.511 l 86 -77.143 C 90.157 7.181 90.227 5.916 89.489 5.094 z M 10.452 16.01 h 63.871 L 34.509 51.724 l -9.858 -10.135 c -0.748 -0.77 -1.971 -0.81 -2.771 -0.093 L 4 57.562 v -35.1 C 4 18.904 6.894 16.01 10.452 16.01 z M 4 67.538 v -4.599 l 19.125 -17.184 l 8.404 8.641 L 9.734 73.947 C 6.513 73.588 4 70.853 4 67.538 z'
            transform=' matrix(1 0 0 1 0 0) '
            stroke-linecap='round'
          />
          <path
            d='M 32.889 36.844 c -4.517 0 -8.191 -3.675 -8.191 -8.191 s 3.675 -8.191 8.191 -8.191 s 8.191 3.674 8.191 8.191 S 37.406 36.844 32.889 36.844 z M 32.889 24.462 c -2.311 0 -4.191 1.88 -4.191 4.191 s 1.88 4.191 4.191 4.191 s 4.191 -1.88 4.191 -4.191 S 35.2 24.462 32.889 24.462 z'
            transform=' matrix(1 0 0 1 0 0) '
            stroke-linecap='round'
          />
        </g>
      </svg>
    );
  };

  const fileTypes = 'image/png, image/jpeg, image/jpg';

  const ActionButtons = ({ file }) => {
    return (
      <>
        <Button className={Styles.browse} onClick={onBrowse}>
          <CameraIcon className={Styles.browseIcon} />
        </Button>
        {file && (
          <Button className={Styles.remove} onClick={onRemove} variant={'danger'}>
            <RemoveIcon className={Styles.removeIcon} />
          </Button>
        )}
      </>
    );
  };

  // const shapeClass = round ? Styles.round : Styles.square;

  return (
    <div
      className={classNames(Styles.container, (round && Styles.round) || Styles.square)}
      style={{ width: `${width}px`, height: `${height}px` }}>
      {(file && <img src={file} alt='No Selected' className={Styles.photo} />) || (
        <NoImage className={Styles.noImage} />
      )}
      <input type={'file'} className={Styles.input} ref={inputRef} {...props} accept={fileTypes} />
      {showUploadRemove && <ActionButtons file={file} />}
    </div>
  );
};

ProfilePhoto.propTypes = {
  onRemove: PropTypes.func,
  showUploadRemove: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ProfilePhoto.defaultProps = {
  showUploadRemove: true,
  width: 100,
  height: 100,
};

export default ProfilePhoto;
