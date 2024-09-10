import { useState } from 'react'
import styles from './area-card.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function AreaCard() {
  return (
    <>
      <div className="wrapper">
        <div className="bread-crumb">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <mask
              id="a"
              width={24}
              height={24}
              x={0}
              y={0}
              maskUnits="userSpaceOnUse"
              style={{ maskType: 'alpha' }}
            >
              <path fill="#D9D9D9" d="M0 0h24v24H0z" />
            </mask>
            <g mask="url(#a)">
              <path
                fill="#8F8E93"
                d="M9.461 12.654h1.693v-2.365h1.692v2.365h1.693V8.596L12 6.904 9.461 8.596v4.058ZM12 19.677c1.88-1.636 3.365-3.3 4.458-4.992 1.092-1.691 1.638-3.154 1.638-4.389 0-1.83-.579-3.34-1.737-4.53C15.2 4.576 13.747 3.981 12 3.981c-1.748 0-3.2.595-4.359 1.785-1.158 1.19-1.737 2.7-1.737 4.53 0 1.235.546 2.698 1.638 4.39 1.093 1.691 2.579 3.355 4.458 4.991Zm0 1.342c-2.35-2.078-4.12-4.016-5.31-5.814-1.191-1.798-1.786-3.434-1.786-4.909 0-2.115.689-3.86 2.066-5.234C8.348 3.686 10.024 3 12 3c1.976 0 3.652.687 5.03 2.061 1.377 1.375 2.066 3.12 2.066 5.235 0 1.475-.595 3.11-1.785 4.909-1.19 1.798-2.961 3.736-5.311 5.814Z"
              />
            </g>
          </svg>

          <p>
            <Link
              href={'/campground-home'}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              HOME
            </Link>{' '}
            \  <Link
              href={'/campground/campground-list'}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              GROUND
            </Link>
          </p>
        </div>
        <p className="title-of-discount">
          旅客的熱門選擇。<span>現在就來看看有哪些營地。</span>
        </p>
        <div className={styles.cardWrapper}>
          <div className={styles.topWrapper}>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.topImage}
                src={"/area-card/taipei.jpg"}
                width={624}
                height={320}
                alt="taipei"
              />
              <div className={styles.titleWrapper}>
                <h1>台北</h1>
                <p>Taipei</p>
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.topImage}
                src={"/area-card/taichung.jpg"}
                width={624}
                height={320}
                alt="taichung"
              />
              <div className={styles.titleWrapper}>
                <h1>台中</h1>
                <p>Taichung</p>
              </div>
            </div>
          </div>
          <div className={styles.bottomWrapper}>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.topImage}
                src={"/area-card/tainan.jpg"}
                width={405}
                height={320}
                alt="taipei"
              />
              <div className={styles.titleWrapper}>
                <h1>台南</h1>
                <p>Tainan</p>
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.topImage}
                src={"/area-card/taitung.jpg"}
                width={405}
                height={320}
                alt="taipei"
              />
              <div className={styles.titleWrapper}>
                <h1>台東</h1>
                <p>Taitung</p>
              </div>
            </div>
            <div className={styles.imageWrapper}>
              <Image
                className={styles.topImage}
                src={"/area-card/hua.jpg"}
                width={405}
                height={320}
                alt="hualian"
              />
              <div className={styles.titleWrapper}>
                <h1>花蓮</h1>
                <p>Hualien</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .wrapper {
            margin-block: 48px;
            width: 100%;
          }

          .title-of-discount {
            font-family: 'Noto Sans TC';
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 48px;
            span {
              color: #8f8e93;
            }
          }
        `}
      </style>
    </>
  )
}
