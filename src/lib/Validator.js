import axios from 'axios'
import storage from "./storage";

// axios 인스턴스를 생성합니다.
const instance = axios.create({
    baseURL: 'http://125.138.127:8080',
    timeout: 1000
});
instance.interceptors.request.use(
    function (config) {
        console.log(storage.get("loggedInfo"))
        if((storage.get("loggedInfo"))){
            config.headers["Content-Type"] = "application/json; charset=utf-8";
            config.headers["Authorization"] = "Bearer " + storage.get("token");
        }
        return config;
    },
    function (error) {
        // 요청 에러 직전 호출됩니다.
        return Promise.reject(error);
    }
);



instance.interceptors.response.use(
    function (response) {
        /*
            http status가 200인 경우
            응답 성공 직전 호출됩니다.
            .then() 으로 이어집니다.
        */
        return response;
    },

    function (error) {
        /*
            http status가 200이 아닌 경우
            응답 에러 직전 호출됩니다.
            .catch() 으로 이어집니다.
        */
        return Promise.reject(error);
    }
);
export default instance;