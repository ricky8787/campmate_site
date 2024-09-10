import React from 'react'
import styles from './pagination.module.scss'

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className={styles.pagination}>
      {pages.map((page) => (
        <span
          key={page}
          className={`${styles.pageNumber} ${
            page === currentPage ? styles.active : ''
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </span>
      ))}
      <span className={styles.ellipsis}>...</span>
      <span
        className={`${styles.pageNumber} ${
          currentPage === totalPages ? styles.disabled : ''
        }`}
        onClick={() => onPageChange(currentPage + 1)}
      >
        &gt;
      </span>
      <span className={styles.goToPage}>
        前往頁面
        <span className={styles.arrow}>&#9662;</span>
      </span>
    </div>
  )
}
