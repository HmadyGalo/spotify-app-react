import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { setAccessToken } from './spotify';
import Home from './Home';
import Search from './Search';
import Profile from './Profile';
import './App.css';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = window.location.hash
      .substring(1)
      .split('&')
      .reduce(function (initial, item) {
        if (item) {
          var parts = item.split('=');
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});
    window.location.hash = '';
    let _token = hash.access_token;
    if (_token) {
      setAccessToken(_token);
      setToken(_token);
    }
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
