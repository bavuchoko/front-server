import axios from 'axios';

export const checkEmailExists = (email) => axios.get('/api/auth/exists/email/' + email);
export const checkUsernameExists = (username) => axios.get('/api/auth/exists/username/' + username);

export const userRegister = ({username, password}) => axios.post('/api/auth/register/local', {username, password });
export const userLogin = ({username, password}) => axios.post('/api/user/login', { username, password });

export const checkStatus = () =>{
    console.log("cccc")
    axios.get('/api/auth/check');
}
export const logout = () =>{ axios.post('/api/auth/logout');}