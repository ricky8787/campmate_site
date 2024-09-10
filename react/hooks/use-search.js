import { createContext, useState, useContext, useEffect } from 'react'

const SearchContext = createContext(null)

export default function SearchProvider({ children }) {
  const [searchValue, setSearchValue] = useState({
    keyword: '',
    people: 1,
  })

  const [calenderValue, setCalenderValue] = useState('')

  const handleFieldChange = (e) => {
    console.log(e.target.type, e.target.name, e.target.value)
    setSearchValue({ ...searchValue, [e.target.name]: e.target.value })
  }

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        calenderValue,
        setCalenderValue,
        handleFieldChange,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}

// 3. 建立一個包裝useContext的useAuth
export const useSearch = () => useContext(SearchContext)
