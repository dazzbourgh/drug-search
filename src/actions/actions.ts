import { RECEIVE, SEARCH, START_FETCHING, STOP_FETCHING } from './action-types'
import { SearchResultItem } from '../domain/domain'
import { AnyAction } from 'redux'

export function startSearch (query: string): AnyAction {
  return {
    type: SEARCH,
    payload: {
      query
    }
  }
}

export function receiveSearchResults (query: string, results: SearchResultItem[]): AnyAction {
  return {
    type: RECEIVE,
    payload: {
      query,
      isFetching: false,
      results
    }
  }
}

export function startFetching (): AnyAction {
  return {
    type: START_FETCHING,
    payload: {
      isFetching: true
    }
  }
}

export function stopFetching (): AnyAction {
  return {
    type: STOP_FETCHING,
    payload: {
      isFetching: false
    }
  }
}
