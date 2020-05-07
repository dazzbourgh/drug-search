import SearchResult from './SearchResult'
import React from 'react'
import { SearchResultItem } from '../domain/domain'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  searchResultList: {
    padding: 0,
    border: {
      radius: 5,
      style: 'solid',
      color: 'white'
    },
    width: '90%',
    margin: {
      top: 10,
      left: 2.5
    }
  }
})

const SearchResultList = ({ searchResults, onSearchResultClick }: {
    searchResults: SearchResultItem[],
    onSearchResultClick: (link: string) => void
}) => {
  const styles = useStyles()
  return searchResults.length > 0 ? <ul className={styles.searchResultList}>
    {searchResults.map(result => (
      <SearchResult
        key={result.title}
        onClick={() => onSearchResultClick(result.link)}
        {...result}/>
    ))}
  </ul> : null
}

SearchResultList.propTypes = {
  searchResults: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onSearchResultClick: PropTypes.func.isRequired
}

export default SearchResultList
