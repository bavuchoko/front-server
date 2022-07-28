import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';



const LoginButton = () => (
        <Link  className="nav-ul-li-p hover-btn " to="/auth/login">
            로그인 / 가입
        </Link>
);

export default LoginButton;