import * as React from 'react';

import styled from 'styled-components';
import { colors } from '../../../global/colors';
import { Wrapper } from '../../../layouts/page-layouts/wrapper';

import { FooterCatLinks } from './FooterCatLinks';
import { FooterCopyrightLinks } from './FooterCopyrightLinks';


interface Footer2Props {
    style?: React.CSSProperties;
}

const Footer = styled.footer`
    background-color: ${colors.darkerBlue};
    color: #fff;
    text-decoration: none;
    border-top: 1px solid ${colors.darkerBlue};;
    padding-bottom: 50px;
`;



export const Footer2: React.StatelessComponent<
    Footer2Props
> = (props: Footer2Props) => {


    // This combines the incoming style with the debug border
    const style = { ...(props.style ? props.style : {}) };



    return (
        <Footer style={style}>
            <Wrapper>

                <FooterCatLinks />
                <FooterCopyrightLinks />

            </Wrapper>
        </Footer >
    );
};
