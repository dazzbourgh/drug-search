import React from 'react'
import { connect } from 'react-redux'
import { startSearch } from '../actions/actions'

let SearchBar: any = ({ dispatch }: { dispatch: any }) => {
  let input: HTMLInputElement

  return (
    <div>
      <input ref={node => { input = node as HTMLInputElement }}
        onKeyUp={() => dispatch(startSearch(input.value))}/>
    </div>
  )
}

SearchBar = connect()(SearchBar)

export default SearchBar
