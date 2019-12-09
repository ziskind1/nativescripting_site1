import * as React from 'react';
import { Link } from '@reach/router';

import styled from 'styled-components';

interface HeaderMenuMobileProps { }
interface HeaderMenuMobileState {
    isOpen: boolean;
}

export class HeaderMenuMobile extends React.Component<
    HeaderMenuMobileProps,
    HeaderMenuMobileState
    > {

    constructor(props: HeaderMenuMobileProps) {
        super(props);

        this.state = {
            isOpen: false
        };
    }

    public onNavBtnClick() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    public render() {

        const btnInnerDivClassName = this.state.isOpen ? 'css-yn08z9' : 'css-1sr19yy';
        const btnAriaLabel = this.state.isOpen ? 'close menu' : 'open menu';

        return (
            <div className="mobile-nav">
                <button className="css-fiyo81" onClick={() => this.onNavBtnClick()} aria-label={btnAriaLabel}>
                    <div className={btnInnerDivClassName}></div>
                </button>

                {(this.state.isOpen) ?
                    (<div className="css-182auyu">
                        <div className="css-15v91y0">
                            <a
                                href={
                                    'https://sso.teachable.com/secure/89912/users/sign_in?reset_purchase_session=1'
                                }
                                className="sign"
                            >
                                Login
                            </a>



                            <Link to="/posts">Articles</Link>
                            <Link to="/authors">Authors</Link>
                            <Link to="/faq">FAQ</Link>

                            <a href='https://nativescript.training'>Live training</a>

                        </div>
                    </div>) : null
                }
            </div>
        );
    }
}
