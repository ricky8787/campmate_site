import { useState, useEffect } from 'react'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Card from 'react-bootstrap/Card'
import collectStyles from '@/styles/collect.module.css'
import { motion, AnimatePresence } from 'framer-motion'

// icon
import { TbHeartMinus } from 'react-icons/tb'

// 篩選標籤
const FILTER_OPTIONS = ['全部', '北部地區', '中部地區', '南部地區', '東部地區']
const PRODUCT_OPTIONS = ['全部', '帳篷', '露營椅']

export default function CollectTabs() {
  // 資料庫
  const initialCardData = [
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/2.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地2',
      label: '中部地區',
      imgSrc: '/pic/3.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '東部地區',
      imgSrc: '/pic/4.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '北部地區',
      imgSrc: '/pic/5.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '南部地區',
      imgSrc: '/pic/6.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/2.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/3.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '東部地區',
      imgSrc: '/pic/4.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '北部地區',
      imgSrc: '/pic/5.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '南部地區',
      imgSrc: '/pic/6.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/2.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/3.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '東部地區',
      imgSrc: '/pic/4.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '北部地區',
      imgSrc: '/pic/5.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '南部地區',
      imgSrc: '/pic/6.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/2.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/3.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '東部地區',
      imgSrc: '/pic/4.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '北部地區',
      imgSrc: '/pic/5.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '南部地區',
      imgSrc: '/pic/6.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/2.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/3.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '東部地區',
      imgSrc: '/pic/4.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '北部地區',
      imgSrc: '/pic/5.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '南部地區',
      imgSrc: '/pic/6.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/2.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/3.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '東部地區',
      imgSrc: '/pic/4.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '北部地區',
      imgSrc: '/pic/5.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '南部地區',
      imgSrc: '/pic/6.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/2.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/3.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '東部地區',
      imgSrc: '/pic/4.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '北部地區',
      imgSrc: '/pic/5.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '南部地區',
      imgSrc: '/pic/6.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/2.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/3.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '東部地區',
      imgSrc: '/pic/4.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '北部地區',
      imgSrc: '/pic/5.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '南部地區',
      imgSrc: '/pic/6.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/2.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/3.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '東部地區',
      imgSrc: '/pic/4.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '北部地區',
      imgSrc: '/pic/5.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '南部地區',
      imgSrc: '/pic/6.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/2.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/3.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '東部地區',
      imgSrc: '/pic/4.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '北部地區',
      imgSrc: '/pic/5.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '南部地區',
      imgSrc: '/pic/6.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/2.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/3.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '東部地區',
      imgSrc: '/pic/4.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '北部地區',
      imgSrc: '/pic/5.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '南部地區',
      imgSrc: '/pic/6.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/2.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '中部地區',
      imgSrc: '/pic/3.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '東部地區',
      imgSrc: '/pic/4.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '北部地區',
      imgSrc: '/pic/5.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '南部地區',
      imgSrc: '/pic/6.jpg',
      type: 'camp',
    },
    {
      title: '緣溪行森林營地',
      label: '南部地區',
      imgSrc: '/pic/6.jpg',
      type: 'camp',
    },
    {
      title: 'CAMPFIRE戰焰露營椅【極黑】',
      label: '露營椅',
      imgSrc: '/pic/product.webp',
      type: 'product',
    },
    {
      title: 'CAMPFIRE戰焰露營椅【極黑】',
      label: '露營椅',
      imgSrc: '/pic/product.webp',
      type: 'product',
    },
    {
      title: 'CAMPFIRE戰焰露營椅【極黑】',
      label: '露營椅',
      imgSrc: '/pic/product.webp',
      type: 'product',
    },
    {
      title: 'CAMPFIRE戰焰露營椅【極黑】',
      label: '露營椅',
      imgSrc: '/pic/product.webp',
      type: 'product',
    },
    {
      title: 'CAMPFIRE戰焰露營椅【極黑】',
      label: '露營椅',
      imgSrc: '/pic/product.webp',
      type: 'product',
    },
  ]

  const [cardData, setCardData] = useState(initialCardData)
  const [key, setKey] = useState('camp')

  // 彈出視窗
  const [cancelModal, setCancelModal] = useState(false)
  const [selectedTitle, setSelectedTitle] = useState('')
  const [selectedCardId, setSelectedCardId] = useState('')

  // 處理表單提交
  const handleSubmit = async (event) => {
    event.preventDefault()

    // 刪除資料
    try {
      // 假設你的 API 端點是 '/api/delete-card'
      await fetch(`/api/delete-card`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: selectedTitle }),
      })

      // 更新資料庫，從狀態中刪除該筆資料
      setCardData((prevData) =>
        prevData.filter((card) => card.title !== selectedTitle)
      )

      // 關閉模態框
      setCancelModal(false)
    } catch (error) {
      console.error('Error deleting card:', error)
      alert('刪除失敗，請稍後再試')
    }
  }

  const handleRegionFilterChange = (event) => {
    setRegionFilter(event.target.value)
    setVisibleCount(12)
  }

  const handleProductFilterChange = (event) => {
    setProductFilter(event.target.value)
    setVisibleCount(12)
  }

  // 篩選
  const [regionFilter, setRegionFilter] = useState('全部')
  const [productFilter, setProductFilter] = useState('全部')

  // 控制頁面載入時的數量
  const [items, setItems] = useState(
    Array.from({ length: 12 }, (_, i) => `Item ${i + 1}`)
  )
  const [visibleCount, setVisibleCount] = useState(12)
  // 模擬加載更多按鈕點擊事件
  const loadMoreItems = () => {
    setVisibleCount((prevCount) => prevCount + 12)
  }
  // 滾動載入更多card
  useEffect(() => {
    // console.log('Visible count:', visibleCount)
    // Simulate fetching new items
    setItems(Array.from({ length: visibleCount }, (_, i) => `Item ${i + 1}`))
  }, [visibleCount])

  // 篩選後的卡片數據
  const filteredCampData = cardData
    .filter(
      (card) =>
        card.type === 'camp' &&
        (regionFilter === '全部' || card.label === regionFilter)
    )
    .slice(0, visibleCount)

  const filteredProductData = cardData
    .filter(
      (card) =>
        card.type === 'product' &&
        (productFilter === '全部' || card.label === productFilter)
    )
    .slice(0, visibleCount)

  // 判斷是否顯示「載入更多」按鈕
  const hasMoreCampItems =
    filteredCampData.length <
    cardData.filter(
      (card) =>
        card.type === 'camp' &&
        (regionFilter === '全部' || card.label === regionFilter)
    ).length

  const hasMoreProductItems =
    filteredProductData.length <
    cardData.filter(
      (card) =>
        card.type === 'product' &&
        (productFilter === '全部' || card.label === productFilter)
    ).length

  const handleCardClick = (title) => {
    setSelectedTitle(title)
    setCancelModal(true)
  }

  // 載入的速度
  const [showLoadMore, setShowLoadMore] = useState(false)

  useEffect(() => {
    // 設定延遲時間（例如 500 毫秒）
    const timer = setTimeout(() => {
      const shouldShowLoadMore =
        (hasMoreCampItems && key === 'camp') ||
        (hasMoreProductItems && key === 'profile')
      setShowLoadMore(shouldShowLoadMore)
    }, 0)

    return () => clearTimeout(timer) // 清除定時器
  }, [hasMoreCampItems, hasMoreProductItems, key])

  return (
    <Tabs
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className={collectStyles.tabsStyle}
      id="collectTabs"
    >
      <Tab
        eventKey="camp"
        title={<span className={collectStyles.customTab}>營地</span>}
        className={collectStyles.tabStyle}
      >
        <div className={collectStyles.filterContainer}>
          {FILTER_OPTIONS.map((option) => (
            <div key={option}>
              <input
                type="radio"
                id={`region-${option}`}
                name="regionFilter"
                value={option}
                checked={regionFilter === option}
                onChange={handleRegionFilterChange}
                className={collectStyles.filterRadio}
              />
              <label
                htmlFor={`region-${option}`}
                className={collectStyles.filterLabel}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
        <div className={collectStyles.campContent}>
          <AnimatePresence>
            {filteredCampData.map((card, index) => (
              <motion.div
                key={index}
                className={collectStyles.CardStyle}
                initial={{ opacity: 0, y: 0.9 }}
                animate={{ opacity: 1, y: 1 }}
                exit={{ opacity: 0, y: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <Card.Img
                    variant="top"
                    src={card.imgSrc}
                    className={collectStyles.CardImg}
                  />
                  <Card.Body className={collectStyles.CardBodyStyle}>
                    <div className={collectStyles.CardHStyle}>
                      <div className={collectStyles.cardTitle}>
                        <div className={collectStyles.CardTitleH}>
                          {card.title}
                        </div>
                        <div className={collectStyles.CardTitleStyle}>
                          <div className={collectStyles.CardTitle1Style}>
                            標籤
                          </div>
                          <div className={collectStyles.CardTitle2Style}>
                            {card.label}
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      className={collectStyles.CardBtn}
                      onClick={() => handleCardClick(card.title)}
                    >
                      <TbHeartMinus className={collectStyles.CardIcon} />
                    </button>
                  </Card.Body>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className={collectStyles.loadMore}>
          {showLoadMore && (
            <button
              className={collectStyles.loadMoreBtn}
              onClick={loadMoreItems}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              載入更多
            </button>
          )}
        </div>

        {/* 是否取消收藏 */}
        {cancelModal && (
          <div className={collectStyles.modalBackdrop}>
            <div className={collectStyles.modalContent}>
              <form className={collectStyles.form}>
                <div className={collectStyles.cancelH}>是否取消收藏 ?</div>
                <div className={collectStyles.cancelP}>。{selectedTitle}</div>
                <div className={collectStyles.submitGroup}>
                  <div className={collectStyles.submitDiv}>
                    <button
                      className={collectStyles.backButton}
                      onClick={() => setCancelModal(false)}
                    >
                      否
                    </button>
                    <button
                      onClick={handleSubmit}
                      className={collectStyles.cancelButton}
                    >
                      是
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </Tab>

      {/* 露營用品 */}
      <Tab
        eventKey="profile"
        title={<span className={collectStyles.customTab}>露營用品</span>}
        className={collectStyles.tabStyle}
      >
        <div className={collectStyles.filterContainer}>
          {PRODUCT_OPTIONS.map((option) => (
            <div key={option}>
              <input
                type="radio"
                id={`product-${option}`}
                name="productFilter"
                value={option}
                checked={productFilter === option}
                onChange={handleProductFilterChange}
                className={collectStyles.filterRadio}
              />
              <label
                htmlFor={`product-${option}`}
                className={collectStyles.filterLabel}
              >
                {option}
              </label>
            </div>
          ))}
        </div>
        <div className={collectStyles.campContent}>
          {filteredProductData.map((card, index) => (
            <Card key={index} className={collectStyles.CardStyle}>
              <Card.Img
                variant="top"
                src={card.imgSrc}
                className={collectStyles.CardImg}
              />
              <Card.Body className={collectStyles.CardBody2Style}>
                <div className={collectStyles.CardH2Style}>
                  <div className={collectStyles.cardTitle}>
                    <div className={collectStyles.CardTitleH}>{card.title}</div>
                    <div className={collectStyles.CardTitleStyle}>
                      <div className={collectStyles.CardTitle1Style}>
                        {card.label}
                      </div>
                      <div className={collectStyles.CardTitle3Style}>
                        {card.label}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className={collectStyles.CardBtn}
                  onClick={() => handleCardClick(card.title)}
                >
                  <TbHeartMinus className={collectStyles.CardIcon2} />
                </button>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div className={collectStyles.loadMore}>
          {showLoadMore && (
            <motion.button
              className={collectStyles.loadMoreBtn}
              onClick={loadMoreItems}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              載入更多
            </motion.button>
          )}
        </div>

        {/* 是否取消收藏 */}
        {cancelModal && (
          <div className={collectStyles.modalBackdrop}>
            <div className={collectStyles.modalContent}>
              <form className={collectStyles.form}>
                <div className={collectStyles.cancelH}>是否取消收藏 ?</div>
                <div className={collectStyles.cancelP}>。{selectedTitle}</div>
                <div className={collectStyles.submitGroup}>
                  <div className={collectStyles.submitDiv}>
                    <button
                      className={collectStyles.backButton}
                      onClick={() => setCancelModal(false)}
                    >
                      否
                    </button>
                    <button
                      onClick={handleSubmit}
                      className={collectStyles.cancelButton}
                    >
                      是
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )}
      </Tab>
    </Tabs>
  )
}
