import { connect } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../actions/favorites';
import Navbar from '../components/Navbar';

const mapStateToProps = ({ favorites }) => ({
  count: favorites.items.length, 
  items: favorites.items
});

const mapDispatchToProps = dispatch => ({
  addToFavorites: event => dispatch(addToFavorites(event)),
  removeFromFavorites: id => dispatch(removeFromFavorites(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);