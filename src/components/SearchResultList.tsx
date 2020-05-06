import SearchResult from './SearchResult'
import React from 'react'
import { SearchResultItem } from '../domain/domain'
import PropTypes from 'prop-types'

const SearchResultList = ({ searchResults, onSearchResultClick }: {
    searchResults: SearchResultItem[],
    onSearchResultClick: (link: string) => void
}) => (
  <ul>
    {searchResults.map(result => (
      <SearchResult
        key={result.title}
        onClick={() => onSearchResultClick(result.link)}
        {...result}/>
    ))}
  </ul>
)

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
