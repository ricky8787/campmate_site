import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { IoLocationOutline } from 'react-icons/io5'
import Rating from '@mui/material/Rating'
import VerticalCarousel from '@/components/carousel/verticalCarousel'
import RoomCard from '@/components/card/room-card'

// RWD使用
import { useMediaQuery } from 'react-responsive'

// import header-m icon
import myIcon from '@/assets/images.jpeg'
import { FaRegUser } from 'react-icons/fa'
import { FaCampground } from 'react-icons/fa'
import { MdOutlineChair } from 'react-icons/md'

//MUI progress bar
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'

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
const introContent = ` 
歸樸森活坐落於嘉義縣番路鄉，不僅能讓您在絕佳的地點欣賞夕陽的落日風光，同時享受四周環繞的靜謐山景。

與其他露營區最大的不同在於，我們獨特的地理位置可以讓您輕鬆到達，無需駕駛蜿蜒山路，省去開車的疲累，即可進入這片遠離塵囂的秘境，同時也具有便利性，能夠讓您與在地互動，到四周欣賞更多的景點和品嚐美食。

我們鄰近有許多嘉義知名景點，讓您在享受露營的同時，也能輕易探索嘉義的自然和文化美景。歸樸森活是您逃離日常，尋找心靈慰藉的最佳地點。
`
const ruleContent = ` 
賠償金額參考 鑰匙遺失賠償費用:TWD 500 延遲退房額外收費
(每小時):TWD 1,500 發票 / 收據 如有需要，現場將提供發票。
住宿注意事項
1.歸樸森活尚未開放攜帶寵物，敬請見諒，若於現場攜帶寵物將禁止進入並收取全額住宿費用。
2.營區內禁止破壞大自然或任何設施，帳內不可吃東西、嘔吐、嚼檳榔，喝白開水除外，若發現將收取清潔費3000元
3.退房前請清潔鍋碗餐具、垃圾和食物，請勿隨地丟棄廚餘、飲料瓶罐、煙蒂等垃圾，未按規定將收取清潔費一帳1000元（每帳皆有廚餘桶、垃圾桶、煙灰缸可供使用）
4.營區內嚴禁自行升營火、放煙火鞭炮、玩仙女棒，以維護營區環境
5.營區內所有物品若有短缺或毀損現象，依毀損物品實際金額、損失金額賠償
6.謝絕訪客或非入住者進入，若非房客入內需酌收每人NT$500元之參觀費用，並於21:00準時離場。
7.夜間22:00開始須降低音量，且禁止使用擴音設備避免打擾其他露友，若無法遵守，營主將會不斷出現請各位降低音量，若屢勸不改者將請您離開且不退費
8.營區內多處設有220V插座，請勿使用私人電器
9.帳篷內所有物品（拖鞋、大小毛巾）皆屬營區所屬，如有缺少依照價賠償
10.帳篷內禁止使用私人高功率電器（吹風機、電磁爐等等）營區衛浴附有高速吹風機可供使用
11.營區若出現流浪狗和猴子闖入，請勿靠近餵食
12.下午3點入住，隔日早上11點為離場時間，請勿續留於營區內進行活動，如超過時間者將酌收一小時每人NT$1,500/小時，未滿1小時以1小時計
13.個人貴重物品、請自行妥善保管、如有遺失，恕不負責，敬請見諒。
14.餐點供應時段與方式依照公告內容，請務必準時兌換及參與，逾時恕不等候。
15.帳內若發現飲食將收取清潔費3000元，以避免家具、地板出現污漬或損壞
16.每間客房擺設家具主題風格、面對的景色皆有不同，須依實際入住客房為主，帳篷位置和家具風格皆依訂單順序安排，若有特殊需求（如因長輩陪同，需離浴廁較近的帳篷）請私訊告知。
17.若有未盡事宜，營區保有增加、修改或解釋之權益。歸樸入住、退房和用餐時間小提醒當天入住時間：15:00～18:00下午茶提供：15:00～17:00晚餐烤肉爐使用到21:00前隔天早餐時間：8:00～10:00隔天退房時間：11:00前管理室公共冰箱使用（冷凍、冷藏）：22:00前
`

