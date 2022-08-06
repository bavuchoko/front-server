import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { About,Study, Auth, Write } from './pages';
import HeaderContainer from './containers/Base/HeaderContainer';
import "./assets/css/index.css"
import storage from './lib/storage';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from './redux/modules/user';


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
        <div>
          <HeaderContainer/>
          <Route exact path="/" component={About}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/study" component={Study}/>
          <Route path="/auth" component={Auth}/>
          <Route path="/write" component={Write}/>
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