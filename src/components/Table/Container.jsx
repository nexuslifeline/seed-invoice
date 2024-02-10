import Styles from './Container.module.scss';
import Text from '@components/Text';
import Button from '@components/Button';

const Container = ({ children, title, description, buttonCaption }) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <div className={Styles.titleContainer}>
          <Text>{title}</Text>
          <Text variant='description'>{description}</Text>
        </div>
        <Button>{buttonCaption}</Button>
      </div>
      <div className={Styles.body}>{children}</div>
    </div>
  );
};

export default Container;
