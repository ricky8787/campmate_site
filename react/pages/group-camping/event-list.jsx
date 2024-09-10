import { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/group-camping/event-list.module.scss'
// components
import Header from '@/components/template/header'
import Footer from '@/components/template/footer'
import EventCard from '@/components/group-camping/event-list/event-card/event-card.jsx'
import Pagination from '@/components/group-camping/event-list/pagination/pagination.jsx'

export default function EventList() {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  // 團露清單資料
  const events = [
    {
      imageSrc: '/images/group-camping/event_card.jpg',
      title: '《柳杉,隧道,舊鐵道橋》 眠月線 兩天一夜',
      location: '嘉義',
      date: '6/29-7/02',
      participants: '2/6',
    },
    {
      imageSrc: '/images/group-camping/event_card.jpg',
      title: '《柳杉,隧道,舊鐵道橋》 眠月線 兩天一夜',
      location: '嘉義',
      date: '6/29-7/02',
      participants: '2/6',
    },
    {
      imageSrc: '/images/group-camping/event_card.jpg',
      title: '《柳杉,隧道,舊鐵道橋》 眠月線 兩天一夜',
      location: '嘉義',
      date: '6/29-7/02',
      participants: '2/6',
    },
    {
      imageSrc: '/images/group-camping/event_card.jpg',
      title: '《柳杉,隧道,舊鐵道橋》 眠月線 兩天一夜',
      location: '嘉義',
      date: '6/29-7/02',
      participants: '2/6',
    },
    {
      imageSrc: '/images/group-camping/event_card.jpg',
      title: '《柳杉,隧道,舊鐵道橋》 眠月線 兩天一夜',
      location: '嘉義',
      date: '6/29-7/02',
      participants: '2/6',
    },
    {
      imageSrc: '/images/group-camping/event_card.jpg',
      title: '《柳杉,隧道,舊鐵道橋》 眠月線 兩天一夜',
      location: '嘉義',
      date: '6/29-7/02',
      participants: '2/6',
    },
  ]
  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <>
      <div>
        <Header />

        <div className={styles.poster}>
          <Image
            alt="Poster"
            src="/images/group-camping/poster.jpg"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
          <div className={styles.posterText}>
            <h1>尋找志同道合的團露夥伴</h1>
            <p>
              厭倦了城市的繁忙喧囂？想來點不一樣的度假體驗嗎？
              <br />
              那麼就來尋找團露夥伴吧！
            </p>
          </div>
          <div className={styles.sideButtons}>
            <button className={styles.sideBtn}>+ 建立團露</button>
            <button className={styles.sideBtn}>所有團露</button>
          </div>
        </div>

        {/* 團露清單 */}
        <div className={styles.groupList}>
          <div className="d-flex">
            <p>breadcrumb</p>
            <p>尋找團露夥伴。現在就來看看有哪些團露。</p>
          </div>
          <div className={styles.groupCards}>
            {events.map((event, index) => (
              <EventCard
                key={index}
                imageSrc={event.imageSrc}
                title={event.title}
                location={event.location}
                date={event.date}
                participants={event.participants}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
        <Footer />
      </div>
    </>
  )
}
