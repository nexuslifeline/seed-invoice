import SVG from 'react-inlinesvg';
import IconImageFileType from 'shared/icons/image-file-type.svg';
import IconPdfFileType from 'shared/icons/pdf-file-type.svg';
import IconDocumentFileType from 'shared/icons/document-file-type.svg';

const FileType = ({ fileType, ...props }) => {
  const imageFileTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];

  const icon = (fileType) => {
    if (imageFileTypes.includes(fileType)) {
      return IconImageFileType;
    } else if (fileType === 'application/pdf') {
      return IconPdfFileType;
    } else {
      return IconDocumentFileType;
    }
  };

  return <SVG src={icon(fileType)} {...props} />;
};

export default FileType;
