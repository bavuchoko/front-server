import axios from 'axios'
import storage from "./storage";

// axios.defaults.baseURL = 'https://pjs.or.kr:8080';
axios.defaults.baseURL = 'http://localhost:8080';
// axios 인스턴스를 생성합니다.
const instance = axios.create({
    // baseURL: 'https://pjs.or.kr:8080',
    baseURL: 'http://localhost:8080',
    timeout: 1000
});

//요청 인터셉터
instance.interceptors.request.use(
    function (config) {
        if((storage.get("loggedInfo"))){
            config.headers["Content-Type"] = "application/json; charset=utf-8";
            config.headers["Authorization"] = "Bearer " +storage.get("token");
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);



let isTokenRefreshing = false;
let refreshSubscribers = [];


const onTokenRefreshed = (accessToken) => {
    refreshSubscribers.map((callback) => callback(accessToken));
    refreshSubscribers = [];
};

const addRefreshSubscriber = (callback) => {
    refreshSubscribers.push(callback);
};


//응답 인터셉터
instance.interceptors.response.use(
    (response) => {

        return response;
    },
    async (error) => {
        const {
            config,
            response: { status },
        } = error;
        const originalRequest = config;
        if (status === 401) {
            if (!isTokenRefreshing) {
                // token refresh 요청
                const response = await axios.get(
                    '/api/user/refreshtoken', // token refresh api
                );
                // 기존 스토리지 비우고 새로운 토큰 저장
                storage.remove("token");
                storage.remove("username");
                storage.remove("loggedInfo");
                storage.set("token", response.data["token"])
                storage.set("username", response.data["username"])
                storage.set('loggedInfo', response.data);
                console.log(response.data)
                // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
                isTokenRefreshing = false;
                onTokenRefreshed(response.data["token"]);
            }
            // token이 재발급 되는 동안의 요청은 refreshSubscribers에 저장
            const retryOriginalRequest = new Promise((resolve) => {
                addRefreshSubscriber((accessToken) => {
                    originalRequest.headers.Authorization = "Bearer " + accessToken;
                    resolve(axios(originalRequest));
                });
            });
            return retryOriginalRequest;
        }
        return Promise.reject(error);
    }
);








export default instance;