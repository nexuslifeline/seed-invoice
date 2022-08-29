import SVG from 'react-inlinesvg';
import IconImageFileType from 'shared/icons/image-file-type.svg';
import IconPdfFileType from 'shared/icons/pdf-file-type.svg';
import IconDocumentFileType from 'shared/icons/document-file-type.svg';

const FileType = ({ fileType, ...props }) => {
  const imageFileTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];
  let icon;

  switch (fileType) {
    case imageFileTypes.includes(fileType):
      icon = IconImageFileType;
      break;
    case 'application/pdf':
      icon = IconPdfFileType;
      break;
    default:
      icon = IconDocumentFileType;
  }
  return <SVG src={icon} {...props} />;
};

export default FileType;
