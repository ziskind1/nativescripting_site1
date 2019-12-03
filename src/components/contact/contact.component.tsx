import * as React from 'react';
import styled from 'styled-components';

import { ContactPageForm } from './contact-page-form';
import { GridContainer } from '../../layouts/grid/grid-container';
import { GridRow } from '../../layouts/grid/grid-row';
import { GridColumn } from '../../layouts/grid/grid-column';
import { colors } from '../../global/colors';


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


    const FormWrapper = styled.div`
        background-color: ${colors.darkerBlue};
    `;

    return (
        <GridContainer>
            <GridRow>
                <GridColumn>
                    <h3>Let's get your team trained!</h3>
                </GridColumn>
            </GridRow>

            <GridRow>
                <GridColumn>
                    <GridContainer>

                        <GridRow>
                            <GridColumn>
                                <FormWrapper>
                                    <ContactPageForm />
                                </FormWrapper>

                            </GridColumn>
                        </GridRow>
                    </GridContainer>
                </GridColumn>

                <GridColumn>
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
                </GridColumn>

            </GridRow>

        </GridContainer>

    );
};
