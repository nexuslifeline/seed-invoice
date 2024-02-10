import { useEffect, useMemo, useState, useCallback, useRef } from 'react';
import { invoices } from '@data/sample/invoices';
import Table from '@components/Table';
import TableContainer from '@components/Table/Container';
import ContentView from '@components/ContentView';
import Breadcrumb from '@components/Breadcrumb';
import { useCategoriesQuery } from '@shared/query/categories';

const Category = (props) => {
  const [page, setPage] = useState(1);
  const { categories, isFetching, meta } = useCategoriesQuery(
    'fb9200ed-f4f0-44f1-ab85-1a06aa8ef8f2',
    {
      page
    }
  );

  const columns = useMemo(
    () => [
      {
        Header: 'Category #',
        accessor: 'id'
      },
      {
        Header: 'Name',
        accessor: 'name',
        Cell: ({ cell: { row } }) => (
          <>
            <div>{row?.original?.name}</div>
          </>
        )
      },
      {
        Header: 'Organization',
        accessor: 'organization',
        Cell: ({ cell: { row } }) => (
          <>
            <div>{row?.original?.organization?.name}</div>
          </>
        )
      }
    ],
    []
  );

  useEffect(() => {
    setPage(meta?.page);
  }, [meta]);

  console.log('categories', categories);

  return (
    <ContentView>
      <Breadcrumb
        title={'Manage Categories'}
        items={[
          { text: 'Workspace', to: '/dashboard' },
          { text: 'Categories', to: '/categories' }
        ]}
      />

      <TableContainer
        title={'Categories'}
        buttonCaption={'Create Category'}
        description={
          'Manage your product categories seamlessly for better inventory control.'
        }>
        <Table
          columns={columns}
          data={categories || []}
          isLoading={isFetching}
          pageCount={meta?.total || 1}
          // fetchData={fetchData}
          showFilter={false}
          // openModal={false}
        />
      </TableContainer>
    </ContentView>
  );
};

export default Category;
