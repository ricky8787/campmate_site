import Image from 'next/image'
import styles from './event-card.module.scss'

export default function EventCard({
  imageSrc,
  title,
  location,
  date,
  participants,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={imageSrc}
          alt={title}
          width={254}
          height={178}
          objectFit="cover"
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
        <hr className={styles.subLine} />
        <div className={styles.info}>
          <div className={styles.details}>
            <div className={styles.detailItem}>
              <span className={styles.icon}>📍</span> {location}
            </div>
            <div className={styles.detailItem}>
              <span className={styles.icon}>📅</span> {date}
            </div>
            <div className={styles.detailItem}>
              <span className={styles.icon}>👥</span> {participants}
            </div>
          </div>
          <div>
            <button className={styles.moreBtn}>了解更多</button>
          </div>
        </div>
      </div>
    </div>
  )
}
