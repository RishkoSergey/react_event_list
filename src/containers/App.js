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
    default:
      return events;
  }
}

const mapStateToProps = ({ events }) => ({
    events: sorting(events.items, events.sortBy),
    isReady: events.isReady,
  });
  
  const mapDispatchToProps = dispatch => ({
    setEvents: events => dispatch(setEvents(events))
  });

  export default connect(mapStateToProps, mapDispatchToProps)(App);