import React from 'react';
import Styles from './File.module.scss';
import FileType from 'components/Icons/FileType';
import Times from 'components/Icons/Times';
import PropTypes from 'prop-types';

const File = ({ file, children, onRemove, ...props }) => {
  return (
    <div className={Styles.container}>
      {children || (
        <>
          <div className={Styles.innerContainer} {...props}>
            <FileType className={Styles.icon} fileType={file.type} />
            <div>
              <div className={Styles.fileName}>{file.name}</div>
              <div className={Styles.fileType}>{file.type}</div>
            </div>
          </div>
          <div className={Styles.actionContainer} onClick={onRemove}>
            <Times className={Styles.removeIcon} />
          </div>
        </>
      )}
    </div>
  );
};

File.propTypes = {
  onRemove: PropTypes.func,
};

File.defaultPropTypes = {
  onRemove: () => {},
};

export default File;
