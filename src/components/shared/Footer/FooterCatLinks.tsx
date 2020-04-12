import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors } from '../../../global/colors';

import { GridRow } from '../../../layouts/grid2/grid-row';
import { GridColumn } from '../../../layouts/grid2/grid-column';

interface FooterCatLinksProps {
  style?: React.CSSProperties;
}

const FooterCatHeader = styled.div`
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 40px;
  text-transform: uppercase;
  margin-top: 77px;
`;
const FooterLink = styled.a`
  display: block;
  padding: 7px 0;
  line-height: 16px;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  color: ${colors.titleBlue};
`;

export const FooterCatLinks: React.StatelessComponent<FooterCatLinksProps> = (
  props: FooterCatLinksProps
) => {
  // This combines the incoming style with the debug border
  const style = { ...(props.style ? props.style : {}) };

  return (
    <GridRow style={style}>
      <GridColumn xs={6} sm={3} md={3}>
        <FooterCatHeader>Solutions</FooterCatHeader>
        <div className="ftr-cat-links">
          <FooterLink href="/">Personal</FooterLink>
          <FooterLink href="https://nativescript.training">
            On-site Training
          </FooterLink>
          <FooterLink href="/teams">Teams</FooterLink>
          <FooterLink href="/enterprise">Enterprise</FooterLink>
          <FooterLink href="/schools">Schools</FooterLink>
        </div>
      </GridColumn>
      <GridColumn xs={6} sm={3} md={3}>
        <FooterCatHeader>Company</FooterCatHeader>
        <div className="ftr-cat-links">
          <FooterLink href="/about">About</FooterLink>
          <FooterLink href="/authors">Authors</FooterLink>
          <FooterLink href="/affiliates">Affiliate Program</FooterLink>
          <FooterLink href="/contact">Contact</FooterLink>
        </div>
      </GridColumn>

      <GridColumn xs={6} sm={3} md={3}>
        <FooterCatHeader>Resources</FooterCatHeader>
        <div className="ftr-cat-links">
          <FooterLink href="/posts">Articles</FooterLink>
          <FooterLink href="/faq">FAQ</FooterLink>

          <FooterLink href="https://sso.teachable.com/secure/89912/users/sign_in?reset_purchase_session=1">
            Login
          </FooterLink>
        </div>
      </GridColumn>

      <GridColumn xs={6} sm={3} md={3}>
        <FooterCatHeader>Legal</FooterCatHeader>
        <div className="ftr-cat-links">
          <FooterLink href="/licencing">Licencing Agreement</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
        </div>
      </GridColumn>
    </GridRow>
  );
};
