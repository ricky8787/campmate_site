import React from 'react'
import EventCard from '@/components/group-camping/event-list/event-card/event-card'
import styles from '@/components/group-camping/event-list/event-card//event-card.module.scss'

export default function Test() {
  const events = [
    {
      imageSrc: '/group-camping/images/event_card.jpg',
      title: '《柳杉,隧道,舊鐵道橋》 眠月線 兩天一夜',
      location: '嘉義',
      date: '6/29-7/02',
      participants: '2/6',
    },
    {
      imageSrc: '/group-camping/images/event_card.jpg',
      title: '《柳杉,隧道,舊鐵道橋》 眠月線 兩天一夜',
      location: '嘉義',
      date: '6/29-7/02',
      participants: '2/6',
    },
    {
      imageSrc: '/group-camping/images/event_card.jpg',
      title: '《柳杉,隧道,舊鐵道橋》 眠月線 兩天一夜',
      location: '嘉義',
      date: '6/29-7/02',
      participants: '2/6',
    },
    {
      imageSrc: '/group-camping/images/event_card.jpg',
      title: '《柳杉,隧道,舊鐵道橋》 眠月線 兩天一夜',
      location: '嘉義',
      date: '6/29-7/02',
      participants: '2/6',
    },
    {
      imageSrc: '/group-camping/images/event_card.jpg',
      title: '《柳杉,隧道,舊鐵道橋》 眠月線 兩天一夜',
      location: '嘉義',
      date: '6/29-7/02',
      participants: '2/6',
    },
    {
      imageSrc: '/group-camping/images/event_card.jpg',
      title: '《柳杉,隧道,舊鐵道橋》 眠月線 兩天一夜',
      location: '嘉義',
      date: '6/29-7/02',
      participants: '2/6',
    },
  ]
  return (
    <>
      <h1>test</h1>
      <hr />

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
    </>
  )
}
