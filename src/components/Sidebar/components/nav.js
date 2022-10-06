import Home from 'components/Icons/Mono/Home';
import Apps from 'components/Icons/Mono/Apps';
import Gear from 'components/Icons/Mono/Gear';
import Star from 'components/Icons/Star';
import Cash from 'components/Icons/Cash';
import Card from 'components/Icons/Card';
import Bookmark from 'components/Icons/Bookmark';

export const navLinks = [
  { text: 'Home', icon: Home, children: [{ text: 'Dashboard', to: '/dashboard', icon: Bookmark }] },
  {
    text: 'Workspace',
    icon: Apps,
    children: [
      { text: 'Quotes', to: '/quotes', icon: Star },
      { text: 'Sales Order', to: '/orders', icon: Bookmark },
      { text: 'Invoices', to: '/invoices', icon: Star },
      { text: 'Payments', to: '/payments', icon: Cash },
      { text: 'Expenses', to: '/expenses', icon: Card },
    ],
  },
  {
    text: 'Settings',
    icon: Gear,
    children: [
      { text: 'Company Profile', to: '/company', icon: Bookmark },
      { text: 'Tax', to: '/tax', icon: Star },
      { text: 'Account', to: '/account', icon: Bookmark },
    ],
  },
];
