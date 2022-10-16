import Styles from './Notifications.module.scss';
import Tab from 'components/Tab';

const Notifications = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>{'Notifications'}</div>
      <div className={Styles.body}>
        <Tab tabListClass={Styles.tabList} panelsClass={Styles.panels}>
          <Tab.Panel title={'All'} listItemClass={Styles.listItemClass}>
            <span>{'Tab 1'}</span>
          </Tab.Panel>
          <Tab.Panel title={'Activity'} listItemClass={Styles.listItemClass}>
            <span>{'Tab 2'}</span>
          </Tab.Panel>
          <Tab.Panel title={'Billing'} listItemClass={Styles.listItemClass}>
            <span>{'Tab 3'}</span>
          </Tab.Panel>
        </Tab>
      </div>
    </div>
  );
};

export default Notifications;
