import * as React from "react";
import styled from 'styled-components';
import { OffScreen } from "../OffScreen";

import './SignUpSection.css';


var ga: any;

const SubscriberSection = styled.div`
    float: none !important;
    margin-top: 160px !important;
`;

function submitSubscribeForm() {
    //ga('send', 'event', 'Outbound Link', 'click', 'Notify Me');
    const form = document.getElementById("mc-embedded-subscribe-form") as HTMLFormElement;
    form.submit();
}


const hideStyle = {
    display: 'none'
};



class SignUpSection extends React.Component<any, { myInputVal: string }> {

    constructor(props: any) {
        super(props);
        this.state = { myInputVal: '' };
    }

    public inputChanged(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ myInputVal: e.currentTarget.value });
    }

    public render() {
        return (
            <SubscriberSection className="special subscribe-container">
                <div className="logo-wrapper">
                    <img alt="logo" className="logo" src="/img/logo_2.svg" />
                </div>

                <div id="mc_embed_signup">
                    <form action="//nativescripting.us15.list-manage.com/subscribe/post?u=214fb7067ed1686330f8a4c07&amp;id=a0c12bbc78" method="post"
                        id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                        <div id="mc_embed_signup_scroll">
                            <h2 className="text-header">Stay in the know</h2>
                            <h3>Get updated with course releases and discount coupons</h3>

                            <div className="input-wrapper">
                                <div className="mc-field-group">
                                    <label htmlFor="mce-EMAIL"></label>
                                    <input type="email" name="EMAIL" className="required email subscribe-email" placeholder="your email" id="mce-EMAIL" onChange={(e) => this.inputChanged(e)}
                                    />
                                </div>

                                <div id="mce-responses" className="clear">
                                    <div className={`response`} id="mce-error-response" style={hideStyle}></div>
                                    <div className={`response`} id="mce-success-response" style={hideStyle}></div>
                                </div>

                                <OffScreen aria-hidden="true">
                                    <input type="text" name="b_214fb7067ed1686330f8a4c07_a0c12bbc78" tabIndex={-1} />
                                </OffScreen>

                                <div className="clear subscribe-btn-wrapper">
                                    <a className="button subscribe-btn" onClick={() => submitSubscribeForm()}>
                                        <span>Notify Me</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </SubscriberSection>
        );
    }
}

export default SignUpSection;
