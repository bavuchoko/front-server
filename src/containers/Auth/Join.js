import React, {Component} from 'react';
import {AuthError, InputWithLabel} from '../../components/Auth';
import {connect} from 'react-redux';
import cat from '../../assets/image/door-cat.png';
import {bindActionCreators} from 'redux';
import * as authActions from '../../redux/modules/auth';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPowerOff} from "@fortawesome/free-solid-svg-icons";
import storage from "../../lib/storage";
import {Link} from "react-router-dom";
import moment from "moment";
import {isAlphanumeric, isEmail, isLength} from "validator";

class Join extends Component {

    componentWillUnmount() {
        console.log("componentWillUnmount");
        const { AuthActions } = this.props;
        AuthActions.initializeForm('register')
    }
    handleChange = (e) => {
        console.log("handleChange");
        const { AuthActions } = this.props;
        const { name, value } = e.target;

        AuthActions.changeInput({
            name,
            value,
            form: 'register'
        });

        const validation = this.validate[name](value);
        if(name.indexOf('password') > -1 || !validation) return; // 비밀번호 검증이거나, 검증 실패하면 여기서 마침
    }


    setError = (message) => {
        const { AuthActions } = this.props;
        AuthActions.setError({
            form: 'register',
            message
        });
        return false;
    }

    validate = {
        username: (value) => {
            if(!isEmail(value)) {
                this.setError('잘못된 이메일 형식 입니다.');
                console.log(isEmail(value))
                return false;
            }

            if(!isLength(value, { min:4, max: 25 })) {
                this.setError('아이디는 4~25 글자의 알파벳 혹은 숫자로 이뤄져야 합니다.');
                return false;
            }
            return true;
        },
        nickname: (value) => {
            if(!isLength(value, { min: 2 })) {
                this.setError('별명을 2글자 이상 입력하세요');
                return false;
            }
            this.setError(null); // 이메일과 아이디는 에러 null 처리를 중복확인 부분에서 하게 됩니다
            return true;
        },
        password: (value) => {
            if(!isLength(value, { min: 6 })) {
                this.setError('비밀번호를 6자 이상 입력하세요.');
                return false;
            }
            this.setError(null); // 이메일과 아이디는 에러 null 처리를 중복확인 부분에서 하게 됩니다
            return true;
        },
        passwordConfirm: (value) => {
            if(this.props.form.get('password') !== value) {
                this.setError('비밀번호확인이 일치하지 않습니다.');
                return false;
            }
            this.setError(null);
            return true;
        }
    }

    handleJoin = async () => {
        const { form, AuthActions, UserActions, error, history } = this.props;
        const { username, nickname, password, passwordConfirm } = form.toJS();
        const { validate } = this;
        if(error) return;
        console.log(validate['username'](username))
        if(!validate['username'](username)
            || !validate['nickname'](nickname)
            || !validate['password'](password)
            || !validate['passwordConfirm'](passwordConfirm)) {
            // 하나라도 실패하면 진행하지 않음
            return;
        }
        const user = {
            username : username,
            nickname : nickname,
            password : password,
            joinDate :moment().format("YYYY-MM-DDTHH:mm:sszz")
        }
        AuthActions.userRegister(user)
            .then((response)=>{
                console.log(response)
                storage.set("token" ,response.data["token"])
                storage.set("username" , response.data["username"])
                storage.set('loggedInfo', response.data);
                alert("가입에 성공했습니다.")
                window.location.replace("/")
            })
            .catch ((e)=> {
                if(e.response.status === 409) {
                    const message = '이미 존재하는 아이디입니다.';
                    return this.setError(message);
                }
                this.setError('알 수 없는 에러가 발생했습니다.')
            })
    }


    render() {
        const { username, nickname, password, passwordConfirm } = this.props.form.toJS();
        const { handleChange, handleJoin } = this;
        const { error } = this.props;
        const handleOnKeyPress = e => {
            if (e.key === 'Enter') {
                handleJoin();
            }
        };
        return (
            <div  className="width-70per mar-auto-0 disp-flex height-100vh-110p">


                <div className="width-1140px mar-auto-0  bac-color-white">
                    <div className="padding-rl-80p-t-9p">
                        <div className="auth-menu">
                            <Link to="/auth/login"><h2 className="login-h2 h2-head ">로그인</h2></Link>
                            <Link to="/auth/join"><h2 className="login-h2 h2-head underline2">회원가입</h2></Link>
                        </div>
                        <div className="disp-flex login-from pad-t85p ">
                            <div className="profile-div2">
                                <img  className="man" src={cat} />
                            </div>
                            <form className="form-tag">
                                <div className="width-100per pad-t10p">
                                    <div>
                                        <InputWithLabel
                                            className="login-frm-btn"
                                            name="username"
                                            placeholder="이메일"
                                            value={username ||"" }
                                            onChange={handleChange}
                                            onKeyPress={handleOnKeyPress}
                                        />

                                        <InputWithLabel
                                            className="login-frm-btn"
                                            name="nickname"
                                            placeholder="별명"
                                            value={nickname}
                                            onChange={handleChange}
                                            onKeyPress={handleOnKeyPress}
                                        />
                                        <InputWithLabel
                                            className="login-frm-btn"
                                            name="password"
                                            placeholder="비밀번호"
                                            type="password"
                                            onChange={handleChange}
                                            onKeyPress={handleOnKeyPress}
                                        />
                                        <InputWithLabel
                                            className="login-frm-btn"
                                            name="passwordConfirm"
                                            placeholder="비밀번호 확인"
                                            type="password"
                                            value={passwordConfirm}
                                            onChange={handleChange}
                                        />
                                        <div
                                            onClick={handleJoin}
                                            type='button' className="hover-btn join-btn">
                                            <FontAwesomeIcon icon={faPowerOff} />가입하기</div>
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
        form: state.auth.getIn(['register', 'form']),
        error: state.auth.getIn(['register', 'error']),
        exists: state.auth.getIn(['register', 'exists']),
        result: state.auth.get('result')
    }),
    (dispatch) => ({
        AuthActions: bindActionCreators(authActions, dispatch)
    })
)(Join);