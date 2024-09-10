import { useState, useRef, useEffect } from 'react'
import styles from './inputBar.module.css'
import { IoLocationOutline } from 'react-icons/io5'
import { LuCalendarSearch } from 'react-icons/lu'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { IoSearchSharp } from 'react-icons/io5'
import Calendar from '../calender/calender'
import { useSearch } from '@/hooks/use-search'

export default function InputBar() {
  const [isopenCalender, setIsOpenCalender] = useState(false)
  const toggleCalender = () => setIsOpenCalender(!isopenCalender)
  const openCalender = () => setIsOpenCalender(true)
  const closeCalender = () => setIsOpenCalender(false)

  const calenderRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      // 检测点击是否发生在视窗外
      if (calenderRef.current && !calenderRef.current.contains(event.target)) {
        closeCalender()
      }
    }

    if (isopenCalender) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    // 清理事件监听器
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isopenCalender])

  const {
    searchValue = {},
    handleFieldChange = () => {},
    calenderValue = '',
    setCalenderValue,
  } = useSearch()

  return (
    <>
      <div className={styles.calenderWrapper}>
        <div
          ref={calenderRef}
          className={
            isopenCalender
              ? `${styles.calender} ${styles.open}`
              : `${styles.calender}`
          }
        >
          <Calendar />
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.inputGroup}>
          <div className={styles.wrapper}>
            <IoLocationOutline className={styles.lableIcon} />
            <input
              className={styles.entryArea}
              type="text"
              name="keyword"
              value={searchValue.keyword}
              onChange={handleFieldChange}
              placeholder="你要去哪裡?"
            />
          </div>
          <div className={`${styles.wrapper} ${styles.center}`}>
            <LuCalendarSearch className={styles.lableIcon} />
            <button className={styles.entryArea} onClick={toggleCalender}>
              {calenderValue}
            </button>
            {/* <input
              className={styles.entryArea}
              type="text"
              name="calender"
              value={calenderValue}
              onChange={setCalenderValue}
            /> */}
          </div>
          <div className={styles.wrapper}>
            <MdOutlinePeopleAlt className={styles.lableIcon} />
            <input
              className={styles.entryArea}
              type="number"
              name="people"
              value={searchValue.people}
              onChange={handleFieldChange}
            />
          </div>
          <div className={styles.searchBtn}>
            <IoSearchSharp className={styles.lableIcon} />
          </div>
        </div>
      </div>
    </>
  )
}
