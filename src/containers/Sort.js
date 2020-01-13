import { connect } from 'react-redux';
import { setSort, setSearch } from '../actions/sort';
import Sort from '../components/Sort';

const mapStateToProps = ({ sort }) => ({
    sortBy: sort.sortBy
  });
  
  const mapDispatchToProps = dispatch => ({
    setSort: sortBy => dispatch(setSort(sortBy)),
    setSearch: searchQuery => dispatch(setSearch(searchQuery))
  });

  export default connect(mapStateToProps, mapDispatchToProps)(Sort);