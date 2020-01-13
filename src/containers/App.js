import { connect } from 'react-redux';
import { setEvents } from '../actions/events';
import App from '../components/App';
import { orderBy } from 'lodash';

const sorting = (events, sortBy) => {
  switch (sortBy) {
    case 'cheap':
      return orderBy(events, 'price', 'asc');
    case 'expensive':
      return orderBy(events, 'price', 'desc');
    case 'movie':
      return events.filter(elem => elem.type === 'movie');
    case 'festival':
      return events.filter(elem => elem.type === 'festival');
    case 'exhibition':
      return events.filter(elem => elem.type === 'exhibition');
    default:
      return events;
  }
};

const searching = (events, searchQuery) => 
  events.filter(elem => 
    elem.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
    elem.address.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
    elem.description.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 
  );

const findEvent = (events, sortBy, searchQuery) => {
  return sorting(searching(events, searchQuery), sortBy);
};

const mapStateToProps = ({ events, sort }) => ({
    events: findEvent(events.items, sort.sortBy, sort.searchQuery),
    isReady: events.isReady,
  });
  
  const mapDispatchToProps = dispatch => ({
    setEvents: events => dispatch(setEvents(events))
  });

  export default connect(mapStateToProps, mapDispatchToProps)(App);