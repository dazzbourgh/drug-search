import { ActionsObservable, combineEpics, ofType } from 'redux-observable'
import { RECEIVE, SEARCH } from '../actions/action-types'
import { receiveSearchResults, startFetching, stopFetching } from '../actions/actions'
import { of } from 'rxjs'
import { debounceTime, map, mergeMap, delay } from 'rxjs/operators'
import { SearchResultItem } from '../domain/domain'
import { AnyAction } from 'redux'

const startsWithQuery = (query: string) =>
  (result: SearchResultItem) => result.title.toLowerCase().startsWith(query.toLowerCase())

const mockSearchResults = [{
  title: 'Developedrine',
  link: 'https://github.com'
}, {
  title: 'GCPchloroquin',
  link: 'https://cloud.google.com'
}]

function startSearchEpic (action$: ActionsObservable<AnyAction>) {
  return action$.pipe(
    ofType(SEARCH),
    debounceTime(300),
    mergeMap(() => of(startFetching()))
  )
}

function startFetchingEpic (action$: ActionsObservable<AnyAction>) {
  return action$.pipe(
    ofType(SEARCH),
    debounceTime(300),
    delay(1000),
    mergeMap((action: any) => of(mockSearchResults).pipe(
      map(results => results.filter(startsWithQuery(action.payload.query))),
      map(results => receiveSearchResults(action.payload.query, results))
    ))
  )
}

function stopFetchingEpic (action$: ActionsObservable<AnyAction>) {
  return action$.pipe(
    ofType(RECEIVE),
    mergeMap(() => of(stopFetching()))
  )
}

const rootEpic = combineEpics(startSearchEpic, startFetchingEpic, stopFetchingEpic)

export default rootEpic
