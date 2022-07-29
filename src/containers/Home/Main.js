import React, {Component} from 'react';
import HomeSideMenu from "../../components/sideMenu/HomeSideMenu";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as authActions from "../../redux/modules/auth";
import * as userActions from "../../redux/modules/user";
import calendar from '../../assets/image/calendar.png';
import { Link } from "react-router-dom";


class Main extends Component {

    render() {

        return (
            <div className="width-1250px mar-auto-0 disp-flex height-100vh-110p">
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

                            <li className="article-card-container noulstyle disp-flex">
                                <Link className="article-card hover-btn" to="/">
                                    <div className="width-100per height-230p bac-color-white2">
                                        <img className="article-card-img" src=""/>
                                    </div>
                                    <div>
                                        <span className="article-card-category">JAVA</span>
                                        <span className="article-card-date">2022-01-01</span>
                                    </div>
                                    <p className="article-card-title">
                                        React 리덕스(Redux) Immutable.js 상태관리 & Ducks 파일 구조
                                    </p>
                                    <p className="article-card-content">
                                        자바스크립트에서 불변성 데이터를 다룰 수 있도록 도와주는 것이 바로 Immutable.js입니다. 우선, 객체 불변성에 대해 살펴 보도록 하겠습니다. 12345let a = 5;let b ...
                                    </p>

                                </Link>


                                <Link className="article-card hover-btn" to="/">
                                    <div className="width-100per height-230p bac-color-white2">
                                        <img className="article-card-img" name="search" src=""/>
                                    </div>
                                    <div>
                                        <span className="article-card-category">JAVA</span>
                                        <span className="article-card-date">2022-01-01</span>
                                    </div>
                                    <p className="article-card-title">
                                        React 리덕스(Redux) Immutable.js 상태관리 & Ducks 파일 구조
                                    </p>
                                    <p className="article-card-content">
                                        자바스크립트에서 불변성 데이터를 다룰 수 있도록 도와주는 것이 바로 Immutable.js입니다. 우선, 객체 불변성에 대해 살펴 보도록 하겠습니다. 12345let a = 5;let b ...
                                    </p>

                                </Link>

                            </li>

                            </ul>
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