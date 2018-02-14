import * as React from "react";

import './styles.css';

export type ActionBtnType = 'primary' | 'secondary';


export interface ActionButtonProps {
    text: string;
    url?: string;
    type?: ActionBtnType;
}

const ActionButton: React.StatelessComponent<ActionButtonProps> = (props: ActionButtonProps) => {

    const className = props.type === 'secondary' ? 'btn-action blue' : 'btn-action green';

    return (
        <div className={className}>
            <a href={props.url}>
                <span>{props.text}</span>
            </a>
        </div>
    );
};

export default ActionButton;
