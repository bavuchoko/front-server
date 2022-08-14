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
        const loggedInfo = storage.get('loggedInfo'); // 로그인 정보를 로컬스토리지에서 가져옵니다.
        if(!loggedInfo) return; // 로그인 정보가 없다면 여기서 멈춥니다.


        const { UserActions } = this.props;
        UserActions.setLoggedInfo(loggedInfo);

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