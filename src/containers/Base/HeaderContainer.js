import React, {Component} from 'react';
import {LoginButton} from '../../components/Base/Header';
import {connect} from 'react-redux';
import github from '../../assets/image/github.png';
import storage from '../../lib/storage';
import {Link} from "react-router-dom";
import smalllogo from '../../assets/image/smalllogo.png';
import {faTv} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class HeaderContainer extends Component {

    handleLogout = async () => {
        const { UserActions } = this.props;
        try {
            await UserActions.logout();
        } catch (e) {
            console.log(e);
        }

        storage.remove('loggedInfo');
        window.location.href = '/'; // 홈페이지로 새로고침
    }

    render() {
        const { visible, user } = this.props;
        if(!visible) return null;



        return (
            <>
            <nav className="fixed fullWidth underlineShadow bac-color-white">
                <div className="height-40p underline ">
                    <div className="width-70per mar-auto height-100per " >
                        <div className="width-150p height-100per  dsip-inlineblock"></div>
                        <div className="float-right">
                            <ul className="noulstyle disp-flex">
                                <li className="noulstyle nav-div-ul-li top-bar-li">
                                    { user.get('logged')
                                        ? (<div>
                                            {user.getIn(['loggedInfo', 'username'])} <div onClick={this.handleLogout}>(로그아웃)</div>
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

                <div className="width-70per mar-auto height-70p disp-flex" >
                    <div className="width-200p main-logo-top-div">
                        <img src={smalllogo}/>
                    </div>

                    <div className="width-100per-400p ">
                        <ul className="noulstyle disp-flex ">
                            <Link className="noulstyle  width-100per-devide-6 hover-li text-center" to="/" >
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

                    <div className="width-200p ">

                    </div>
                </div>
            </nav>
        <div className="height-110p width-100per "></div>
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
    })
)(HeaderContainer);