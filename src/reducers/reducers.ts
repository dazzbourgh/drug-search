import { RECEIVE, SEARCH } from '../actions/action-types'
import { Action } from '../actions/actions'
import { combineReducers } from 'redux'
import { initialState } from '../domain/state'

function drugSearchStart (state = initialState, action: Action) {
  switch (action.type) {
    case SEARCH:
      return Object.assign({}, state, {
        query: action.payload.query,
        isFetching: true,
        results: []
      })
    default:
      return state
  }
}

function drugSearchReceiveResults (state = initialState, action: Action) {
  switch (action.type) {
    case RECEIVE:
      return Object.assign({}, state, {
        query: action.payload.query,
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
