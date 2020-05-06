import React from 'react'
import { connect } from 'react-redux'
import { startSearch } from '../actions/actions'
import spinner from '../assets/spinner.svg'
import { State } from '../domain/state'

let SearchBar: any = ({ dispatch, isFetching }: { dispatch: any, isFetching: boolean }) => {
  let input: HTMLInputElement
  const spinnerComponent = isFetching ? <img src={spinner} alt="spinner" className='Spinner' /> : null
  return (
    <div>
      <input ref={node => { input = node as HTMLInputElement }}
        onKeyUp={() => dispatch(startSearch(input.value))}/>
      { spinnerComponent }
    </div>
  )
}

const mapStateToProps = (state: State) => ({
  isFetching: state.isFetching
})

SearchBar = connect(mapStateToProps)(SearchBar)

export default SearchBar
