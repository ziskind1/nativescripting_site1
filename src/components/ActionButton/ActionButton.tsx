import * as React from "react";

import './ActionButton.css';

export type ActionBtnType = 'primary' | 'secondary' | 'tertiary';


export interface ActionButtonProps {
    text: string;
    url?: string;
    type?: ActionBtnType;
    newWindow?: boolean;
}

function getBtnClassName(type: ActionBtnType) {
    switch (type) {
        case 'primary':
            return 'btn-action green';
        case 'secondary':
            return 'btn-action blue'
        case 'tertiary':
            return 'btn-action orange'
        default:
            return 'btn-action green';
    }
}

const ActionButton: React.StatelessComponent<ActionButtonProps> = (props: ActionButtonProps) => {
    const className = getBtnClassName(props.type);

    const anchorTarget = props.newWindow ? '_blank' : null;

    return (
        <div className={className}>
            <a href={props.url} target={anchorTarget}>
                <span>{props.text}</span>
            </a>
        </div>
    );
};

export default ActionButton;
