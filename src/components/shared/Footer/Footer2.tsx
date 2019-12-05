import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors } from '../../../global/colors';
import { GridContainer } from '../../../layouts/grid/grid-container';
import { GridRow } from '../../../layouts/grid/grid-row';
import { GridColumn } from '../../../layouts/grid/grid-column';
import { Wrapper } from '../../../layouts/page-layouts/wrapper';
import { ContactComponent } from '../../contact/contact.component';


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
`;

export const Footer2: React.StatelessComponent<
    Footer2Props
> = (props: Footer2Props) => {


    // This combines the incoming style with the debug border
    const style = { ...(props.style ? props.style : {}) };

    const year = new Date().getFullYear();

    return (


        <Footer style={style}>
            <Wrapper>

                <GridContainer>
                    <GridRow>
                        <GridColumn>

                            <GridContainer>
                                <GridRow>
                                    <GridColumn>
                                        <div style={{ marginTop: '50px' }}></div>
                                    </GridColumn>
                                </GridRow>
                            </GridContainer>

                        </GridColumn>
                    </GridRow>

                    <GridRow>
                        <GridColumn>

                            <GridContainer style={{ borderTop: '1px solid fusia' }}>
                                <GridRow>
                                    <GridColumn>
                                        <FooterBottom>
                                            <a href="/">
                                                <FooterLogoImg src="/img/logo_full_icon.svg" alt="NativeScripting" />
                                            </a>
                                            <span className="ftr-copyright">Copyright © {year} - NativeScripting. All rights reserved</span>
                                        </FooterBottom>
                                    </GridColumn>
                                    <GridColumn>
                                        <FooterBottom>
                                            <Terms><Link to="/licencing">Licencing Agreement</Link></Terms>

                                            <Terms><Link to="/privacy">Privacy Policy</Link></Terms>
                                        </FooterBottom>
                                    </GridColumn>

                                </GridRow>
                            </GridContainer>

                        </GridColumn>
                    </GridRow>
                </GridContainer>

            </Wrapper>
        </Footer >
    );
};
