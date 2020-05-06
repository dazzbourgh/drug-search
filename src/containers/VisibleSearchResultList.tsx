import { State } from '../domain/state'
import { connect } from 'react-redux'
import SearchResultList from '../components/SearchResultList'

const mapStateToProps = (state: State) => ({
  searchResults: state.results || []
})

// todo: add action for onClick event
const mapDispatchToProps = (dispatch: any) => ({
  onSearchResultClick: (link: string) => {}
})

const VisibleSearchResultList: any = connect(mapStateToProps, mapDispatchToProps)(SearchResultList)

export default VisibleSearchResultList
