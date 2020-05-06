import React from 'react'
import { connect } from 'react-redux'
import { fetchResults } from '../actions/actions'

let SearchBar: any = ({ dispatch }: { dispatch: any }) => {
  let input: HTMLInputElement

  // todo: dispatch event on keypress after debounce time
  return (
    <div>
      <input ref={node => { input = node as HTMLInputElement } } />
      <button onClick={() => dispatch(fetchResults(input.value))}>Search</button>
    </div>
  )
}

SearchBar = connect()(SearchBar)

export default SearchBar
