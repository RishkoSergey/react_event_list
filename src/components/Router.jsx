import React from 'react';
import { Route } from 'react-router-dom';

import EventPage from '../containers/EventPage';
import App from '../containers/App';

const Router = () => (
    <div>
        <Route exact path='/' component = {App} />
        <Route path='/event' component = {EventPage} />
    </div>
)

export default Router;