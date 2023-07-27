
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

          <h2>Customer Information</h2>
          <p>Fill in all informations.</p>
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
            })}
          >

            <div className={Styles.flexColumn}>
              <input {...register("firstName")} id="firstName" placeholder='First Name' />
              <input {...register("middleName")} id="middleName" placeholder='Middle Name' />
              <input {...register("lastName")} id="lastName" placeholder='Last Name' />
              <input {...register("address")} id="address" placeholder='Address' />
              <input {...register("age")} id="age" placeholder='Age' />
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


