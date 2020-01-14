import React, { Component } from 'react';
import axios from 'axios';
import { Container, Card, Grid, Loader } from 'semantic-ui-react';

import Navbar from '../containers/Navbar';
import EventCard from '../containers/EventCard';
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
        <Grid>
          <Grid.Column mobile={14} largeScreen={4}>
            <Sort />
          </Grid.Column>
          <Grid.Column mobile={14} largeScreen={12}>
            <Card.Group stackable itemsPerRow={3}>
              { isReady 
                ? events.map(item => (
                  <EventCard {...item} />
                ))
                : <Loader active inline='centered' />
              }
            </Card.Group>
          </Grid.Column>
        </Grid>
      </Container>  
    );
  }
}

export default App;