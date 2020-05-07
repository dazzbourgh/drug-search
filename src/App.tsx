import React from 'react'
import './App.css'
import SearchBar from './containers/SearchBar'
import VisibleSearchResultList from './containers/VisibleSearchResultList'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    margin: {
      left: '20%',
      right: '20%',
      top: '10%'
    }
  }
})

function App () {
  const styles = useStyles()
  return (
    <div className={styles.container}>
      <h1>CoolRz</h1>
      <SearchBar />
      <VisibleSearchResultList />
    </div>
  )
}

export default App
