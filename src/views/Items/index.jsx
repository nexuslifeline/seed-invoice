import IconTimes from 'components/Icons/Times';
import Button from 'components/Button';
import { useMemo, useState, useCallback, useRef, useEffect } from 'react';
import { customers } from 'sampleData';
import Pagination from 'components/Pagination';
import Table from 'components/Table';
import withAuth from 'shared/hoc/withAuth';

const Dashboard = (props) => {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
        thStyle: { width: '20%' },
        Cell: ({ cell: { row } }) => (
          <>
            <div>{row?.original?.name}</div>
            <div>{row?.original?.id}</div>
          </>
        ),
      },
      {
        Header: 'Address',
        accessor: 'address',
        thStyle: { width: '70%' },
      },
      {
        Header: 'Age',
        accessor: 'age',
        thStyle: { width: '10%' },
      },
      {
        Header: '',
        accessor: 'action',
        thStyle: { width: '80px', minWidth: '80px' },
        Cell: ({ cell }) => (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Button label='x' onClick={() => onRowClick(cell)}>
              <IconTimes style={{ width: '24px', height: '24px', fill: 'white' }} />
            </Button>
          </div>
        ),
      },
    ],
    []
  );
  const [striped, setStriped] = useState(false);
  const [bordered, setBordered] = useState(false);
  const [borderless, setBorderless] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [tableData2, setTableData2] = useState([]);

  const [pageCount, setPageCount] = useState(13);
  const [currentPage, setCurrentPage] = useState(1);
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
    }, 1000);
  }, []);

  const onRowClick = ({ row: { original } }) => {
    alert('row action click');
    console.log(original);
  };

  useEffect(() => {
    setIsLoading2(true);
    setTableData2([...customers]);
    setTimeout(() => {
      setIsLoading2(false);
    }, 3000);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
        <label>
          <input type='checkbox' checked={striped} onChange={() => setStriped(!striped)} />
          Striped
        </label>
        <label>
          <input type='checkbox' checked={bordered} onChange={() => setBordered(!bordered)} />
          Bordered
        </label>
        <label>
          <input type='checkbox' checked={borderless} onChange={() => setBorderless(!borderless)} />
          Borderless
        </label>
      </div>
      <div style={{ marginBottom: '20px' }}>
        Server Side Fetching
        <Table
          columns={columns}
          data={tableData}
          bordered={bordered}
          striped={striped}
          borderless={borderless}
          isLoading={isLoading}
          pageCount={pageCount}
          isServerSide={true}
          fetchData={fetchData}
        />
      </div>

      <div style={{ marginBottom: 20, marginTop: 40 }}>
        UnPaginated List
        <Table
          columns={columns}
          data={tableData2}
          bordered={bordered}
          striped={striped}
          borderless={borderless}
          isLoading={isLoading2}
        />
      </div>

      <div>
        <div>current page = {currentPage}</div>
        <div>page count = {pageCount}</div>
      </div>

      <Pagination
        currentPage={currentPage}
        pageCount={pageCount}
        previousPage={() => {
          setCurrentPage(currentPage - 1);
        }}
        nextPage={() => {
          setCurrentPage(currentPage + 1);
        }}
        pageSize={10}
        canPreviousPage={true}
        canNextPage={true}
        gotoPage={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default withAuth(Dashboard);
