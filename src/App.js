import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Transition } from 'semantic-ui-react';
import MenuList from './components/menu-list/MenuList';
import RouterOutlet from './components/router-outltet/RouterOutlet';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className='app-container'>
        <Transition transitionOnMount={true} duration={700} animation='slide right'>
          <Switch>
            <Route exact path='/' component={MenuList} />
            <RouterOutlet />
          </Switch>
        </Transition>
      </div>
    );
  }
}

export default App;
