import { useState } from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import Rating from '@mui/material/Rating'

export default function CampgroundCard() {
  const [rating, setRating] = useState(4)
  return (
    <>
      <div className="wrapper">
        <img src={'/images/camp-list1.jpg'} className="ground-img" />

        <div className="card-text">
          <div className="topWrapper">
            <div className="titleWrapper">
              <h3 className="title">歸樸森活</h3>
              <div className="categoryWrapper">
                <span className="darkTag">營地主</span>
                <span className="hintTag">類別</span>
              </div>
            </div>
          </div>
          <div className="middleWrapper">
            <span className="distance">
              嘉義．顯示在地圖上．距嘉義火車站 2.9 公里
            </span>
            <div className="addressWrapper">
              <div className="locationLabel">
                <IoLocationOutline style={{ width: '20px', height: '20px' }} />
              </div>
              <span>嘉義縣番路鄉埔7鄰69號</span>
            </div>
          </div>
          <div className="bottomWrapper">
            <div className="ratingWrapper">
              <span className="rating">4.0</span>
              <Rating
                name="read-only"
                value={rating}
                readOnly
                sx={{
                  color: '#e49366',
                }}
              />
              <span className="commentCount">15則評論</span>
            </div>
            <div className="priceWrapper">
              <span className="day-customer">1晚、2位入住</span>
              <span className="price">$ 1,600</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .wrapper {
            background: var(--sub-color);
            width: 100%;
            padding: 20px;
            font-family: 'Noto Sans TC', sans-serif;
            color: var(--main-color-dark);
            display: flex;
            gap: 32px;
            border-radius: 18px;
            margin-block: 32px;
          }
          .ground-img {
            width: 384px;
            height: 186px;
            border-radius: 18px;
            object-fit: cover;
          }

          .titleWrapper {
            display: flex;
            flex-direction: column;
            gap: 7px;
          }

          .card-text {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .title {
            font-size: 20px;
            font-weight: 600;
          }
          .distance {
            font-size: 14px;
          }

          .middleWrapper {
            padding-top: 6px;
          }
          .addressWrapper {
            display: flex;
            gap: 6px;
            span {
              color: #8f8e93;
              font-size: 12px;
              line-height: 30px;
            }
          }

          .categoryWrapper {
            display: flex;
            gap: 6px;
          }
          .darkTag {
            background: var(--main-color-dark);
            border-radius: 16px;
            padding-inline: 5px;
            padding-block: 2px;
            color: var(--main-color-bright);
            font-size: 12px;
          }
          .hintTag {
            background: var(--hint-color);
            border-radius: 16px;
            padding-inline: 5px;
            padding-block: 2px;
            color: var(--main-color-bright);
            font-size: 12px;
          }

          .locationLabel {
            color: var(--hint-color);
          }

          .ratingWrapper {
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .rating {
            background: var(--hint-color);
            font-family: 'Montserrat', sans-serif;
            font-size: 14px;
            padding: 5px;
            color: var(--main-color-bright);
            border-radius: 10px;
          }
          .commentCount {
            color: #8f8e93;
            font-size: 12px;
          }
          .bottomWrapper {
            display: flex;
            justify-content: space-between;
            align-items: end;
          }
          .priceWrapper {
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: end;
          }
          .day-customer {
            font-size: 12px;
          }
          .price {
            font-family: 'Montserrat', sans-serif;
            font-size: 25px;
            font-weight: 600;
          }
        `}
      </style>
    </>
  )
}
