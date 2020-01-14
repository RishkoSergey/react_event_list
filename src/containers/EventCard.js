import { connect } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../actions/favorites';
import EventCard from '../components/EventCard';

const mapStateToProps = ({ favorites }) => ({
  ...favorites
});

const mapDispatchToProps = dispatch => ({
  addToFavorites: event => dispatch(addToFavorites(event)),
  removeFromFavorites: id => dispatch(removeFromFavorites(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);