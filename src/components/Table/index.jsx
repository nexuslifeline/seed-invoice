import React, { useEffect, useState } from 'react';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useTable, usePagination } from 'react-table';

import Loader from '@components/Loader';
import Pagination from '@components/Pagination';

import Styles from './Table.module.scss';

const Table = ({
  columns,
  data = [],
  styleOptions: { bordered, borderless, striped },
  isLoading,
  pageCount: controlledPageCount,
  ...props
}) => {
  // eslint-disable-next-line prettier/prettier
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    visibleColumns,
    prepareRow,
    page,
    gotoPage,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    pageCount,
    state: { pageIndex }
  } = useTable(
    {
      autoResetPage: false,
      data,
      columns,
      manualPagination: true,
      pageCount: controlledPageCount,
      initialState: { pageIndex: 1 }
    },
    usePagination
  );

  const LoadingMessage = () => {
    return (
      <tr>
        <td
          colSpan={visibleColumns.length}
          style={{ height: '150px', width: '100%', textAlign: 'center' }}>
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

  return (
    <>
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
                    className: classNames(column?.thClass)
                  })}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {isLoading ? (
            <LoadingMessage />
          ) : rows.length > 0 ? (
            <Rows rows={page} />
          ) : (
            <NoData />
          )}
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
  styleOptions: PropTypes.object,
  isLoading: PropTypes.bool
};

Table.defaultProps = {
  styleOptions: { bordered: false, borderless: true, striped: true }
};

export default Table;
