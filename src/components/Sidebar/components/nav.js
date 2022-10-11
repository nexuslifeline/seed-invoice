import Home from 'components/Icons/Mono/Home';
import Apps from 'components/Icons/Mono/Apps';
import Gear from 'components/Icons/Mono/Gear';
import Star from 'components/Icons/Star';
import Bookmark from 'components/Icons/Bookmark';
import Circles from 'components/Icons/Mono/Circles';
import Graph from 'components/Icons/Mono/Graph';
import Box from 'components/Icons/Box';
import AddGroup from 'components/Icons/AddGroup';
import Building from 'components/Icons/Building';
import Tax from 'components/Icons/Tax';
import Bag from 'components/Icons/ShoppingBag';
import Wallet from 'components/Icons/Wallet';
import Invoice from 'components/Icons/Invoice';
import CreditCard from 'components/Icons/CreditCard';
import Team from 'components/Icons/Team';
import Subfolder from 'components/Icons/Subfolder';

export const navLinks = [
  { text: 'Home', icon: Home, children: [{ text: 'Dashboard', to: '/dashboard', icon: Bookmark }] },
  {
    text: 'Workspace',
    icon: Apps,
    children: [
      { text: 'Quotes', to: '/quotes', icon: Star },
      { text: 'Sales Order', to: '/orders', icon: Bag },
      { text: 'Invoices', to: '/invoices', icon: Invoice },
      { text: 'Payments', to: '/payments', icon: Wallet },
      { text: 'Expenses', to: '/expenses', icon: CreditCard },
    ],
  },
  {
    text: 'References',
    icon: Circles,
    children: [
      { text: 'Customers', to: '/customers', icon: AddGroup },
      { text: 'Products', to: '/products', icon: Box },
    ],
  },
  {
    text: 'Reports',
    icon: Graph,
    children: [{ text: 'Sales Report', to: '/sales', icon: Bookmark }],
  },
  {
    text: 'Settings',
    icon: Gear,
    children: [
      { text: 'Company', to: '/company', icon: Building },
      { text: 'Tax', to: '/tax', icon: Tax },
      { text: 'Account', to: '/account', icon: Bookmark },
      { text: 'Payment Modes', to: '/payment-modes', icon: Star },
      { text: 'Preferences', to: '/preferences', icon: Star },
      { text: 'Categories', to: '/categories', icon: Subfolder },
      { text: 'Members', to: '/members', icon: Team },
    ],
  },
];
