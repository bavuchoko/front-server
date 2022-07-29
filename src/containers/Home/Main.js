import React, {Component} from 'react';
import HomeSideMenu from "../../components/sideMenu/HomeSideMenu";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../../redux/modules/auth";
import * as userActions from "../../redux/modules/user";
import calendar from '../../assets/image/calendar.png';
import { Link } from "react-router-dom";
import Contents from "../../components/content/Contents";
import Pagenation from "../../components/util/Pagenation";

class Main extends Component {

    render() {

        return (
            <div className="width-1250px mar-auto-0 disp-flex height-100vh">
                <div className="width-350p">
                    <HomeSideMenu />
                </div>

                <div className="width-100per-350p mar-auto-0 bac-color-white">
                    <p className="text-indent-20p main-category">HOME</p>
                    <div className="article-container">
                        <div className="article-banner bac-color-D61C4E"></div>
                        <div className="date-selector-div" >
                            <img className="calendar-fas" src={calendar}/>
                            <span  className="calendar-span">2002 - 02</span>
                        </div>

                        <div className="article-body">
                            <ul className="noulstyle padding-tr-40p">
                                <Contents />
                                <Contents />
                                <Contents />
                                <Contents />
                                <Contents />

                            </ul>
                        </div>

                        <Pagenation />

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