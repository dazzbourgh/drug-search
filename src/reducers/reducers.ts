import { RECEIVE, SEARCH, START_FETCHING, STOP_FETCHING } from '../actions/action-types'
import { combineReducers, AnyAction } from 'redux'

function query (state = '', action: AnyAction) {
  switch (action.type) {
    case SEARCH:
      return action.payload.query
    default:
      return state
  }
}

function isFetching (state = false, action: AnyAction) {
  switch (action.type) {
    case START_FETCHING:
      return true
    case STOP_FETCHING:
      return false
    default:
      return false
  }
}

function results (state = [], action: AnyAction) {
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
