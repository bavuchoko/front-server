import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';
import * as AuthAPI from '../../lib/api/auth';
import { Map } from 'immutable';

const CHANGE_INPUT = 'auth/CHANGE_INPUT'; // input 값 변경
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM'; // form 초기화
const CHECK_EMAIL_EXISTS = 'auth/CHECK_EMAIL_EXISTS'; // 이메일 중복 확인
const CHECK_USERNAME_EXISTS = 'auth/CHECK_USERNAME_EXISTS'; // 아이디 중복 확인
const USER_REGISTER = 'auth/LOCAL_REGISTER'; // 이메일 가입
const USER_LOGIN = 'api/auth/authenticate'; // 이메일 로그인
const SET_ERROR = 'auth/SET_ERROR'; // 오류 설정
export const changeInput = createAction(CHANGE_INPUT); //  { form, name, value }

export const initializeForm = createAction(INITIALIZE_FORM); // form
export const checkEmailExists = createAction(CHECK_EMAIL_EXISTS, AuthAPI.checkEmailExists); // email
export const checkUsernameExists = createAction(CHECK_USERNAME_EXISTS, AuthAPI.checkUsernameExists); // username
export const userRegister = createAction(USER_REGISTER, AuthAPI.userRegister); // { username, password }
export const userLogin = createAction(USER_LOGIN, AuthAPI.userLogin); // { username, password }
export const setError = createAction(SET_ERROR); // { form, message }

const initialState = Map({
    register: Map({
        form: Map({
            username: '',
            nickname: '',
            password: '',
            passwordConfirm: '',
            joinDate: ''
        }),
        exists: Map({
            username: false,
            password: false
        }),
        error: null
    }),
    login: Map({
        form: Map({
            username: '',
            password: ''
        }),
        error: null
    }),
    result: Map({})
});

export default handleActions({

    [CHANGE_INPUT]: (state, action) => {
        console.log("handleActions / CHANGE_INPUT");
        const { form, name, value } = action.payload;
        return state.setIn([form, 'form', name], value);

    },
   ...pender({
               type: CHECK_EMAIL_EXISTS,
               onSuccess: (state, action) => state.setIn(['register', 'exists', 'username'], action.payload.data.exists)
    }),

    ...pender({
        type: USER_LOGIN,
        onSuccess: (state, action) => state.set('result', Map(action.payload.data))
    }),
    ...pender({
        type: USER_REGISTER,
        onSuccess: (state, action) => state.set('result', Map(action.payload.data))
    }),
    [INITIALIZE_FORM]: (state, action) => {
        console.log("handleActions / INITIALIZE_FORM");
        const initialForm = initialState.get(action.payload);
        return state.set(action.payload, initialForm);
    },
    ...pender({
        type: CHECK_USERNAME_EXISTS,
        onSuccess: (state, action) => state.setIn(['register', 'exists', 'username'], action.payload.data.exists)
    }),
    [SET_ERROR]: (state, action) => {
        console.log("handleActions / SET_ERROR");
        const { form, message } = action.payload;
        return state.setIn([form, 'error'], message);
    }
}, initialState);