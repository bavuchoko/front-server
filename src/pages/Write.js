import React, { Component } from 'react';
import {AuthWrapper} from "../components/Auth";
import {Route} from "react-router-dom";
import {WriteContainer} from "../containers/Write";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as baseActions from "../redux/modules/base";

class Write extends Component {
    render() {
        return (
            <AuthWrapper>
                <Route path="/write" component={WriteContainer}/>
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
)(Write);