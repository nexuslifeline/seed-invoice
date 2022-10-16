import Styles from './ImageView.module.scss';

const ImageView = ({ img: Img, title, description }) => {
  return (
    <div className={Styles.container}>
      <Img className={Styles.img} />
      {title && <h3 className={Styles.title}>{title}</h3>}
      {description && <p className={Styles.description}>{description}</p>}
    </div>
  );
};

export default ImageView;
