import axios from 'axios';
import storage, {getCookie} from '../../lib/storage';
import instance from "../Validator"

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
export const userLogin = (username) => {
    return instance({
        url:'api/user/authenticate',
        method: 'post',
        data:{
            username:username.username,
            password:username.password
        }
    })
};

const token = storage.get("token");
export const checkStatus = () =>{
    console.log("validation")
    axios.get('/api/user/validation',{
        headers:{
            Authorization:"Bearer " + token
        }
    }).then(
        res => {
            console.log(res.data)
            console.log(res.data["code"])
            storage.set("token" ,res.data["token"])
            storage.set("username" , res.data["username"])
            storage.set('loggedInfo', res.data);
        }
    );
}
export const logout = () =>{
    console.log("logout")
    axios.get('/api/user/logout');}