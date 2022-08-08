import React from 'react';
import styled from 'styled-components';

// 화면의 중앙에 위치시킨다
const Positioner = styled.div`

`;

const AuthWrapper = ({children}) => (
    <Positioner>
                {children}
    </Positioner>
);

export default AuthWrapper;