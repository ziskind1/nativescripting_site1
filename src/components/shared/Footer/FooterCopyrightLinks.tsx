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
    color: #aaa;
    font-weight: 500;
`;
const FooterLogoImg = styled.img`
width: 34px;
height: 34px;
margin-right: 20px;
`;
const Terms = styled.span`
min-width: 150px;
text-align: center;
height: 34px;
line-height: 34px;
`;

export const FooterCopyrightLinks: React.StatelessComponent<
    FooterCopyrightLinksProps
> = (props: FooterCopyrightLinksProps) => {

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
                    <span className="ftr-copyright">Copyright © {year} - NativeScripting. All rights reserved</span>
                </FooterBottom>
            </GridColumn>
            <GridColumn xs={12} md={6}>
                <FooterBottom>
                    <Terms><Link to="/licencing">Licencing Agreement</Link></Terms>

                    <Terms><Link to="/privacy">Privacy Policy</Link></Terms>
                </FooterBottom>
            </GridColumn>

        </GridRow>
    );
};
