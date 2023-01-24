import Button from 'components/Button';
import React from 'react';
import Styles from './Pagination.module.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Pagination = ({
  currentPage,
  pageCount,
  canPreviousPage,
  canNextPage,
  previousPage,
  nextPage,
  gotoPage,
  pageSize,
  ...props
}) => {
  const buttonVariant = 'light';

  return (
    <div className={Styles.container} style={{ ...props }}>
      <Button
        className={Styles.pageButton}
        label='<'
        variant={buttonVariant}
        onClick={previousPage}
        disabled={!canPreviousPage}
      />

      {/* first page button */}
      <Button
        className={Styles.pageButton}
        label='1'
        variant={currentPage === 1 ? 'primary' : buttonVariant}
        onClick={() => gotoPage(1)}
        disabled={currentPage === 1}
      />

      {/* ... after the first page, appears when current page > 4 */}
      {currentPage > 4 && (
        <Button
          className={classNames(Styles.pageButton, Styles.dots)}
          label='...'
          variant={buttonVariant}
          disabled={true}
        />
      )}

      {/* first 4 button after 1 button only appears when current page < 5 */}
      {currentPage < 5 &&
        pageCount - currentPage > 4 &&
        [2, 3, 4, 5].map((n, i) => {
          return (
            <Button
              className={Styles.pageButton}
              label={`${n}`}
              variant={currentPage === n ? 'primary' : buttonVariant}
              onClick={() => gotoPage(n)}
              key={n}
              disabled={currentPage === n}
            />
          );
        })}

      {/* middle buttons prev-current-nextpage */}
      {currentPage > 4 && pageCount - currentPage > 4 && (
        <>
          <Button
            className={Styles.pageButton}
            label={`${currentPage - 1}`}
            variant={buttonVariant}
            onClick={() => gotoPage(currentPage - 1)}
            disabled={false}
          />
          <Button
            className={Styles.pageButton}
            label={`${currentPage}`}
            variant={'primary'}
            onClick={() => gotoPage(currentPage)}
            disabled={true}
          />
          <Button
            className={Styles.pageButton}
            label={`${currentPage + 1}`}
            variant={buttonVariant}
            onClick={() => gotoPage(currentPage + 1)}
            disabled={false}
          />
        </>
      )}

      {/* last four button before the last page */}
      {pageCount - currentPage < 5 &&
        [...Array.from({ length: 4 }, (_, i) => pageCount - 4 + i)].map(
          (n, i) => {
            return (
              <Button
                className={Styles.pageButton}
                label={`${n}`}
                variant={currentPage === n ? 'primary' : buttonVariant}
                onClick={() => gotoPage(n)}
                key={n}
                disabled={currentPage === n}
              />
            );
          }
        )}

      {/* ... button before the last page button, only appears when page count - current page > 4 */}
      {pageCount - currentPage > 4 && (
        <Button
          className={classNames(Styles.pageButton, Styles.dots)}
          label={`...`}
          variant={buttonVariant}
          onClick={nextPage}
          disabled={true}
        />
      )}

      <Button
        className={Styles.pageButton}
        label={`${pageCount}`}
        variant={currentPage === pageCount ? 'primary' : buttonVariant}
        onClick={() => gotoPage(pageCount)}
        disabled={!canNextPage}
      />

      <Button
        className={Styles.pageButton}
        label='>'
        variant={buttonVariant}
        onClick={nextPage}
        disabled={!canNextPage}
      />
    </div>
  );
};

Pagination.propTypes = {
  pageChangeHandler: PropTypes.func,
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
  pageSize: PropTypes.number,
};

export default Pagination;
