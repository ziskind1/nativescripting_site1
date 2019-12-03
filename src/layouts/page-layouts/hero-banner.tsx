import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../global/colors';

interface HeroBannerProps {
    children: React.ReactNode;
}

export const HeroBanner: React.StatelessComponent<
    HeroBannerProps
> = (props: HeroBannerProps) => {

    const Internal = styled.div`
        background-color: ${colors.darkBlue};
        color: #fff;
        text-align: center;
        padding: 30px;
    `;

    return (
        <Internal>
            {props.children}
        </Internal>
    );
};
