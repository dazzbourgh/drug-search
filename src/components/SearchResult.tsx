import React from 'react'
import PropTypes from 'prop-types'

const SearchResult = ({ onClick, title, link }: {
    onClick: any,
    title: string,
    link: string
}) => (
  <li
    onClick={onClick}>
    {title}
    <br/>
    {link}
  </li>
)

SearchResult.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default SearchResult
