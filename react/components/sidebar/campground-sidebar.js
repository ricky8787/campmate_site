import { useState } from 'react'
import styles from './campground-sidebar.module.css'
import Slider, { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'

import ReactSlider from 'react-slider'

export default function CampgroundSidebar() {
  const [value, setValue] = useState([3500, 7000])
  const [score, setScore] = useState('')
  const [pbu, setPbu] = useState([])
  const [roomu, setRoomu] = useState([])

  const scoreOptions = [
    '極度好評 4.5 分以上',
    '大多好評 4.0 分以上',
    '好評  3.5 分以上',
    '褒貶不一 3.0 分以上',
  ]
  const pbuOptions = ['花園', '露台', '游泳池', '桑拿', '停車場']
  const roomuOptions = ['衛生紙', '淋浴間', '廁所', '吹風機', '空調', '免費盥洗用品', '電熱水壺', '洗衣機', '電視']

  const handlepbuGroup = (e) => {
    const etv = e.target.value
    // 判斷目前是否有在myPets陣列中
    if (pbu.includes(etv)) {
      const nextPbu = pbu.filter((v) => v !== etv)
      setPbu(nextPbu)
    } else {
      // 否則 ==> 加入陣列
      const nextPbu = [...pbu, etv]
      setPbu(nextPbu)
    }
  }

  const handleroomuGroup = (e) => {
    const etv = e.target.value
    if (roomu.includes(etv)) {
      const nextRoomu = roomu.filter((v) => v !== etv)
      setRoomu(nextRoomu)
    } else {
      // 否則 ==> 加入陣列
      const nextRoomu = [...roomu, etv]
      setRoomu(nextRoomu)
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="mapWrapper">
          <p>於地圖上顯示</p>
          <div className="googleMap">我是地圖</div>
        </div>
        <h5>透過以下分類搜尋:</h5>
        <div className="divide-line"></div>
        <div className="budgetWrapper">
          <p>房價預算(每晚)</p>
          <div className="slidebar">
            <ReactSlider
              max={10500}
              min={500}
              minDistance={500}
              step={500}
              value={value}
              onBeforeChange={(value, index) => console.log()}
              onChange={(value, index) => console.log()}
              onAfterChange={(value, index) => {
                console.log()
                setValue(value)
              }}
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
            />
          </div>
          <div className="range">
            <div>{value[0]}</div>
            <div>{value[1]}</div>
          </div>
        </div>
        <div className="divide-line"></div>
        <div className="scoreWrapper">
          <p>評分</p>
          <div title="radio-button-group" className="radioScore">
            {scoreOptions.map((v, i) => {
              return (
                <label key={i} className="container">
                  <input
                    className="scoreCheck"
                    style={{ color: 'red' }}
                    type="radio"
                    value={v}
                    checked={v === score}
                    onChange={(e) => {
                      setScore(e.target.value)
                    }}
                  />
                  {v}
                  <span className="checkmark" />
                </label>
              )
            })}
          </div>
        </div>
        <div className="divide-line"></div>
        <div className="pbu-wrapper">
          <p>公共設施</p>
          {pbuOptions.map((v, i) => {
            return (
              <label key={i} className="container">
                <input
                  // 要設定value屬性對映v，在事件觸發時目標對象的值是這個
                  value={v}
                  type="checkbox"
                  checked={pbu.includes(v)}
                  onChange={handlepbuGroup}
                />
                {v}
                <span className="checkmark" />
              </label>
            )
          })}
        </div>
        <div className="roomu-wrapper">
          <p>公共設施</p>
          {roomuOptions.map((v, i) => {
            return (
              <label key={i} className="container">
                <input
                  // 要設定value屬性對映v，在事件觸發時目標對象的值是這個
                  value={v}
                  type="checkbox"
                  checked={roomu.includes(v)}
                  onChange={handleroomuGroup}
                />
                {v}
                <span className="checkmark" />
              </label>
            )
          })}
        </div>
      </div>
      <style jsx>
        {`
          .wrapper {
            font-family: 'Noto Sans TC', sans-serif;
          }
          .googleMap {
            width: 187px;
            height: 314px;
            border: 1px solid var(--main-color-dark);
            border-radius: 20px;
          }
          .divide-line {
            background: var(--main-color-dark);
            height: 1px;
            margin-block: 17px;
          }
          .budgetWrapper {
            display: flex;
            flex-direction: column;
            padding-block: 12px;
          }
          .slidebar {
            display: grid;
            place-items: center;
          }
          .range {
            display: flex;
            justify-content: space-between;
            font-family: 'Montserrat', sans-serif;
            font-weight: 500;
          }
          .radioScore {
            display: flex;
            flex-direction: column;
          }

          .container {
            display: block;
            position: relative;
            padding-left: 35px;
            margin-bottom: 12px;
            cursor: pointer;
            font-size: 14px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          /* Hide the browser's default radio button */
          .container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
          }

          /* Create a custom radio button */
          .checkmark {
            position: absolute;
            top: 5px;
            left: 0;
            height: 16px;
            width: 16px;
            background-color: white;
            border: 2px solid grey;
            border-radius: 50%;
          }

          /* On mouse-over, add a grey background color */
          .container:hover input ~ .checkmark {
            background-color: #ffcbae;
          }

          /* When the radio button is checked, add a blue background */
          .container input:checked ~ .checkmark {
            background-color: white;
            border: 2px solid var(--hint-color);
          }

          /* Create the indicator (the dot/circle - hidden when not checked) */
          .checkmark:after {
            content: '';
            position: absolute;
            display: none;
          }

          /* Show the indicator (dot/circle) when checked */
          .container input:checked ~ .checkmark:after {
            display: block;
          }

          /* Style the indicator (dot/circle) */
          .container .checkmark:after {
            top: 2.5px;
            left: 2.5px;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: var(--hint-color);
          }
          .pbu-wrapper {
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}
