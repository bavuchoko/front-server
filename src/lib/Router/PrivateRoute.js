import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import isLogin from './isLogin';

const PrivateRoute = ({component: Component, ...rest}) => {
    console.log(isLogin())
    console.log(rest)
    return (
        <Route
            {...rest}
            render={(props) => {
                !isLogin() &&
                alert("접근 권한이 없습니다. 로그인 후 다시 시도하십시오.");
                return isLogin() ? <Component {...props} /> : <Redirect to="auth/login" />;
            }}
        />
    );
};

export default PrivateRoute;