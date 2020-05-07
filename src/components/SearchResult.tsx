import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  searchResult: {
    listStyleType: 'none',
    background: {
      color: 'white'
    },
    padding: {
      left: 20
    },
    '&:hover': {
      backgroundColor: 'rgb(204, 255, 255)',
      cursor: 'pointer'
    }
  },
  title: {
    fontSize: 'xx-large'
  },
  link: {
    fontSize: 'small'
  }
})

const SearchResult = ({ onClick, title, link }: {
    onClick: any,
    title: string,
    link: string
}) => {
  const styles = useStyles()
  return <li
    onClick={onClick}
    className={styles.searchResult}>
    <span className={styles.title}>{title}</span>
    <br/>
    <span className={styles.link}>{link}</span>
  </li>
}

SearchResult.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default SearchResult
