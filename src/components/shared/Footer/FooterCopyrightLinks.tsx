import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors } from '../../../global/colors';

import { GridRow } from '../../../layouts/grid2/grid-row';
import { GridColumn } from '../../../layouts/grid2/grid-column';


interface FooterCopyrightLinksProps {
    style?: React.CSSProperties;
}

const FooterBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: ${colors.titleBlue};
    font-weight: 500;
    margin-top: 30px;
`;
const FooterLogoImg = styled.img`
width: 34px;
height: 34px;
margin-right: 20px;
`;


const FooterSocialList = styled.ul`
list-style: none;
padding: 0;
    margin: 0;
`;
const FooterSocialListItem = styled.li`
line-height: 28px;
margin-right: 5px;
display: inline-block;
transition: opacity .2s ease;
list-style: none;
`;
const FooterSocialLink = styled.a`
color: #fff!important;
    transition: color .2s ease;
    display: block;
    width: 24px;
    height: 24px;
`;

export const FooterCopyrightLinks = (props: FooterCopyrightLinksProps) => {

    // This combines the incoming style with the debug border
    const style = { ...(props.style ? props.style : {}) };

    const year = new Date().getFullYear();

    return (
        <GridRow style={style}>
            <GridColumn xs={12} md={6}>
                <FooterBottom>
                    <Link to="/">
                        <FooterLogoImg src="/img/logo_full_icon.svg" alt="NativeScripting" />
                    </Link>
                    <span>Copyright © {year} - NativeScripting. All rights reserved</span>
                </FooterBottom>
            </GridColumn>
            <GridColumn xs={12} md={6}>
                <FooterBottom>
                    <FooterSocialList>

                        <FooterSocialListItem>
                            <FooterSocialLink target="_blank" rel="noopener" href="https://twitter.com/nativescripting">
                                <img src="/img/social/twitter-34px.svg" alt="Twitter" />
                            </FooterSocialLink>
                        </FooterSocialListItem>
                        <FooterSocialListItem>
                            <FooterSocialLink target="_blank" rel="noopener" href="https://fb.me/nativescripting">
                                <img src="/img/social/facebook-34px.svg" alt="Facebook" />
                            </FooterSocialLink>
                        </FooterSocialListItem>
                        <FooterSocialListItem>
                            <FooterSocialLink target="_blank" rel="noopener" href="https://github.com/nativescripting">
                                <img src="/img/social/github-34px.svg" alt="GitHub" />
                            </FooterSocialLink>
                        </FooterSocialListItem>
                        <FooterSocialListItem>
                            <FooterSocialLink target="_blank" rel="noopener" href="https://www.youtube.com/c/alexanderziskind">
                                <img src="/img/social/youtube-34px.svg" alt="YouTube" />
                            </FooterSocialLink>
                        </FooterSocialListItem>
                    </FooterSocialList>
                </FooterBottom>
            </GridColumn>

        </GridRow>
    );
};
