import Styles from './Container.module.scss';
import Text from 'components/Text';

const Container = ({ children }) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <Text>{'Invoices'}</Text>
        <Text variant='description'>
          {'List of invoices created by members'}
        </Text>
      </div>
      <div className={Styles.body}>{children}</div>
    </div>
  );
};

export default Container;
