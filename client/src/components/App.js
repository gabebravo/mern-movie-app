import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// COMPONENTS
import Home from './Home'
import MovieGame from '../containers/MovieContainer'
import Result from './Result'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/movie-game' component={MovieGame} />
            <Route path='/result' component={Result} />
            <Route render={() => {
              return <h1>Not Found</h1>
            }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
