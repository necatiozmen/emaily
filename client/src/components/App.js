import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { fetchUser } from '../actions/index';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header/>
            <Route exact={true} path="/" component={Landing}/>
            <Route exact path="/surveys" component={Dashboard}/>
            <Route path="/surveys/new" component={SurveyNew}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUser()),
});

export default connect(null, actions)(App);
