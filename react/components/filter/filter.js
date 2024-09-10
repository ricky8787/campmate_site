import { useState } from 'react'

import { deepPurple } from '@mui/material/colors'
import FormControl from '@mui/material/FormControl'
import { menuClasses } from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Select, { selectClasses } from '@mui/material/Select'
import { SlArrowDown } from 'react-icons/sl'
import { RiFilterLine } from 'react-icons/ri'

export default function Filter() {
  const [isOpen, setIsOpen] = useState(false)
  const [sortBy, setSortBy] = useState(0)
  const handleChange = (e) => {
    setSortBy(e.target.value)
  }
  return (
    <>
      <div className="wrapper">
        <p className="title-of-discount">
          限時優惠 <span>此分類共 10 個</span>
        </p>
        <div className="selectBtn" onClick={() => setIsOpen(!isOpen)}>
          <div className="filterIcon">
            <RiFilterLine
              style={{
                color: 'var(--main-color-dark)',
                width: '20px',
                height: '20px',
              }}
            />
          </div>
          <FormControl>
            <Select
              style={{ position: 'relative' }}
              label="排序選擇"
              disableUnderline
              variant="standard"
              MenuProps={{
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'left',
                },
                sx: {
                  marginBlock: '0.5rem',
                  [`& .${menuClasses.paper}`]: {
                    borderRadius: '12px',
                  },
                  [`& .${menuClasses.list}`]: {
                    paddingTop: 0,
                    paddingBottom: 0,
                    background: 'white',
                    '& li': {
                      paddingTop: '12px',
                      paddingBottom: '12px',
                    },
                    '& li:hover': {
                      background: 'var(--main-color-bright)',
                    },
                    '& li.Mui-selected': {
                      color: 'white',
                      background: 'var(--main-color-dark)',
                    },
                    '& li.Mui-selected:hover': {
                      background: 'var(--main-color-dark)',
                    },
                  },
                },
              }}
              IconComponent=""
              value={sortBy}
              onChange={handleChange}
              sx={{
                minWidth: 200,
                background: 'transparent',
                [`& .${selectClasses.select}`]: {
                  background: 'transparent',
                  color: '#8f8e93',
                  fontFamily: 'Montserrat',
                  fontWeight: '700',
                  paddingLeft: '24px',
                  paddingRight: '24px',
                  paddingTop: '5px',
                  paddingBottom: '5px',
                  borderBottom: '2px solid var(--main-color-dark)',
                  '&:focus': {
                    background: 'transparent',
                    borderColor: 'var(--main-color-dark)',
                  },
                },
                [`& .${selectClasses.icon}`]: {
                  right: '12px',
                  background: 'transparent',
                },
              }}
            >
              <MenuItem value={0} selected hidden>
                請選擇排序
              </MenuItem>
              <MenuItem value={1}>價格(由低到高)</MenuItem>
              <MenuItem value={2}>價格(由高到低)</MenuItem>
              <MenuItem value={3}>評分(由低到高)</MenuItem>
              <MenuItem value={4}>評分(由高到低)</MenuItem>
            </Select>
          </FormControl>
          <div className="dropdown">
            <SlArrowDown />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .wrapper {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            margin-block: 32px;
          }
          .title-of-discount {
            font-family: 'Noto Sans TC';
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            margin-bottom: 0px;
            span {
              color: #8f8e93;
              font-size: 14px;
            }
          }
          .filterIcon {
            position: absolute;
            top: 0;
          }
          .selectBtn {
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
          }
          .dropdown {
            position: absolute;
            right: 0;
            transform: rotate(0 deg);
          }
        `}
      </style>
    </>
  )
}
