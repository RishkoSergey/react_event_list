import React from 'react';
import { connect } from 'react-redux';

function App(props) {
  return (
    <ul>
      {
        props.events.map(item => (
          <li>
            <b>{item.title}</b> - {item.price}
          </li>
        ))
      }
    </ul>
  );
}

const mapStateToProps = ({ events }) => ({
  events: events.items
});

export default connect(mapStateToProps)(App);
