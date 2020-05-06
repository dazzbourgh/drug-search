import { ActionsObservable, combineEpics, ofType } from 'redux-observable'
import { SEARCH } from '../actions/action-types'
import { receiveSearchResults, startFetching, stopFetching } from '../actions/actions'
import { of } from 'rxjs'
import { debounceTime, map, mergeMap, delay, tap } from 'rxjs/operators'
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

function fetchResultsEpic (action$: ActionsObservable<AnyAction>) {
  return action$.pipe(
    ofType(SEARCH),
    debounceTime(300),
    tap(() => of(startFetching())),
    delay(1000),
    mergeMap((action: any) => of(mockSearchResults).pipe(
      map(results => results.filter(startsWithQuery(action.payload.query))),
      map(results => receiveSearchResults(action.payload.query, results))
    )),
    tap(() => of(stopFetching()))
  )
}

const rootEpic = combineEpics(fetchResultsEpic)

export default rootEpic
