import { RECEIVE, SEARCH } from '../actions/action-types'
import { Action } from '../actions/actions'
import { SearchResult } from '../domain/domain'
import { combineReducers } from 'redux'

interface State {
  query: string,
  isFetching: boolean,
  results: SearchResult[]
}

const initialState: State = {
  query: '',
  isFetching: false,
  results: []
}

function drugSearchStart (state = initialState, action: Action) {
  switch (action.type) {
    case SEARCH:
      return Object.assign({}, state, {
        query: action.payload.query,
        isFetching: true
      })
    default:
      return state
  }
}

function drugSearchReceiveResults (state = initialState, action: Action) {
  switch (action.type) {
    case RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        results: action.payload.results
      })
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  drugSearchStart,
  drugSearchReceiveResults
})

export default rootReducer
