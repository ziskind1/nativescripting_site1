import * as React from 'react';
import styled from 'styled-components';

interface WrapperProps {
    children: React.ReactNode;
}

const WrapperInternal = styled.div`
max-width: 1140px;
margin: auto;
padding: 0 10px;
position: relative;
`;


export const Wrapper = (props: WrapperProps) => {


    return (
        <WrapperInternal>
            {props.children}
        </WrapperInternal>
    );
};
