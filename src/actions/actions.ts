import { RECEIVE, SEARCH, START_FETCHING, STOP_FETCHING } from './action-types'
import { SearchResultItem } from '../domain/domain'

export interface Action {
  type: string,
  payload: any
}

function startSearch (query: string) {
  return {
    type: SEARCH,
    payload: {
      query
    }
  }
}

function receiveSearchResults (query: string, results: SearchResultItem[]) {
  return {
    type: RECEIVE,
    payload: {
      query,
      isFetching: false,
      results
    }
  }
}

function startFetching () {
  return {
    type: START_FETCHING,
    payload: {
      isFetching: true
    }
  }
}

function stopFetching () {
  return {
    type: STOP_FETCHING,
    payload: {
      isFetching: false
    }
  }
}

const startsWithQuery = (query: string) =>
  (result: SearchResultItem) => result.title.toLowerCase().startsWith(query.toLowerCase())

export function fetchResults (query: string) {
  return async (dispatch: any) => {
    dispatch(startSearch(query))
    dispatch(startFetching())
    const results = [{
      title: 'Developedrin',
      link: 'https://github.com'
    }, {
      title: 'GCPchloroquin',
      link: 'https://cloud.google.com'
    }]
    dispatch(stopFetching())
    dispatch(receiveSearchResults(query, results.filter(startsWithQuery(query))))
  }
}