export default function Detail() {
  const router = useRouter()
  const [rating, setRating] = useState(4)

  useEffect(() => {
    if (router.isReady) {
      console.log(router.query)
    }
    // 以下為省略eslint檢查一行
    // eslint-disable-next-line
  }, [router.isReady])

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })

  // Carousel
  const OPTIONS = { loop: true }
  const SLIDE_COUNT = 6
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  // Progress Bar
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      border: '1px solid #E49366',
      backgroundColor: '#E5E4CF',
    },
    [`& .${linearProgressClasses.bar}`]: {
      border: '1px solid #E49366',
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#E49366' : '#E5E4CF',
    },
  }))

  let score5 = 3
  let score4 = 8
  let score3 = 5
  let score2 = 1
  let score1 = 0
  let totalCount = score1 + score2 + score3 + score4 + score5
  let scoreArr = [score5, score4, score3, score2, score1]

  // 為了控制 scrollTo
  const sec0Ref = useRef(null)
  const sec1Ref = useRef(null)
  const sec2Ref = useRef(null)
  const sec3Ref = useRef(null)
  const sec4Ref = useRef(null)
  const sec5Ref = useRef(null)
  const sec6Ref = useRef(null)
  const scrollToItem = (ref, offset = -64) => {
    const elementPosition =
      ref.current.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition + offset
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <div className="body" ref={sec0Ref}>
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
            margin: '24px auto',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              marginInline: '80px',
            }}
          >
            <button
              className="toTopBtn"
              style={{
                cursor: 'pointer',
                backgroundColor: '#413c1c',
                padding: '15px',
                position: 'fixed',
                zIndex: '999',
                borderRadius: '15px',
                color: 'white',
                right: '20px',
                bottom: '50px',
                border: 'none',
                outline: 'inherit',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
              }}
              onClick={() => scrollToItem(sec0Ref)}
            >
              Go TOP
            </button>
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
                \{' '}
                <Link
                  href={'/campground/campground-list'}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  GROUND
                </Link>{' '}
                \ 歸樸森活
              </p>
            </div>
            <div className="detail-title">
              <h1>
                歸樸森活。<span>獨家8折起！一泊一食附贈下午茶</span>
              </h1>
            </div>

            <div className="ratingWrapper">
              <span className="rating">4.0</span>
              <Rating
                name="size-large"
                value={rating}
                readOnly
                sx={{
                  color: '#e49366',
                }}
              />
              <span className="commentCount">15則評論</span>
            </div>
            <div className="location-wrapper">
              <div className="locationLabel">
                <IoLocationOutline
                  style={{
                    width: '20px',
                    height: '20px',
                    position: 'relative',
                    bottom: '2',
                    color: '#e49366',
                  }}
                />
              </div>
              <p>嘉義縣番路鄉埔7鄰69號</p>
              <div>查看地圖</div>
            </div>
            <VerticalCarousel slides={SLIDES} options={OPTIONS} />
            <div className="navbar-detail">
              <button
                className="navbar-item item1"
                onClick={() => scrollToItem(sec1Ref)}
              >
                簡介
              </button>
              <button
                className="navbar-item"
                onClick={() => scrollToItem(sec2Ref)}
              >
                房型
              </button>
              <button
                className="navbar-item"
                onClick={() => scrollToItem(sec3Ref)}
              >
                地點
              </button>
              <button
                className="navbar-item"
                onClick={() => scrollToItem(sec4Ref)}
              >
                附近景點
              </button>
              <button
                className="navbar-item"
                onClick={() => scrollToItem(sec5Ref)}
              >
                評價
              </button>
              <button
                className="navbar-item"
                onClick={() => scrollToItem(sec6Ref)}
              >
                入住規範
              </button>
            </div>
            <div
              className="content-wrapper nav-title"
              style={{ display: 'flex', flexDirection: 'column', gap: '70px' }}
            >
              <div
                className="introduciton"
                style={{ width: '1024px', margin: 'auto' }}
                ref={sec1Ref}
              >
                <h1>旅宿簡介</h1>
                <hr />
                <pre>{introContent}</pre>
              </div>
              <div
                className="room-type"
                style={{ width: '1024px', margin: 'auto' }}
                ref={sec2Ref}
              >
                <h1>房型</h1>
                <hr />
                <RoomCard />
              </div>
              <div
                className="location-title"
                style={{ width: '1024px', margin: 'auto' }}
                ref={sec3Ref}
              >
                <h1>地點</h1>
                <hr />
                <div className="location-wrapper">
                  <div className="locationLabel">
                    <IoLocationOutline
                      style={{
                        width: '20px',
                        height: '20px',
                        position: 'relative',
                        bottom: '2',
                        color: '#e49366',
                      }}
                    />
                  </div>
                  <p>嘉義縣番路鄉埔7鄰69號</p>
                  <div>查看地圖</div>
                </div>
              </div>
              <div
                className="near-spot-title"
                style={{ width: '1024px', margin: 'auto' }}
                ref={sec4Ref}
              >
                <h1>地點</h1>
                <hr />
              </div>
              <div
                className="rating-title"
                style={{ width: '1024px', margin: 'auto' }}
                ref={sec5Ref}
              >
                <div
                  style={{ display: 'flex', postion: 'relative', gap: '10px' }}
                >
                  <h1>評價</h1>
                  <div className="ratingWrapper">
                    <span className="rating2">4.0</span>
                    <Rating
                      name="size-large"
                      value={rating}
                      readOnly
                      sx={{
                        color: '#e49366',
                      }}
                    />
                    <span className="commentCount">15則評論</span>
                  </div>
                </div>
                <hr />
                <div className="rating-content-wrapper">
                  {scoreArr.map((v, index) => {
                    return (
                      <>
                        <div className="score-wrapper">
                          <Rating
                            key={index}
                            name="size-medium"
                            size="small" 
                            value={scoreArr.length - index}
                            readOnly
                            sx={{
                              color: '#e49366',
                            }}
                          />
                          <div className="progress-bar">
                            <BorderLinearProgress
                              variant="determinate"
                              value={Math.floor((v / totalCount) * 100)}
                            />
                          </div>
                          <span className="score-font">{v}</span>
                        </div>
                      </>
                    )
                  })}
                </div>
              </div>
              <div
                className="rule-title"
                style={{ width: '1024px', margin: 'auto' }}
                ref={sec6Ref}
              >
                <h1>入住規範</h1>
                <hr />
                <pre>{ruleContent}</pre>
              </div>
            </div>
          </div>
        </main>

        {isDesktopOrLaptop && <Footer />}
        {isTabletOrMobile && <FooterM />}
      </div>
      <style jsx>
        {`
          .detail-title {
            margin-block: 16px;
            font-family: 'Noto Sans TC', sans-serif;
            h1 {
              font-size: 36px;
              font-weight: 700;
              span {
                font-size: 24px;
                font-weight: 700;
              }
            }
          }
          .ratingWrapper {
            display: flex;
            align-items: center;
            gap: 5px;
          }
          .ratingWrapper2 {
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .rating-content-wrapper {
            display: flex;
            flex-direction: column;
            gap: 13px;
          }

          .rating {
            background: var(--hint-color);
            font-family: 'Montserrat', sans-serif;
            font-size: 16px;
            padding: 5px;
            color: var(--main-color-bright);
            border-radius: 10px;
          }
          .rating2 {
            font-family: 'Montserrat', sans-serif;
            font-size: 16px;
            color: var(--main-color-dark);
          }

          .location-wrapper {
            font-family: 'Noto Sans TC', sans-serif;
            margin-block: 16px;
            display: flex;
            gap: 10px;
            p {
              color: #8f8e93;
              font-size: 14px;
              font-weight: 500;
              margin-bottom: 0;
            }
            div {
              color: #e49366;
              font-size: 14px;
              font-weight: 500;
              cursor: pointer;
            }
          }

          .commentCount {
            font-family: 'Noto Sans TC', sans-serif;
            color: #8f8e93;
            font-size: 12px;
          }

          .navbar-detail {
            display: flex;
            width: 100%;
            margin-bottom: 32px;
            border-bottom: 1px solid #8f8e93;
          }

          .navbar-item {
            width: 150px;
            font-family: 'Noto Sans TC', sans-serif;
            font-size: 14px;
            font-weight: 500;
            text-align: center;
            padding-block: 16px;
            cursor: pointer;
            background: none;
            color: inherit;
            border: none;
            outline: inherit;
          }
          .navbar-item:hover {
            color: var(--hint-color);
            border-bottom: 3px solid var(--hint-color);
          }

          .item1 {
            border-bottom: 3px solid var(--main-color-dark);
          }
          .nav-title {
            h1 {
              font-family: 'Noto Sans TC';
              font-size: 20px;
              font-weight: 500;
            }
            pre {
              font-family: 'Noto Sans TC';
              font-size: 14px;
              font-weight: 500;
              white-space: pre-wrap;
            }
          }
          .score-wrapper {
            display: flex;
            flex-direction : column
            align-items: center;
            gap: 17px;
          }
          .progress-bar {
            width: 163px;
          }
          .score-font {
            font-family: 'Noto Sans TC';
            font-size: 12px;
            font-style: normal;
            color: #8f8e93;
          }
        `}
      </style>
    </>
  )
}
