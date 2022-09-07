import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as baseActions from '../redux/modules/base';
import { AuthWrapper } from '../components/Auth';
import { Route } from 'react-router-dom';
import { DocViewer } from '../containers/Docs';

class Auth extends Component {


    render() {
        return (
            <AuthWrapper>
                <Route path="/docs" component={DocViewer}/>
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
)(Auth);