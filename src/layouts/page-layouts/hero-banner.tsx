import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../global/colors';

interface HeroBannerProps {
    children: React.ReactNode;
}


const Internal = styled.div`
background-color: ${colors.darkBlue};
color: #fff;
text-align: center;
padding: 30px;
`;

export const HeroBanner = (props: HeroBannerProps) => {


    return (
        <Internal>
            {props.children}
        </Internal>
    );
};
