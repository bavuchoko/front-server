import React, {Component} from 'react';
import {LoginButton} from '../../components/Base/Header';
import {connect} from 'react-redux';
import github from '../../assets/image/github.png';
import storage from '../../lib/storage';
import {Link} from "react-router-dom";
import {faTv} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {bindActionCreators} from "redux";
import * as userActions from '../../redux/modules/user';
import axios from "axios";

class HeaderContainer extends Component {

    handleLogout = async () => {
        const { UserActions } = this.props;
        axios.get('/api/auth/logout');


        storage.remove('loggedInfo');
        window.location.href = '/'; // 홈페이지로 새로고침
    }

    render() {
        const { visible, user } = this.props;
        if(!visible) return null;

        return (
            <>
            <nav id="#header" className="top-head-nav2 fullWidth underlineShadow bac-color-white">
                <div className="width-100per mar-auto height-70p disp-flex" >
                    <div className="width-100per-400p ">
                        <ul className="noulstyle disp-flex  height-70p">
                            <Link className="noulstyle  width-100per-devide-6 hover-li text-center  line-h-90px" to="/" >
                                <FontAwesomeIcon icon={faTv} />
                            </Link>
                            <Link className="noulstyle  width-100per-devide-6 hover-li" to="/" >
                                <p>STUDY</p>
                            </Link>
                            <Link className="noulstyle  width-100per-devide-6 hover-li"  to="/" >
                                <p>API</p>
                            </Link>
                            <Link className="noulstyle  width-100per-devide-6 hover-li" to="/" >
                                <p>TEST</p>
                            </Link>
                            <Link className="noulstyle  width-100per-devide-6 hover-li"  to="/">
                                <p>ETC..</p>
                            </Link>
                            <Link className="noulstyle  width-100per-devide-6" to="/" >

                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
            <nav id="#header" className="top-head-nav fullWidth underlineShadow bac-color-white">
                <div className="height-40p underline ">
                    <div className="width-1140px mar-auto-0">
                        <div className="width-100per  height-100per " >
                        <div className="width-150p height-100per  dsip-inlineblock"></div>
                        <div className="float-right">
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
                                    <Link className="nav-ul-li-p hover-btn " to="/member/login">
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
                <div className="width-1140px  height-100per mar-auto-0" >
                    <div className="width-100per mar-auto height-70p disp-flex" >
                    <div className="width-200p main-logo-top-div">
                        <Link to="/" >
                            {/*<img src={smalllogo}/>*/}
                        </Link>
                    </div>

                    <div className="width-900p ">
                        <ul className="noulstyle disp-flex height-70p">
                            <Link className="noulstyle  width-140p hover-li text-center line-h-90px" to="/" >
                                <FontAwesomeIcon icon={faTv} />
                            </Link>
                            <Link className="noulstyle  width-80p hover-li text-center line-h-54px" to="/study" >
                                <p>Barod</p>
                            </Link>
                            <Link className="noulstyle  width-80p hover-li text-center line-h-54px"  to="/docs" >
                                <p>Api/Docs</p>
                            </Link>
                            <Link className="noulstyle  width-80p hover-li text-center line-h-54px" to="/test" >
                                <p>Test</p>
                            </Link>
                            <Link className="noulstyle  width-80p hover-li text-center line-h-54px"  to="/etc">
                            <p>Etc..</p>
                            </Link>
                            <Link className="noulstyle  width-80p text-center line-h-54px" to="/" >

                            </Link>
                        </ul>
                    </div>


                </div>
                </div>
            </nav>
                <div className="width-100per height-112p"></div>
    </>
        );
    }
}

export default connect(
    (state) => ({
        visible: state.base.getIn(['header', 'visible']),
        user: state.user
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(userActions, dispatch)
    })
)(HeaderContainer);