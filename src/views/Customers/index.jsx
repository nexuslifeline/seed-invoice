
import withAuth from 'shared/hoc/withAuth';
import { useMemo, useState, useCallback, useRef } from 'react';
import { customers } from 'data/sample/customers';
import Table from 'components/Table';
import TableContainer from 'components/Table/Container';
import ContentView from 'components/ContentView';
import Breadcrumb from 'components/Breadcrumb';
import EditProfile from 'components/Icons/EditProfile';
import { useForm } from 'react-hook-form';



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

    const contentStyles = {
      background: '#fff',
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
      maxWidth: '80%',
      maxHeight: '80%',
      overflow: 'auto',
    };

    return (
      <div style={modalStyles} onClick={onClose}>
        <div style={contentStyles} onClick={(e) => e.stopPropagation()}>
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
        <h2>Customer Information</h2>
        <p>Modal content goes here.</p>

        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>

              <input {...register("firstName", {
                required: 'This is required.',
                minLength: {
                  value: 3,
                  message: 'Min Length is 3'
                }
              })} id="firstName" placeholder='First Name' />

              <input {...register("middleName")} id="middleName" placeholder='Middle Name' />


              <input {...register("lastName")} id="lastName" placeholder='Last Name' />


              <input {...register("age")} id="age" placeholder='Age' />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>

              <input {...register("displayName")} id="displayName" placeholder='Display Name' />


              <input {...register("company")} id="company" placeholder='Company' />


              <input {...register("email")} id="email" placeholder='Email' />


              <input {...register("phone")} id="phone" placeholder='Phone' />


              <input {...register("mobile")} id="mobile" placeholder='Mobile' />


              <input {...register("fax")} id="fax" placeholder='Fax' />


              <input {...register("website")} id="website" placeholder='Website' />


              <input {...register("other")} id="other" placeholder='Other' />


              <input {...register("address")} id="address" placeholder='Address' />
            </div>
          </div>

          <button onClick={closeModal}>Cancel</button>
          <input type='submit' />
        </form>


        {/* <form onSubmit={handleSubmit((data) => {
          console.log(data);
        })}>
          <input {...register("firstName", {
            required: 'This is required.',
            minLength: {
              value: 3,
              message: 'Min Lenght is 3'
            }
          })} placeholder='First Name'></input>
          <input {...register("middleName")} placeholder='Middle Name'></input>
          <input {...register("lastName")} placeholder='Last Name'></input>
          <input {...register("age")} placeholder='Age'></input>
          <input {...register("displayName")} placeholder='Display Name'></input>
          <input {...register("company")} placeholder='Company'></input>
          <input {...register("email")} placeholder='Email'></input>
          <input {...register("phone")} placeholder='Phone'></input>
          <input {...register("mobile")} placeholder='Mobile'></input>
          <input {...register("fax")} placeholder='Fax'></input>
          <input {...register("website")} placeholder='Website'></input>
          <input {...register("other")} placeholder='Other'></input>
          <input {...register("address")} placeholder='Address'></input>
          <button onClick={closeModal}>Cancel</button>
          <input type='submit'></input>
          </form> */}

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
