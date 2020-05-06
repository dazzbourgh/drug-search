import { RECEIVE, SEARCH, START_FETCHING, STOP_FETCHING } from '../actions/action-types'
import { Action } from '../actions/actions'
import { combineReducers } from 'redux'

function query (state = '', action: Action) {
  switch (action.type) {
    case SEARCH:
      return action.payload.query
    default:
      return state
  }
}

function isFetching (state = false, action: Action) {
  switch (action.type) {
    case START_FETCHING:
      return true
    case STOP_FETCHING:
      return false
    default:
      return false
  }
}

function results (state = [], action: Action) {
  switch (action.type) {
    case RECEIVE:
      return action.payload.results
    default:
      return state
  }
}

export const rootReducer = combineReducers({
  query,
  isFetching,
  results
})

export default rootReducer
