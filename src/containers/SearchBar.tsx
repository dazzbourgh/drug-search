import React from 'react'
import { connect } from 'react-redux'
import { startSearch } from '../actions/actions'
import { State } from '../domain/state'
import { createUseStyles } from 'react-jss'
import { Spinner } from '../components/Spinner'

const barHeight = 50
const useStyles = createUseStyles({
  input: {
    width: '90%',
    height: barHeight,
    padding: {
      top: 5,
      right: 5,
      left: 5,
      bottom: 5
    },
    fontSize: 'xx-large',
    border: {
      width: 0.4,
      radius: 4
    },
    boxShadow: '0 0 0 0.4px',
    '&:focus': {
      'box-shadow': '0 0 5px rgba(103, 171, 243, 1)'
    },
    margin: {
      top: 10
    }
  },
  outerDiv: {
    width: '100%',
    display: 'flex'
  },
  spinner: {
    height: barHeight
  }
})

let SearchBar: any = ({ dispatch, isFetching }: { dispatch: any, isFetching: boolean }) => {
  const styles = useStyles()
  let input: HTMLInputElement
  const inputElement = <input ref={node => { input = node as HTMLInputElement }}
    onKeyUp={() => dispatch(startSearch(input.value))}
    className={styles.input}/>
  const spinnerComponent = isFetching ? <Spinner/> : null
  return (
    <div className={styles.outerDiv}>
      {inputElement}
      {spinnerComponent}
    </div>
  )
}

const mapStateToProps = (state: State) => ({
  isFetching: state.isFetching
})

SearchBar = connect(mapStateToProps)(SearchBar)

export default SearchBar
