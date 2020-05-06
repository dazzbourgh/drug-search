import { SearchResultItem } from './domain'

export interface State {
  query: string,
  isFetching: boolean,
  results: SearchResultItem[]
}

export const initialState: State = {
  query: '',
  isFetching: false,
  results: []
}
