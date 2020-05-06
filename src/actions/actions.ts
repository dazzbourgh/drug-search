import { RECEIVE, SEARCH } from './action-types'
import { SearchResultItem } from '../domain/domain'

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

export function receiveSearchResults (query: string, results: SearchResultItem[]) {
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
    const results = [{
      title: 'Developedrin',
      link: 'https://github.com'
    }, {
      title: 'GCPchloroquin',
      link: 'https://cloud.google.com'
    }]
    dispatch(receiveSearchResults(query, results))
  }
}
