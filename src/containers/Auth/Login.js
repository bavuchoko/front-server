import React, { Component } from 'react';
import { AuthContent, InputWithLabel, AuthButton, RightAlignedLink, AuthError } from '../../components/Auth';
import { connect } from 'react-redux';
import man from '../../assets/image/man.png';
import {bindActionCreators} from 'redux';
import * as authActions from '../../redux/modules/auth';
import * as userActions from '../../redux/modules/user';
import storage from '../../lib/storage';
import queryString from 'query-string';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import MemberlSideMenu from "../../components/sideMenu/MemberlSideMenu";

class Login extends Component {
    componentWillUnmount() {
        const { AuthActions } = this.props;
        AuthActions.initializeForm('login')
    }
    handleChange = (e) => {
        const { AuthActions } = this.props;
        const { name, value } = e.target;

        AuthActions.changeInput({
            name,
            value,
            form: 'login'
        });
    }
    componentDidMount() {
        const { location } = this.props;
        const query = queryString.parse(location.search);

        if(query.expired !== undefined) {
            this.setError('세션에 만료되었습니다. 다시 로그인하세요.')
        }
    }

    setError = (message) => {
        const { AuthActions } = this.props;
        AuthActions.setError({
            form: 'login',
            message
        });
        return false;
    }

    handleLocalLogin = async () => {
        const { form, AuthActions, UserActions, history } = this.props;
        const { email, password } = form.toJS();

        try {
            await AuthActions.localLogin({email, password});
            const loggedInfo = this.props.result.toJS();

            UserActions.setLoggedInfo(loggedInfo);
            history.push('/');
            storage.set('loggedInfo', loggedInfo);

        } catch (e) {
            console.log('a');
            this.setError('잘못된 계정정보입니다.');
        }
    }
    render() {
        const { email, password } = this.props.form.toJS(); // form 에서 email 과 password 값을 읽어옴
        const { handleChange, handleLocalLogin } = this;
        const { error } = this.props;

        return (
            <div  className="width-70per mar-auto-0 disp-flex height-100vh-110p">


                <div className="width-1248px mar-auto-0  bac-color-white">
                    <div className="padding-rl-80p-t-40p">

                        <h2 className="login-h2 h2-head">로그인</h2>
                        <div className="disp-flex login-from pad-t85p ">
                            <div className="profile-div">
                                <img  className="" src={man} />
                            </div>
                            <form className="form-tag">
                                <div className="width-100per pad-t56p">
                                    <div>
                                        <InputWithLabel
                                        className="login-frm-btn"
                                        name="email"
                                        placeholder="username@email.com"
                                        value={email}
                                        onChange={handleChange}
                                    />
                                    </div>
                                    <div>

                                        <InputWithLabel
                                            className="login-frm-btn"
                                            name="password"
                                            placeholder="password"
                                            type="password"
                                            value={password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <AuthButton onClick={handleLocalLogin} type='button' className="hover-btn">
                                            <FontAwesomeIcon icon={faPowerOff} />로그인</AuthButton>
                                        {
                                            error && <AuthError>{error}</AuthError>
                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default connect(
    (state) => ({
        form: state.auth.getIn(['login', 'form']),
        error: state.auth.getIn(['login', 'error']),
        result: state.auth.get('result')
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch),
        UserActions: bindActionCreators(userActions, dispatch)
    })
)(Login);