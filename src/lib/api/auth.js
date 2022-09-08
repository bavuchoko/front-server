import axios from 'axios';
import storage, {getCookie} from '../../lib/storage';
import instance from "../Validator"
import moment from "moment";

export const checkEmailExists = (email) => {
    console.log("checkEmailExists");
    axios.get('/api/auth/exists/email/' + email);
}
export const checkUsernameExists = (username) => {
    console.log("checkUsernameExists");
    axios.get(process.env.REACT_APP_SERVICE_URL + '/api/auth/exists/username/' + username);
}
export const userRegister = (user) => {
    return instance({
        url:'api/user/join',
        method: 'post',
        data:user
    })
};
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