import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow } from '../../lib/styleUtils';

const Wrapper = styled.div`
  border-radius: 3px;
  margin: 0;
  padding: 0;
  width: 302px;
  height: 52px;
  border: 1px  solid  #FEB139;
  background-color: #293462;
  color: #FEB139;
  text-align: center;
  line-height: 51px;
  font-size: 13px;
    &:hover {
    }

    &:active {
      background-color: #1a5181;
    }

`;

const AuthButton = ({children, onClick}) => (
    <Wrapper onClick={onClick}>
        {children}
    </Wrapper>
);

export default AuthButton;