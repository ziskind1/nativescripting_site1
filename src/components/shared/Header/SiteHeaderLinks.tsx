import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-right: 50px;

  a {
    color: white;
  }

  @media screen and (max-width: 600px) {
    height: 40px;
  }
`;

const LinkWrapper = styled.div`
  margin-left: 20px;
`;

interface SiteHeaderLinksProps {}

function SiteHeaderLinks(props: SiteHeaderLinksProps) {
  return (
    <Container>
      <LinkWrapper>
        <Link to="/posts">Articles</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to="/authors">Authors</Link>
      </LinkWrapper>
      <LinkWrapper>
        <Link to="/about">About</Link>
      </LinkWrapper>
      <LinkWrapper>
        <a
          href={
            'https://sso.teachable.com/secure/89912/users/sign_in?reset_purchase_session=1'
          }
          className="sign"
        >
          Login
        </a>
      </LinkWrapper>
    </Container>
  );
}

export default SiteHeaderLinks;
