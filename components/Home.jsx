import { useOutletContext } from 'react-router-dom'
import CountriesList from './CountriesList'
import SearchBar from './SearchBar'
import SelectMenu from './SelectMenu'
import { useState } from 'react'

import useTheme from '../hooks/useTheme'

export default function Home() {
    const [query,setQuery]=useState('')
    const [isDark]= useTheme()
  return (
    <main className={isDark?'dark':''}>
        <div className="search-filter-container">
          <SearchBar setQuery={setQuery}/>
          <SelectMenu setQuery={setQuery} />
        </div>
        <CountriesList query={query}  />
      </main>
  )
}
