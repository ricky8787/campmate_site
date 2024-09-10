import { useState } from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import AreaCard from '@/components/card/area-card'
import InputBar from '@/components/inputbar/inputBar'
import EmblaCarousel from '@/components/carousel/EmblaCarousel'

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
            margin: 'auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginInline: '80px',
            }}
          >
            <AreaCard />
            {/* <DateRangeComp /> */}
            {/* <Calender /> */}
            {/* <Calender2 /> */}
            <InputBar />
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </main>

        {isDesktopOrLaptop && <Footer />}
        {isTabletOrMobile && <FooterM />}
      </div>
    </>
  )
}
