import * as React from 'react';
import styled from 'styled-components';

import { handleFormSubmit } from '../../utils/form-utils';
import { colors } from '../../global/colors';


interface ContactPageFormProps { }

interface ContactPageFormState {
    submitted: boolean;
    [key: string]: any;
}

const SingleInputWrapper = styled.div`
        
`;

const ILabel = styled.label`
    padding-top: 0;
`;

const ISpan = styled.span`
    position: relative;
    display: block;
    width: 100%;
    margin-top: 5px;
`;

const IInput = styled.input`
    margin: 0;
    vertical-align: baseline;
    width: 100%;

    appearance: none;
    border-radius: 5px;
    box-shadow: inset 0 2px 0 rgba(84,94,111,.2);
    font-family: geomanist,system;
    font-weight: 400;
    font-size: 1.6rem;
    color: rgba(84,94,111,.8);
    padding: 9px 14px 5px;
    background: rgba(84,94,111,.04);
    border: none;
    outline: none;
    line-height: 28px;
`;

const ITextarea = styled.textarea`
    margin: 0;
    vertical-align: baseline;
    width: 100%;

    appearance: none;
    border-radius: 5px;
    box-shadow: inset 0 2px 0 rgba(84,94,111,.2);
    font-family: geomanist,system;
    font-weight: 400;
    font-size: 1.6rem;
    color: rgba(84,94,111,.8);
    padding: 9px 14px 5px;
    background: rgba(84,94,111,.04);
    border: none;
    outline: none;
    line-height: 28px;
`;

const IInvisible = styled.input`
    visibility: hidden;
`;

const ISubmit = styled.input`
    position: relative;
    height: 56px;
    cursor: pointer;
    text-align: center;
    overflow: hidden;
    background-color: ${colors.actionGreen1};

    font-family: MonoRegular;
    font-size: 16px;
    font-weight: 700;
    color: rgb(25, 57, 109);
    text-transform: uppercase;
    line-height: 56px;
    text-decoration: none;
    border: none;
    width: 100%;
`;

export class ContactPageForm extends React.Component<
    ContactPageFormProps,
    ContactPageFormState
    > {
    constructor(props: ContactPageFormProps) {
        super(props);

        this.state = {
            submitted: false,
            name: '',
            email: '',
            message: '',
        };
    }

    public handleChange(e: any) {
        this.setState({ [e.target.name]: e.target.value });
    }

    public handleSubmit(event: React.FormEvent<EventTarget>) {
        handleFormSubmit(event, this.state).then(() => {
            this.setState({ submitted: true });
        });
    }

    public render() {



        return (
            <div>
                {this.state.submitted && (
                    <div>Thank you. We will get back to you shortly.</div>
                )}

                {!this.state.submitted && (
                    <form
                        name="contact-page-form"
                        method="post"
                        onSubmit={e => this.handleSubmit(e)}
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                    >
                        <input type="hidden" name="form-name" value="contact-page-form" />

                        <SingleInputWrapper>
                            <ILabel>Name *
                                <ISpan>
                                    <IInput type="text"
                                        key="name"
                                        placeholder="Type your name here"
                                        name="name"
                                        required
                                        onChange={e => this.handleChange(e)}
                                        value={this.state['name']}
                                    />
                                </ISpan>
                            </ILabel>
                        </SingleInputWrapper>

                        <SingleInputWrapper>
                            <ILabel>Email *
                            <ISpan>
                                    <IInput
                                        type="email"
                                        placeholder="How to contact you back"
                                        name="email"
                                        required
                                        onChange={e => this.handleChange(e)}
                                        value={this.state['email']}
                                    />
                                </ISpan>
                            </ILabel>
                        </SingleInputWrapper>

                        <SingleInputWrapper>
                            <ILabel>* Message
                            <ISpan>
                                    <ITextarea
                                        placeholder="Type something"
                                        name="message"
                                        required
                                        onChange={e => this.handleChange(e)}
                                        value={this.state['message']}
                                    />
                                </ISpan>
                            </ILabel>
                        </SingleInputWrapper>

                        <div data-netlify-recaptcha />

                        <IInvisible
                            name="bot-field"
                            onChange={e => this.handleChange(e)}
                        />

                        <ISubmit
                            type="submit"
                            value="Send"
                        />
                    </form>
                )}
            </div>
        );
    }
}
