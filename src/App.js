import React, { Component } from 'react';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Main from './components/main';
import BookMarks from './components/bookmarks';
import four0four from './components/404';
import {auth} from './components/firebase';
class App extends Component {
  constructor(){
    super();
    this.state={
      user:JSON.parse(localStorage.getItem('user'))
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route component={()=><Main user={this.state.user} />} path="/" user={this.state.user}></Route>
          <Route component={BookMarks} path="/b/:userid" exact user={this.state.user}></Route>
          <Route component={four0four}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
