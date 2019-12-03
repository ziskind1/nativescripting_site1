import * as React from 'react';
import styled from 'styled-components';

interface WrapperProps {
    children: React.ReactNode;
}

export const Wrapper: React.StatelessComponent<
    WrapperProps
> = (props: WrapperProps) => {

    const WrapperInternal = styled.div`
        max-width: 1140px;
        margin: auto;
        padding: 0 10px;
        position: relative;
    `;

    return (
        <WrapperInternal>
            {props.children}
        </WrapperInternal>
    );
};
