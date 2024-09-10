import { useState } from 'react'
import Link from 'next/link'
import CampgroundSidebar from '@/components/sidebar/campground-sidebar'
import InputBar2 from '@/components/inputbar/inputBar2'
import CampgroundListBanner from '@/components/carousel/campground-list-banner'
import Filter from '@/components/filter/filter'
import CampgroundCard from '@/components/card/campground-card'

// RWD使用
import { useMediaQuery } from 'react-responsive'

// import header-m icon
import myIcon from '@/assets/images.jpeg'
import { FaRegUser } from 'react-icons/fa'
import { FaCampground } from 'react-icons/fa'
import { MdOutlineChair } from 'react-icons/md'

// 解決Hydration問題
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('@/components/template/header'), {
  ssr: false,
})

const HeaderM = dynamic(() => import('@/components/template-m/header-m'), {
  ssr: false,
})

const Footer = dynamic(() => import('@/components/template/footer'), {
  ssr: false,
})

const FooterM = dynamic(() => import('@/components/template-m/footer-m'), {
  ssr: false,
})

export default function Template() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  // Carousel
  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <>
      <div className="body">
        {isDesktopOrLaptop && <Header />}
        {/* 請按照下列格式填入需要的欄位 */}
        {isTabletOrMobile && (
          <HeaderM
            labels={{
              user: { userName: '王小明', userIcon: myIcon },
              titles: [
                {
                  lv1Name: 'Customer Center',
                  lv1Icon: <FaRegUser style={{ fill: '#413c1c' }} />,
                  // 沒有lv2的話請填入null
                  titleLv2: null,
                },
                {
                  lv1Name: 'Rent',
                  lv1Icon: <MdOutlineChair style={{ fill: '#413c1c' }} />,
                  titleLv2: [
                    {
                      lv2Name: '帳篷',
                      lv2Icon: <FaCampground style={{ fill: '#413c1c' }} />,
                      titleLv3: [
                        '單/雙人',
                        '家庭',
                        '寵物',
                        '客廳帳/天幕',
                        '配件',
                        '其他',
                      ],
                    },
                    {
                      lv2Name: '戶外家具',
                      lv2Icon: <FaCampground style={{ fill: '#413c1c' }} />,
                      titleLv3: ['露營椅', '露營桌', '其他'],
                    },
                  ],
                },
                {
                  lv1Name: 'Ground',
                  lv1Icon: <FaCampground style={{ fill: '#413c1c' }} />,
                  titleLv2: [
                    {
                      lv2Name: '營地主後台',
                      lv2Icon: <FaCampground style={{ fill: '#413c1c' }} />,
                      titleLv3: [],
                    },
                  ],
                },
              ],
            }}
          />
        )}

        <main
          style={{
            display: 'flex',
            justifyContent: 'center',
            minHeight: '100vh',
            maxWidth: '1440px',
            margin: '48px auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              marginInline: '80px',
              width: '100%',
            }}
          >
            <CampgroundSidebar />
            <div className="main" style={{ marginLeft: '15px' }}>
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
                    href={'/campground/campground-home'}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    HOME{' '}
                  </Link>
                  \ GROUND
                </p>
              </div>
              <InputBar2 />
              <CampgroundListBanner slides={SLIDES} options={OPTIONS} />
              <Filter />
              <CampgroundCard />
              <CampgroundCard />
              <CampgroundCard />
              <CampgroundCard />
              <CampgroundCard />
            </div>
          </div>
        </main>

        {isDesktopOrLaptop && <Footer />}
        {isTabletOrMobile && <FooterM />}
      </div>
    </>
  )
}
