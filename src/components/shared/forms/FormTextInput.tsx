import * as React from 'react';
import styled from 'styled-components';

interface FormTextInputProps {
    label: string;
    name: string;
}

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

export const FormTextInput = (props: FormTextInputProps) => {

    return (
        <ILabel>
            {props.label}
            <ISpan>
                <IInput>

                </IInput>
            </ISpan>
        </ILabel>
    );
};
