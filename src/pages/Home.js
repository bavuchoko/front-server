import React, { Component } from 'react';
import {AuthWrapper} from "../components/Auth";
import {Route} from "react-router-dom";
import {Main} from "../containers/Home";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as baseActions from "../redux/modules/base";

class Home extends Component {
    render() {
        return (
            <AuthWrapper>
                <Route path="/" component={Main}/>
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
)(Home);