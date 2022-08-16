import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { About, Study, Auth } from './pages';
import {Main as StudyList, WriteContainer, View} from './containers/Study'


import HeaderContainer from './containers/Base/HeaderContainer';
import "./assets/css/index.css"
import storage from './lib/storage';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from './redux/modules/user';

import PublicRoute from "./lib/Router/PublicRoute";
import PrivateRoute from "./lib/Router/PrivateRoute";

class App extends Component {

    initializeUserInfo = async () => {
        const loggedInfo = storage.get('loggedInfo');
        if(!loggedInfo) return;


        const { UserActions } = this.props;
        // UserActions.setLoggedInfo(loggedInfo);

        try {
            // await UserActions.checkStatus();
        } catch (e) {
            storage.remove('token');
            storage.remove('username');
            storage.remove('loggedInfo');
            window.location.href = '/auth/login?expired';
        }
    }

    componentDidMount() {
        this.initializeUserInfo();
    }


  render() {
    return (
        <div className="summit">
          <HeaderContainer/>
          <Route exact path="/" component={StudyList}/>
          <Route path="/about" component={About} exact/>
          <PublicRoute exact path="/study/list" component={StudyList}/>
          <PrivateRoute exact path="/study/write" component={WriteContainer}/>
          <Route exact path="/study/view" component={View}/>
          <Route path="/auth" component={Auth}/>
        </div>
    );
  }
}

export default connect(
    null,
    (dispatch) => ({
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(App);