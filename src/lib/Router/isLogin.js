import storage, {getCookie} from '../storage';

const isLogin = () => {
    return !!storage.get("loggedInfo");
};

export default isLogin;