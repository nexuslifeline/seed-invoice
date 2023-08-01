

import withAuth from 'shared/hoc/withAuth';
import { useMemo, useState, useCallback, useRef } from 'react';
import { customers } from 'data/sample/customers';
import Table from 'components/Table';
import TableContainer from 'components/Table/Container';
import ContentView from 'components/ContentView';
import Breadcrumb from 'components/Breadcrumb';
import EditProfile from 'components/Icons/EditProfile';
import Styles from './customers.module.scss'
import { useForm } from 'react-hook-form';
import Button from 'components/Button';

const Customers = (props) => {

  const { register, handleSubmit, setValue, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      age: '',
      address: '',
    }
  });

  const columns = useMemo(
    () => [
      {
        Header: 'ID #',
        accessor: 'id', // accessor is the "key" in the data
        thStyle: { width: '10%' },
      },
      {
        Header: 'Customer',
        accessor: 'name', // accessor is the "key" in the data
        thStyle: { width: '20%' },
        Cell: ({ cell: { row } }) => (
          <>
            <div>{row?.original?.name}</div>
          </>
        ),
      },
      {
        Header: 'Address',
        accessor: 'address',
        thStyle: { width: '60%' },
      },
      {
        Header: 'Age',
        accessor: 'age',
        thStyle: { width: '10%' },
      },

      {
        Header: 'Action',
        accessor: 'action',
        thStyle: { width: '80px', minWidth: '80px' },
        Cell: ({ row }) => (
          <button onClick={() => {
            setValue('firstName', row.original.name);
            setValue('lastName', row.original.name);
            setValue('age', row.original.age);
            setValue('address', row.original.address);
            setIsModalOpen(true);
          }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <EditProfile style={{ width: '24px', height: '24px', fill: 'white' }} />
          </button>
        ),
      },
    ],
    [setValue]
  );



  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState([]);

  const [pageCount, setPageCount] = useState(13);
  const fetchIdRef = useRef(0);



  const fetchData = useCallback(({ pageIndex, pageSize }) => {
    //mock fetching from server
    const fetchId = ++fetchIdRef.current;
    setIsLoading(true);
    setTimeout(() => {
      if (fetchId === fetchIdRef.current) {
        const startRow = pageSize * pageIndex;
        const endRow = startRow + pageSize;

        setTableData(customers.slice(startRow, endRow));
        setPageCount(Math.ceil(customers.length / pageSize));
        setIsLoading(false);
      }
    }, 500);
  }, []);


  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    reset();
  };

  const Modal = ({ isOpen, onClose, children }) => {
    const modalStyles = {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
      display: isOpen ? 'flex' : 'none',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    };

    return (
      <div style={modalStyles} onClick={onClose}>
        <div className={Styles.content} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  };

  return (

    <ContentView>
      <Breadcrumb
        title={'Manage Customers'}
        items={[
          { text: 'Workspace', to: '/dashboard' },
          { text: 'Customers', to: '/Customers' },
        ]}
      />

      <Modal isOpen={isModalOpen} onClose={closeModal}>

        <div className={Styles.container}>

          {/* <h2>Customer Information</h2>
          <p>Fill in all informations.</p> */}


          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >
            <div className={Styles.formboldformtitle}>
              <h2 className="">Customer Information</h2>
              <p>
                Fill in all informations.
              </p>
            </div>


            <div className={Styles.formboldinputflex}>
              <div>
                <label>First Name</label>
                <input {...register("firstName")} id="firstName" />
              </div>

              <div>
                <label>Last Name</label>
                <input {...register("lastName")} id="lastName" />
              </div>
            </div>

            <div className={Styles.formboldinputflex}>
              <div>
                <label> Email </label>
                <input {...register("email")} id="email" />
              </div>
              <div>
                <label> Phone number </label>
                <input {...register("phone")} id="phone" />
              </div>
            </div>


            <div className={Styles.formboldinputflex}>
              <div>
                <label> Mobile Number </label>
                <input {...register("mobile")} id="mobile" />
              </div>
              <div>
                <label> Fax </label>
                <input {...register("fax")} id="fax" />
              </div>
            </div>

            <div className={Styles.formboldinputflex}>
              <div>
                <label> Other </label>
                <input {...register("other")} id="other" />
              </div>
              <div>
                <label> Website </label>
                <input {...register("website")} id="website" />
              </div>
            </div>

            <div className={Styles.formboldmb3}>
              <label>Company</label>
              <input {...register("company")} id="company" />
            </div>

            <div className={Styles.formboldmb3}>
              <label>Billing Address</label>
              <input {...register("Billing")} id="Billing" />
            </div>

            <div className={Styles.formboldmb3}>
              <label>Shipping Address</label>
              <input {...register("Shipping")} id="Shipping" />
            </div>

            <div className={Styles.formboldmb3}>
              <label>Notes</label>
              <input {...register("notes")} id="notes" />
            </div>

            <div className={Styles.formboldmb3}>
              <label>Tax Information</label>
              <input {...register("tax")} id="tax" />
            </div>

            <div className={Styles.formboldmb3}>
              <label>Payment and Billing</label>
              <input {...register("Payment")} id="Payment" />
            </div>

            <div className={Styles.formboldmb3}>
              <label>Attachment</label>
              <input {...register("Attachment")} id="Attachment" />
            </div>

            <div className={Styles.containerLR}>
              <Button onClick={closeModal}>Cancel</Button>
              <Button type='submit'>Save</Button>
            </div>

          </form>

        </div>
      </Modal>

      <TableContainer
        containerTitle={'Customer'}
        containerDesc={'Customer Information'}
      >
        <Table
          columns={columns}
          data={tableData}
          isLoading={isLoading}
          pageCount={pageCount}
          fetchData={fetchData}
          showFilter={true}
          openModal={openModal}
        />
      </TableContainer>
    </ContentView>
  );
};

export default withAuth(Customers);


