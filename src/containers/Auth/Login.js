import React, {Component} from 'react';
import {AuthButton, AuthError, InputWithLabel} from '../../components/Auth';
import {connect} from 'react-redux';
import man from '../../assets/image/man.png';
import {bindActionCreators} from 'redux';
import * as authActions from '../../redux/modules/auth';
import queryString from 'query-string';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPowerOff} from "@fortawesome/free-solid-svg-icons";
import storage from "../../lib/storage";

class Login extends Component {
    componentWillUnmount() {
        console.log("componentWillUnmount");
        const { AuthActions } = this.props;
        AuthActions.initializeForm('login')
    }
    handleChange = (e) => {
        console.log("handleChange");
        const { AuthActions } = this.props;
        const { name, value } = e.target;

        AuthActions.changeInput({
            name,
            value,
            form: 'login'
        });
    }
    componentDidMount() {
        console.log("componentDidMount");
        const { location } = this.props;
        const query = queryString.parse(location.search);

        if(query.expired !== undefined) {
            this.setError('세션이 만료되었습니다. 다시 로그인하세요.')
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
        const { form, AuthActions} = this.props;
        const { username, password } = form.toJS();

            AuthActions.userLogin({username, password})
                .then((response)=>{
                    storage.set("token" ,response.data["token"])
                    storage.set("username" , response.data["username"])
                    storage.set('loggedInfo', response.data);
                    window.location.replace("/")
                })
                .catch ((e)=> {
                    this.setError('잘못된 계정정보입니다.');
        })
    }


    render() {
        const { username, password } = this.props.form.toJS(); // form 에서 username 과 password 값을 읽어옴
        const { handleChange, handleLocalLogin } = this;
        const { error } = this.props;
        const handleOnKeyPress = e => {
            if (e.key === 'Enter') {
                handleLocalLogin();
            }
        };
        return (
            <div  className="width-70per mar-auto-0 disp-flex height-100vh-110p">


                <div className="width-1140px mar-auto-0  bac-color-white">
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
                                            name="username"
                                            placeholder="username@email.com"
                                            value={username ||"" }
                                            onChange={handleChange}
                                            onKeyPress={handleOnKeyPress}
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
                                            onKeyPress={handleOnKeyPress}
                                        />
                                    </div>
                                    <div>
                                        <AuthButton
                                            onClick={handleLocalLogin}
                                            type='button' className="hover-btn">
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
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(Login);