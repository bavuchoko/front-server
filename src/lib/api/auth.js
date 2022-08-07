import axios from 'axios';
import storage, {getCookie} from '../../lib/storage';

export const checkEmailExists = (email) => {
    console.log("checkEmailExists");
    axios.get('/api/auth/exists/email/' + email);
}
export const checkUsernameExists = (username) => {
    console.log("checkUsernameExists");
    axios.get(process.env.REACT_APP_SERVICE_URL + '/api/auth/exists/username/' + username);
}
export const userRegister = ({username, password}) => {
    console.log("userRegister");
    axios.post('/api/user/join', {username, password });
}
export const userLogin = ({username, password}) => {
    console.log("userLogin");
    axios.post('http://125.138.127.28:8080/api/user/authenticate', { username, password })

        .then(
            res => {
                console.log(res.data)
                console.log(res.data["code"])
                storage.set("token" ,res.data["token"])
                storage.set("username" , res.data["username"])
                storage.set('loggedInfo', res.data);
                window.location.replace("/")
            }
        );

};

export const checkStatus = () =>{
    console.log("checkStatus");
    axios.get('/api/auth/check');
}
export const logout = () =>{
    console.log("logout")
    axios.get('/api/user/logout');}