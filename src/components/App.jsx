import React, { Component } from 'react';
import axios from 'axios';
import { Container, Card } from 'semantic-ui-react' 

import Navbar from './Navbar';
import EventCard from './EventCard';
import Sort from '../containers/Sort';

class App extends Component {
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
        <Sort />
        <Card.Group stackable itemsPerRow={3}>
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

export default App;