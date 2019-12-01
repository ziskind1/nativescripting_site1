import * as React from 'react';
import { ContactPageForm } from './contact-page-form';

export const PHYSICAL_ADDRESS_ONE_LINE =
    '9466 Georgia Ave. #66, Silver Spring MD 20910, United States';
export const EMAIL_TRAINING_NUVIOUS = 'training@nuvious.com';
export const CONST_PHONE_NUMBER = '1-855-656-6884';

interface ContactComponentProps { }

export const ContactComponent: React.StatelessComponent<
    ContactComponentProps
> = (props: ContactComponentProps) => {
    const mailtoLink = `mailto:${EMAIL_TRAINING_NUVIOUS}?cc=alex@nuvious.com&subject=NativeScript%20Training%20Email`;
    const telLink = `tel:${CONST_PHONE_NUMBER}`;

    return (
        <div className="contact-page">
            <div className="container">
                <div className="contact-form-wrapper">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="theme-form-style-one">
                                <h3>Let's get your team trained!</h3>
                                <ContactPageForm />
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="contact-address">
                                <ul className="address">
                                    <li>
                                        <i className="flaticon-map-bold" />{' '}
                                        {PHYSICAL_ADDRESS_ONE_LINE}
                                    </li>
                                    <li>
                                        <i className="flaticon-email" />{' '}
                                        <a href={mailtoLink}>{EMAIL_TRAINING_NUVIOUS}</a>
                                    </li>
                                    <li>
                                        <i className="flaticon-call" />
                                        <a href={telLink}>+{CONST_PHONE_NUMBER}</a>
                                    </li>
                                    <li>
                                        <i className="fa fa-calendar" />
                                        <a href="https://calendly.com/nuvious" target="_blank">
                                            Schedule a quick call
                    </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-validation-markup">
                <div className="alert-wrapper" id="alert-success">
                    <div id="success">
                        <button className="closeAlert">
                            <i className="fa fa-times" aria-hidden="true" />
                        </button>
                        <div className="wrapper">
                            <p>Your message was sent successfully.</p>
                        </div>
                    </div>
                </div>
                <div className="alert-wrapper" id="alert-error">
                    <div id="error">
                        <button className="closeAlert">
                            <i className="fa fa-times" aria-hidden="true" />
                        </button>
                        <div className="wrapper">
                            <p>Sorry!Something Went Wrong.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
