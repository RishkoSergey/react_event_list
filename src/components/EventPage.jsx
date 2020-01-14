import React from 'react';
import { Container, Grid, Image, Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Navbar from '../containers/Navbar';
import style from '../style/EventPage.module.css';

const EventPage = (props) => {
  const id = Number(props.location.pathname.substring(7, props.location.pathname.length));
  const item = props.events.filter(event => event.id === id)[0];
  return (
    <Container>
      <Navbar />
      <Grid>
        <Grid.Column mobile={16} largeScreen={4}>
          <NavLink to="/"><Button basic content="К списку" icon='left arrow' labelPosition='left' /></NavLink>
        </Grid.Column>
        <Grid.Column mobile={16} largeScreen={12}>
          <div className={style.container}>
            <div className={style.picture}>
              <Image src={item.image}></Image>
            </div>
            <div className={style.title}>{item.title}</div>
            <div className={style.descr}>{item.description}</div>
            <div className={style.page_body}>{item.body}</div>
          </div>
        </Grid.Column>
      </Grid>
    </Container>
  )
}

export default EventPage;