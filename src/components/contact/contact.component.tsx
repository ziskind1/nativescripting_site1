import * as React from 'react';
import styled from 'styled-components';

import { ContactPageForm } from './contact-page-form';
import { colors } from '../../global/colors';
import { PageHeading2 } from '../shared/PageHeaders';
import { GridColumn } from '../../layouts/grid2/grid-column';
import { GridRow } from '../../layouts/grid2/grid-row';


export const PHYSICAL_ADDRESS_ONE_LINE =
    '9466 Georgia Ave. #66, Silver Spring MD 20910, United States';
export const EMAIL_TRAINING_NUVIOUS = 'info@nuvious.com';


const mailtoLink = `mailto:${EMAIL_TRAINING_NUVIOUS}?cc=alex@nuvious.com&subject=NativeScripting%20Contact%20Email`;



const FormWrapper = styled.div`
    background-color: ${colors.darkerBlue};
    padding: 30px;
`;

const ContactInfoList = styled.div`
    margin-bottom: 30px;
`;

interface ContactComponentProps { }

export const ContactComponent: React.StatelessComponent<
    ContactComponentProps
> = (props: ContactComponentProps) => {


    return (
        <>
            <GridRow>
                <GridColumn xs={12} style={{ marginBottom: '30px' }}>
                    <PageHeading2>Get in touch</PageHeading2>
                    <p>We'll get back to you shortly.</p>
                </GridColumn>
            </GridRow>

            <GridRow>
                <GridColumn xs={12} sm={6} md={6}>
                    <FormWrapper>
                        <ContactPageForm />
                    </FormWrapper>
                </GridColumn>

                <GridColumn xs={12} sm={6} md={6} style={{ padding: '30px' }}>

                    <h4>Address</h4>

                    <ContactInfoList>
                        <ul className="address">
                            <li>NativeScripting</li>
                            <li>
                                9466 Georgia Ave. #66
                            </li>
                            <li>
                                Silver Spring, MD 20910
                            </li>
                            <li>
                                United States
                            </li>
                        </ul>
                    </ContactInfoList>

                    <h4>Contact</h4>

                    <ContactInfoList>
                        <ul className="address">
                            <li>
                                <i className="flaticon-email" />{' '}
                                <a href={mailtoLink}>{EMAIL_TRAINING_NUVIOUS}</a>
                            </li>
                            <li>
                                <i className="fa fa-calendar" />
                                <a href="https://calendly.com/nuvious" target="_blank">
                                    Schedule a quick call
                                </a>
                            </li>
                        </ul>
                    </ContactInfoList>
                </GridColumn>

            </GridRow>


        </>
    );
};
