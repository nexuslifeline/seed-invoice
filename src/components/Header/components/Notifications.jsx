import Styles from './Notifications.module.scss';
import Tab from 'components/Tab';
import ImgEmpty from 'components/Backgrounds/Images/Empty';
import ImageView from 'components/ImageView';

const Notifications = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>{'Notifications'}</div>
      <div className={Styles.body}>
        <Tab tabListClass={Styles.tabList} panelsClass={Styles.panels}>
          <Tab.Panel title={'All'} listItemClass={Styles.listItemClass}>
            <div>
              <ImageView img={ImgEmpty} title={'No Notifications'} description={'There are no notifications yet'} />
            </div>
          </Tab.Panel>
          <Tab.Panel title={'Activity'} listItemClass={Styles.listItemClass}>
            <div>
              <ImageView img={ImgEmpty} title={'No Notifications'} description={'There are no notifications yet'} />
            </div>
          </Tab.Panel>
          <Tab.Panel title={'Billing'} listItemClass={Styles.listItemClass}>
            <div>
              <ImageView img={ImgEmpty} title={'No Notifications'} description={'There are no notifications yet'} />
            </div>
          </Tab.Panel>
        </Tab>
      </div>
    </div>
  );
};

export default Notifications;
