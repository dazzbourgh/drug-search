import { RECEIVE, SEARCH } from './action-types'
import { SearchResult } from '../domain/domain'
import fetch from 'cross-fetch'

export interface Action {
  type: string,
  payload: any
}

export function startSearch (query: string) {
  return {
    type: SEARCH,
    payload: {
      query,
      isFetching: true
    }
  }
}

export function receiveSearchResults (query: string, results: SearchResult[]) {
  return {
    type: RECEIVE,
    payload: {
      results
    }
  }
}

export function fetchResults (query: string) {
  return async (dispatch: any) => {
    dispatch(startSearch(query))
    const response = await (await fetch('')).json()
    const results: SearchResult[] = response as SearchResult[]
    dispatch(receiveSearchResults(query, results))
  }
}
