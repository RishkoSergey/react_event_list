import { connect } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../actions/favorites';
import EventPage from '../components/EventPage';

const mapStateToProps = ({ favorites, events }) => ({
  favorites: favorites.items,
  events: events.items
});

const mapDispatchToProps = dispatch => ({
  addToFavorites: event => dispatch(addToFavorites(event)),
  removeFromFavorites: id => dispatch(removeFromFavorites(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);