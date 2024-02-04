import Styles from './Container.module.scss';
import Text from '@components/Text';

const Container = ({ children, containerTitle, containerDesc }) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <Text>{containerTitle}</Text>
        <Text variant='description'>{containerDesc}</Text>
      </div>
      <div className={Styles.body}>{children}</div>
    </div>
  );
};

export default Container;
