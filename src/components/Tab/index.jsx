import { Tab } from '@headlessui/react';
import PropTypes from 'prop-types';
import Styles from './Tab.module.scss';

const Panel = ({ children }) => {
  return <Tab.Panel className={Styles.panelItem}>{children}</Tab.Panel>;
};

const BaseTab = ({ children, ...props }) => {
  return (
    <Tab.Group {...props}>
      {children.length > 0 && (
        <Tab.List className={Styles.tabList}>
          {children.map((item, idx) => (
            <Tab key={idx} className={Styles.listItem}>
              {item?.props?.title}
            </Tab>
          ))}
        </Tab.List>
      )}
      <Tab.Panels>{children || ''}</Tab.Panels>
    </Tab.Group>
  );
};

BaseTab.Panel = Panel;

BaseTab.propTypes = {
  items: PropTypes.array,
  children: PropTypes.node,
};

export default BaseTab;
