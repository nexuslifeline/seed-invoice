import withAuth from 'shared/hoc/withAuth';

const Customers = (props) => {
  return <div style={{ padding: '30px' }}>This is the Customers</div>;
};

export default withAuth(Customers);
