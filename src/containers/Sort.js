import { connect } from 'react-redux';
import { setSort } from '../actions/sort';
import Sort from '../components/Sort';

const mapStateToProps = ({ events }) => ({
    sortBy: events.sortBy
  });
  
  const mapDispatchToProps = dispatch => ({
    setSort: sortBy => dispatch(setSort(sortBy))
  });

  export default connect(mapStateToProps, mapDispatchToProps)(Sort);