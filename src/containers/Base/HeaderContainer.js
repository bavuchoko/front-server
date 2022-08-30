import React, {Component} from 'react';
import {LoginButton} from '../../components/Base/Header';
import {connect} from 'react-redux';
import github from '../../assets/image/github.png';
import menu from '../../assets/image/icon-m.png';

import storage from '../../lib/storage';
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import * as userActions from '../../redux/modules/user';
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";


const menuOn="disp-in width-menu back-color-menu fixed menu-downer";
const menuOut="disp-out";

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenu: true
        }
    }
    handleLogout = async () => {
        const { UserActions } = this.props;
        axios.get('/api/auth/logout');


        storage.remove('loggedInfo');
        window.location.href = '/'; // 홈페이지로 새로고침
    }
    clickedToggle =()=> {
       const {isMenu} = this.state;
       this.setState({
           isMenu: !isMenu
       });
    }

    render() {
        const {  user } = this.props;

        return (
            <>
            <nav id="#header" className="fullWidth bac-color-white fixed">
                <div className="height-70p">

                    <div className="width-1140px mar-auto-0 height-70p text-center">
                        <div className="width-1140px  height-100per " >
                            <div className="float-left menu-div"   onClick={this.clickedToggle}>
                                <img  className="hover-btn" src={menu} />
                            </div>
                            <span className="dsip-inlineblock blogname">blog name</span>
                            <div className="top-header float-right">
                                <ul className="noulstyle disp-flex">
                                    <li className="noulstyle nav-div-ul-li top-bar-li">
                                        { user.get('logged')
                                            ? (<div className="disp-flex">
                                                [ {user.getIn(['loggedInfo', 'nickname'])}  ] 님 <div className="margin-left-10p nav-ul-li-p hover-btn " onClick={this.handleLogout}>로그아웃</div>
                                            </div> )
                                            : <LoginButton/>
                                        }
                                    </li>

                                    <li className="noulstyle nav-div-ul-li top-bar-li">
                                        <Link className="nav-ul-li-p hover-btn " to="/about">
                                            about me
                                        </Link>
                                    </li>
                                    <li className="noulstyle nav-div-ul-li" onClick={() => window.open('https://github.com/bavuchoko/monster', '_blank')}>
                                        <p className="nav-ul-li-p"><img  className="hover-btn" src={github} /></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
                <div className="tc-spacer"></div>
                <div className={this.state.isMenu? menuOn: menuOut}>

                    <div className="sideMenu">
                            <ul className="noulstyle">
                                <li className="topCate underline hover-btn">board</li>
                                <li className="subCate hover-btn">&nbsp;&nbsp;&nbsp; <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} /> java</li>
                                <li className="subCate hover-btn">&nbsp;&nbsp;&nbsp; <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} /> springboot</li>
                                <li className="subCate hover-btn">&nbsp;&nbsp;&nbsp; <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} /> database</li>
                                <li className="subCate hover-btn">&nbsp;&nbsp;&nbsp; <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} /> ubuntu</li>
                                <li className="subCate hover-btn">&nbsp;&nbsp;&nbsp; <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} /> Api/Docs</li>
                            </ul>


                            <ul className="noulstyle">
                                <li className="topCate underline hover-btn">about</li>
                                <li className="subCate hover-btn">&nbsp;&nbsp;&nbsp; <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} /> Enviroment</li>
                            </ul>
                    </div>

                </div>

    </>
        );
    }
}

export default connect(
    (state) => ({
        user: state.user
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(userActions, dispatch)
    })
)(HeaderContainer);