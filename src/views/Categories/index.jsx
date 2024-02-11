import { useEffect, useMemo, useState } from 'react';

import Table from '@components/Table';
import TableContainer from '@components/Table/Container';
import ContentView from '@components/ContentView';
import Breadcrumb from '@components/Breadcrumb';
import { useActiveOrganization } from '@shared/store/activeOrganization';
import { useCategoriesQuery } from '@shared/query/categories';

const Category = (props) => {
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const { activeOrganization } = useActiveOrganization();
  const { categories, meta, isLoading } = useCategoriesQuery(
    activeOrganization?.uuid,
    {
      params: { page: currentPage }
    }
  );

  const columns = useMemo(
    () => [
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

  const handlePageChange = ({ selected }) => {
    console.log('selected', selected);
    setCurrentPage(selected + 1);
  };

  useEffect(() => {
    setPageCount(Math.ceil(meta?.total / meta?.perPage || 1));
  }, [meta]);

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
          onPageChange={handlePageChange}
          pageCount={pageCount}
          isLoading={isLoading}
        />
      </TableContainer>
    </ContentView>
  );
};

export default Category;
