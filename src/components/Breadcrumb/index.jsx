import Styles from './Breadcrumb.module.scss';
import Text from 'components/Text';

const Breadcrumb = ({ title, items }) => {
  return (
    <div className={Styles.container}>
      <Text variant='title' size='xl'>
        {'Manage Invoices'}
      </Text>
      <ul className={Styles.items}>
        <li className={Styles.item}>{'Workpspace'}</li>
        <li className={Styles.item}>{'Invoices'}</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
