import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, usePagination } from 'react-table';
import Styles from './Table.module.scss';
import Loader from 'components/Loader';
import TextInput from 'components/Form/TextInput';
import PropTypes from 'prop-types';
import Pagination from 'components/Pagination';

const Table = ({
  columns,
  data,
  bordered,
  borderless,
  striped,
  isLoading,
  showFilter,
  fetchData,
  pageCount: controlledPageCount,
  isServerSide = false,
  ...props
}) => {
  // eslint-disable-next-line prettier/prettier
  const instance = !isServerSide && { data, columns } || {
    autoResetPage: false,
    data,
    columns,
    manualPagination: true,
    pageCount: controlledPageCount,
    initialState: { pageIndex: 0 },
  };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    visibleColumns,
    prepareRow,
    setGlobalFilter,
    //pageOptions,
    page,
    gotoPage,
    previousPage,
    nextPage,
    //setPageSize,
    canPreviousPage,
    canNextPage,
    pageCount,
    state: { globalFilter, pageIndex, pageSize },
  } = useTable(
    {
      ...instance,
    },
    useFilters,
    useGlobalFilter,
    usePagination
  );

  const LoadingMessage = () => {
    return (
      <tr>
        <td colSpan={visibleColumns.length} style={{ height: '150px', width: '100%', textAlign: 'center' }}>
          <Loader /> Loading ...
        </td>
      </tr>
    );
  };

  const NoData = () => {
    return (
      <tr>
        <td colSpan={visibleColumns.length}>No Records Found.</td>
      </tr>
    );
  };

  const Rows = ({ rows }) => {
    return rows.map((row) => {
      prepareRow(row);
      return (
        <tr {...row.getRowProps()}>
          {row.cells.map((cell) => {
            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
          })}
        </tr>
      );
    });
  };

  const [value, setValue] = useState(globalFilter);
  const onFilterChanged = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  useEffect(() => {
    if (isServerSide) {
      fetchData({ pageIndex, pageSize });
    }
  }, [fetchData, pageIndex, pageSize, isServerSide]);

  return (
    <>
      {showFilter && (
        <div className={Styles.filterContainer}>
          <TextInput
            containerClassName={Styles.filterInput}
            value={value || ''}
            onChange={(e) => {
              setValue(e.target.value);
              onFilterChanged(e.target.value);
            }}
            placeholder='Search here...'
          />
        </div>
      )}
      <table
        {...getTableProps()}
        className={classNames(
          Styles.container,
          { [Styles.bordered]: bordered },
          { [Styles.borderless]: borderless },
          { [Styles.striped]: striped }
        )}
        {...props}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps({
                    style: column?.thStyle,
                    className: classNames(column?.thClass),
                  })}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {isLoading ? <LoadingMessage /> : rows.length > 0 ? <Rows rows={page} /> : <NoData />}
        </tbody>
      </table>

      <Pagination
        marginTop={30}
        justifyContent='flex-end'
        currentPage={pageIndex + 1}
        pageCount={pageCount}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        nextPage={nextPage}
        previousPage={previousPage}
        gotoPage={(page) => gotoPage(page - 1)}
      />
    </>
  );
};

Table.propTypes = {
  showFilter: PropTypes.bool,
  columns: PropTypes.array.isRequired,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  striped: PropTypes.bool,
  isLoading: PropTypes.bool,
  isServerSide: PropTypes.bool,
};

Table.defaultProps = {
  showFilter: false,
  isServerSide: true,
  bordered: false,
  striped: true,
  borderless: true,
};

export default Table;
