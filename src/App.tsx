import React from 'react'
import './App.css'
import SearchBar from './containers/SearchBar'
import VisibleSearchResultList from './containers/VisibleSearchResultList'

function App () {
  return (
    <div>
      <SearchBar />
      <VisibleSearchResultList />
    </div>
  )
}

export default App
