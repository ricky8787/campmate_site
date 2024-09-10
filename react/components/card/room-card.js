import { useState, useEffect } from 'react'

// ICONS
import { MdPeople, MdOutlineSmokeFree, MdBed } from 'react-icons/md'
import { FaRegCalendar } from 'react-icons/fa'
import { FaRestroom } from 'react-icons/fa'
import { MdOutlineShower } from 'react-icons/md'
import { LuRefrigerator } from 'react-icons/lu'
import { LuSnowflake } from 'react-icons/lu'
import { PiHairDryerBold } from 'react-icons/pi'
import { PiTelevisionSimple } from 'react-icons/pi'
import { LuSofa } from 'react-icons/lu'
import { LiaTimesCircle } from 'react-icons/lia'

// MUI Modal
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'

//
import RoomCardCarousel from '../carousel/room-card-carousel'

// Carousel
const OPTIONS = { loop: true }
const SLIDE_COUNT = 6
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())



export default function RoomCard() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  return (
    <>
      <div className="card-wrapper">
        <div className="room-name">【懶人露營】4人星空帳</div>
        <div className="title-wrapper">
          <div className="info">
            <h5 className="info-title">房型資訊</h5>
            <div className="info-content">
              <img className="room-image" src="/images/camp-list1.jpg" alt="" />
              <div className="room-info-wrapper">
                <MdPeople style={{ width: '24px', height: '24px' }} />
                基本入住人數:4人
              </div>
              <div className="room-info-wrapper">
                <MdOutlineSmokeFree style={{ width: '24px', height: '24px' }} />
                禁菸房
              </div>
              <div className="room-info-wrapper">
                <MdBed style={{ width: '24px', height: '24px' }} />
                標準雙人床
              </div>
              <div className="checkBtn" onClick={handleOpen}>
                查看房型資訊
              </div>
              {/* 這裡是我的 Modal */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box
                  sx={{
                    position: 'relative',
                    margin: 'auto',
                    top: '100px',
                    width: '80%',
                    maxHeight: '80vh', // 限制最大高度
                    overflowY: 'auto', // 启用垂直滚动条
                    bgcolor: '#f5f5f7',
                    p: 4,
                    padding: '40px 35px',
                    flexDirection: 'column',
                    alignItems: 'start',
                    gap: '40px',
                    borderRadius: '30px',
                    outline: 'none',
                    '&::-webkit-scrollbar': {
                      width: '8px', // 设置滚动条宽度
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: '#888', // 滚动条颜色
                      borderRadius: '30px', // 滚动条圆角
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                      backgroundColor: '#555',
                    },
                    clipPath: 'inset(0 0 0 0 round 30px)',
                  }}
                >
                  <div className="times" onClick={handleClose}>
                    <LiaTimesCircle />
                  </div>
                  <div className="box-content-title">房型圖片</div>
                  <RoomCardCarousel slides={SLIDES} options={OPTIONS} />
                  <div className="box-content-title">設施</div>
                  <div className="facility-wrapper">
                    <div className="facility">
                      <FaRestroom />
                      廁所
                    </div>
                    <div className="facility">
                      <MdOutlineShower />
                      衛浴
                    </div>
                    <div className="facility">
                      <LuRefrigerator />
                      冰箱
                    </div>
                    <div className="facility">
                      <LuSnowflake />
                      冷氣
                    </div>
                    <div className="facility">
                      <PiHairDryerBold />
                      吹風機
                    </div>
                    <div className="facility">
                      <PiTelevisionSimple />
                      電視
                    </div>
                    <div className="facility">
                      <MdBed />床
                    </div>
                    <div className="facility">
                      <LuSofa />
                      沙發
                    </div>
                  </div>
                </Box>
              </Modal>
            </div>
          </div>
          <div className="info2">
            <h5 className="info-title">訂房方案</h5>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                padding: '16px',
                height: '100%',
                borderRight: '1px solid #574426',
                marginBottom: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <div className="room-type">一泊一食</div>
                <div className="cancel">09/13 17:59 (UTC+8) 前可免費取消</div>
              </div>
              <div className="specail-service">
                <div className="service-text">2 張單人床</div>
                <div className="service-text">免費自助停車</div>
                <div className="service-text">免費無線上網</div>
              </div>
            </div>
          </div>
          <div className="info3">
            <h5 className="info-title3">總價</h5>
            <div className="total-count">
              <div className="price">$ 1500</div>
              <div className="room-info-wrapper">
                <MdPeople style={{ width: '24px', height: '24px' }} />
                4人
              </div>
              <div className="room-info-wrapper">
                <FaRegCalendar style={{ width: '24px', height: '24px' }} />
                3晚
              </div>
              <div className="order-btn-wrapper">
                <div className="order-btn">預約訂房</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .card-wrapper {
            width: 1042px;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          }
          .room-name {
            font-family: 'Noto Sans TC';
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            background-color: var(--main-color-dark);
            color: var(--main-color-bright);
            padding-left: 35px;
            padding-block: 10px;
          }
          .title-wrapper {
            padding-inline: 35px;
            display: flex;
          }
          .info {
            display: flex;
            flex-direction: column;
            width: 185px;
            font-family: 'Noto Sans TC', sans-serif;
            font-size: 12px;
            color: var(--main-color-dark);
          }
          .info-title {
            font-size: 12px;
            font-weight: 500;
            color: #8f8e93;
            border-bottom: 1px solid #574426;
            padding-right: 10px;
            padding-block: 10px;
            margin-bottom: 0;
          }

          .info-title3 {
            font-size: 12px;
            font-weight: 500;
            color: #8f8e93;
            border-bottom: 1px solid #574426;
            padding-right: 10px;
            padding-block: 10px;
            margin-bottom: 0;
          }
          .info-content {
            display: flex;
            flex-direction: column;
            gap: 10px;
            font-size: 16px;
            padding-block: 10px;
            padding-right: 10px;
            border-right: 1px solid #574426;
            margin-bottom: 10px;
          }
          .checkBtn {
            font-size: 14px;
            padding-inline: 15px;
            padding-block: 5px;
            background: #e5e4cf;
            outline: inherit;
            border-radius: 40px;
            border: 1px solid var(--main-color-dark);
            width: 116px;
            font-family: 'Noto Sans TC';
            font-size: 14px;
            font-weight: 500;
            color: #574426;
            cursor: pointer;
          }
          .info2 {
            display: flex;
            flex-direction: column;
            width: 482px;
            font-family: 'Noto Sans TC', sans-serif;
          }
          .room-type {
            font-family: 'Noto Sans TC', sans-serif;
            font-size: 24px;
            font-weight: 500;
            color: var(--main-color-dark);
          }
          .cancel {
            font-family: 'Noto Sans TC', sans-serif;
            font-size: 14px;
            font-weight: 500;
            color: var(--hint-color);
          }
          .specail-service {
            font-family: 'Noto Sans TC', sans-serif;
            display: flex;
            flex-direction: column;
            font-size: 14px;
            font-weight: 500;
            text-decoration-line: underline;
            color: var(--main-color-dark);
          }

          .info3 {
            display: flex;
            flex-direction: column;
            width: 340px;
            font-family: 'Noto Sans TC', sans-serif;
          }
          .room-info-wrapper {
            display: flex;
            gap: 12px;
            align-items: center;
            font-family: 'Noto Sans TC';
            font-size: 16px;
            font-weight: 500;
            color: var(--main-color-dark);
          }
          .total-count {
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .price {
            font-family: Montserrat;
            font-size: 35px;
            font-style: normal;
            font-weight: 600;
            color: var(--main-color-dark);
          }
          .room-image {
            width: 175px;
            height: 175px;
            object-fit: cover;
          }
          .order-btn-wrapper {
            display: flex;
            justify-content: end;
          }
          .order-btn {
            background: var(--main-color-dark);
            color: var(--main-color-bright);
            padding-inline: 15px;
            padding-block: 10px;
            border-radius: 40px;
            cursor: pointer;
          }
           {
            /* modal */
          }

          .box-content-title {
            width: 100%;
            background: var(--main-color-dark);
            border-radius: 35px;
            padding: 6px 20px 6px 20px;
            color: var(--main-color-bright);
            font-family: 'Noto Sans TC';
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: 16px;
          }
          .facility-wrapper {
            display: flex;
            gap: 17px;
            padding-left: 10px;
          }
          .facility {
            display: flex;
            gap: 5px;
            align-items: center;
            font-family: 'Noto Sans TC';
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            color: #2d2d2d;
          }
          .times {
            position: absolute;
            right: 0;
            top: 0;
            font-size: 35px;
            color: #574426;
            cursor: pointer;
            &:hover {
              color: var(--hint-color);
            }
          }
        `}
      </style>
    </>
  )
}
