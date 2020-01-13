import React from 'react';
import { connect } from 'react-redux';

import { setEvents } from './actions/events';
import axios from 'axios';
import { Container, Card } from 'semantic-ui-react' 

import Navbar from './components/Navbar';
import EventCard from './components/EventCard';

class App extends React.Component {
  componentDidMount() {
    const { setEvents } = this.props;
    axios.get('/events.json').then(response => {
      setEvents(response.data)
    })
  }
  render() {
    const { events, isReady } = this.props;
    return (
      <Container>
        <Navbar />
        <Card.Group itemsPerRow={3}>
          { isReady 
            ? events.map(item => (
              <EventCard {...item} />
            ))
            : <p>Тут будет лоадер</p> 
          }
        </Card.Group>
      </Container>
    );
  }
}

const mapStateToProps = ({ events }) => ({
  events: events.items,
  isReady: events.isReady
});

const mapDispatchToProps = dispatch => ({
  setEvents: events => dispatch(setEvents(events))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
