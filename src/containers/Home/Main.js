import React, {Component} from 'react';
import HomeSideMenu from "../../components/sideMenu/HomeSideMenu";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../../redux/modules/auth";
import * as userActions from "../../redux/modules/user";

class Main extends Component {

    render() {

        return (
            <div className="width-70per mar-auto-0 disp-flex height-100vh-110p">
                <div className="width-350p">
                    <HomeSideMenu />
                </div>

                <div className="width-100per-350p mar-auto-0 bac-color-white">
                    <p className="text-indent-20p main-category">HOME</p>
                    <div className="">
                        <div className="disp-flex">


                        </div>
                    </div>
                </div>


            </div>
        );
    }
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
)(Main);