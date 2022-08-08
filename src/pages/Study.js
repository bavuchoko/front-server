import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as baseActions from "../redux/modules/base";
import {Route} from "react-router-dom";
import {Main, WriteContainer} from "../containers/Study";
import AuthWrapper from "../components/Auth/AuthWrapper";

class Study extends Component {


    render() {
        return (
            <AuthWrapper>
                <Route path="/study/list" component={Main}/>
                <Route path="/study/write" component={WriteContainer}/>
            </AuthWrapper>
        );
    }
}

export default connect(
    (state) => ({
    }),
    (dispatch) => ({
        BaseActions: bindActionCreators(baseActions, dispatch)
    })
)(Study);