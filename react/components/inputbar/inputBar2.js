import { useState } from 'react'
import { useSearch } from '@/hooks/use-search'
import styles from './inputBar2.module.css'

// Icon
import { IoLocationOutline } from 'react-icons/io5'
import { LuCalendarSearch } from 'react-icons/lu'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { IoSearchSharp } from 'react-icons/io5'

export default function InputBar2() {
  const {
    searchValue = {},
    handleFieldChange = () => {},
    calenderValue = '',
    setCalenderValue,
  } = useSearch()
  return (
    <>
      <div className={styles.groupWrapper}>
        <div className={styles.inputWrapper}>
          <input
            className={styles.entryArea}
            type="text"
            name="keyword"
            value={searchValue.keyword}
            onChange={handleFieldChange}
            placeholder="你要去哪裡?"
          />
        </div>
        <div className={styles.iconWrapper}>
          <IoLocationOutline className={styles.lableIcon} />
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.entryArea}
            type="text"
            name="calender"
            value={calenderValue}
            onChange={setCalenderValue}
          />
        </div>
        <div className={styles.iconWrapper}>
          <LuCalendarSearch className={styles.lableIcon} />
        </div>
        <div className={styles.inputWrapper}>
          <input
            className={styles.entryArea}
            type="number"
            name="people"
            value={searchValue.people}
            onChange={handleFieldChange}
          />
        </div>
        <div className={styles.iconWrapper}>
          <MdOutlinePeopleAlt className={styles.lableIcon} />
        </div>
        <div className={styles.searchWrapper}>
          <IoSearchSharp className={styles.lableIcon} />
        </div>
      </div>
    </>
  )
}
