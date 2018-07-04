import * as React from "react";

import './PostCallToAction.css';

export type ActionBtnType = 'primary' | 'secondary' | 'tertiary';


export interface ActionButtonProps {

}

function getBtnClassName(type: ActionBtnType, clear: boolean) {
    const classClear = clear ? 'clear' : '';

    switch (type) {
        case 'primary':
            return `btn-action green ${classClear}`;
        case 'secondary':
            return `btn-action blue ${classClear}`
        case 'tertiary':
            return `btn-action orange ${classClear}`
        default:
            return `btn-action green ${classClear}`;
    }
}

const PostCallToAction: React.StatelessComponent<ActionButtonProps> = (props: ActionButtonProps) => {
    const className = getBtnClassName('secondary', false);

    const signUpUrl = 'https://sso.teachable.com/secure/89912/users/sign_up?after_success_url=%2Fsecure%2F89912%2Fcheckout%2F306840%2Fnativescript-core-getting-started-guide';

    return (

        <div className="post-cta-wrapper">
            <div>
                <h2>Learn something new. Take control of your career.</h2>
            </div>
            <div className="post-cta-btn-container">
                <div className={className}>
                    <a href={signUpUrl}>
                        <span>Sign Up</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PostCallToAction;
