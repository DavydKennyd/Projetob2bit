import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserProfile from './UserProfile.js';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={UserProfile} />
        <Route path="/user-profile" component={UserProfile} />
      </Switch>
    </Router>
  );
}

export default App;
