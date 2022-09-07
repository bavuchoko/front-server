import React, {Component} from 'react';
import {LoginButton} from '../../components/Base/Header';
import {connect} from 'react-redux';
import github from '../../assets/image/github.png';
import right from '../../assets/image/right-arrow.png';
import letf from '../../assets/image/left-arrow.png';

import storage from '../../lib/storage';
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import * as userActions from '../../redux/modules/user';
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronRight} from "@fortawesome/free-solid-svg-icons";


const menuOn="disp-in width-menu back-color-menu fixed menu-downer";
const menuOut="disp-out";
const btnOn="float-left menu-div";
const btnOff="float-left menu-div";


class HeaderContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMenu: false
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
                            <div  className="float-left menu-div " onClick={this.clickedToggle}>
                                <img   className={this.state.isMenu? btnOn: btnOff} src={this.state.isMenu? letf : right} />
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
                                <li>
                                    <Link className="topCate hover-btn hover-li" to="/about">Home</Link>
                                </li>
                            </ul>

                            <ul className="noulstyle">
                                <li className="topCate underline hover-btn ">
                                    <Link  className="hover-li"  to={{
                                        pathname: '/study/list' ,
                                        state: {
                                            category:''
                                        },
                                    }}>board</Link>
                                </li>
                                <li className="subCate hover-btn ">&nbsp;&nbsp;&nbsp; <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />
                                    <Link className="hover-li" to={{
                                        pathname: '/study/list' ,
                                        state: {
                                            category:'java'
                                        },}}>java
                                    </Link>
                                </li>
                                <li className="subCate hover-btn ">&nbsp;&nbsp;&nbsp; <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />
                                    <Link className="hover-li" to={{
                                        pathname: '/study/list' ,
                                        state: {
                                            category:'springboot'
                                        },}}>springboot
                                    </Link>
                                </li>
                                <li className="subCate hover-btn ">&nbsp;&nbsp;&nbsp; <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />
                                    <Link className="hover-li" to={{
                                        pathname: '/study/list' ,
                                        state: {
                                            category:'database'
                                        },}}>database
                                    </Link>
                                </li>
                                <li className="subCate hover-btn ">&nbsp;&nbsp;&nbsp; <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />
                                    <Link className="hover-li" to={{
                                        pathname: '/study/list' ,
                                        state: {
                                            category:'ubuntu'
                                        },}}>ubuntu
                                    </Link>
                                </li>
                            </ul>

                        <ul className="noulstyle">
                            <li className="topCate underline hover-btn ">
                                <Link  className="hover-li" to={{
                                    pathname: '/docs' ,
                                    state: {
                                        category:'bard'
                                    },}}>Api/Docs
                                </Link>
                            </li>

                            <li className="subCate hover-btn ">&nbsp;&nbsp;&nbsp; <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />
                                <Link className="hover-li" to={{
                                    pathname: '/docs' ,
                                    state: {
                                        category:'board'
                                    },}}>board
                                </Link>
                            </li>
                        </ul>


                            <ul className="noulstyle">
                                <li className="topCate underline hover-btn ">
                                    <Link  className="hover-li" to={{
                                        pathname: '/about' ,
                                        state: {
                                            category:'about'
                                        },}}>about
                                    </Link>
                                </li>
                                <li className="subCate hover-btn ">&nbsp;&nbsp;&nbsp; <FontAwesomeIcon className="dependecies-fontawsome" icon={faChevronRight} />
                                    <Link className="hover-li" to={{
                                        pathname: '/study/list' ,
                                        state: {
                                            category:'enviroment'
                                        },}}>Enviroment
                                    </Link>
                                </li>
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