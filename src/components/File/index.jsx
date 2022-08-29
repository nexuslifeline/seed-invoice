import React from 'react';
import Styles from './File.module.scss';
import FileType from 'components/Icons/FileType';

const File = ({ file, children, ...props }) => {
  return (
    <div className={Styles.container} {...props}>
      {children || (
        <>
          <FileType className={Styles.icon} fileType={file.type} />
          <div>
            <div className={Styles.fileName}>{file.name}</div>
            <div className={Styles.fileType}>{file.type}</div>
          </div>
        </>
      )}
    </div>
  );
};

File.propTypes = {};

export default File;
