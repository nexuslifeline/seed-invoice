import { Tab } from '@headlessui/react';
import PropTypes from 'prop-types';
import Styles from './Tab.module.scss';

const Panel = ({ children }) => {
  return <Tab.Panel className={Styles.panelItem}>{children}</Tab.Panel>;
};

const SimpleTab = ({ children, ...props }) => {
  return (
    <Tab.Group {...props}>
      {children.length > 0 && (
        <Tab.List className={Styles.tabList}>
          {children.map((item) => (
            <Tab className={Styles.listItem}>{item?.props?.title}</Tab>
          ))}
        </Tab.List>
      )}
      <Tab.Panels>{children || ''}</Tab.Panels>
    </Tab.Group>
  );
};

SimpleTab.Panel = Panel;

SimpleTab.propTypes = {
  items: PropTypes.array,
  children: PropTypes.node,
};

export default SimpleTab;
