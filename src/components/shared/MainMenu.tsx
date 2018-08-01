import * as React from 'react';
import Link from 'gatsby-link';

export function getMenu(className: string) {
  return (
    <div className={className}>
      {/*<Link to={'/training'}>Training</Link>*/}
      <Link to="/posts">Posts</Link>
      <Link to={'/about'}>Authors</Link>
      <a
        href={
          'https://sso.teachable.com/secure/89912/users/sign_in?reset_purchase_session=1'
        }
        className="sign"
      >
        Login
      </a>
    </div>
  );
}

export function MainMenuMobile() {
  return getMenu('mobile-header');
}

export function MainMenu() {
  return getMenu('header-page');
}
