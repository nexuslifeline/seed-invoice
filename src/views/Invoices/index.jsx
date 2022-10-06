import withAuth from 'shared/hoc/withAuth';

const Invoices = (props) => {
  return <div style={{ padding: '30px' }}>This is the Invoice</div>;
};

export default withAuth(Invoices);
