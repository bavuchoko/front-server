import React from 'react';
import HomeSideMenu from "../../components/sideMenu/HomeSideMenu";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../../redux/modules/auth";
import * as userActions from "../../redux/modules/user";
import {Link} from "react-router-dom";

function WriteContainer(props) {
    let isLoggedIn = props.isLoggedIn;
    isLoggedIn = true;
    const writeBtn = isLoggedIn? <Link className="roboto write_btn float-right" to="/write">WRITE</Link> : null;



    return (
        <div className="width-1248px mar-auto-0 disp-flex height-100vh">
            <div className="width-100per-350p mar-auto-0 bac-color-white">

            </div>
        </div>
    );
}


export default connect(
    (state) => ({
        form: state.auth.getIn(['register', 'form']),
        error: state.auth.getIn(['register', 'error']),
        exists: state.auth.getIn(['register', 'exists']),
        result: state.auth.get('result')
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(WriteContainer);