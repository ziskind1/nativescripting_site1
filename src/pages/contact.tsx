import * as React from 'react';
import { Helmet } from 'react-helmet';

import { ContactComponent } from '../components/contact/contact.component';


interface ContactPageProps { }

export default class extends React.Component<ContactPageProps, any> {
    constructor(props: ContactPageProps) {
        super(props);
    }

    public render() {
        const pageTitle = `Contact Us | NativeScript Training`;

        return (
            <div>
                <Helmet>
                    <title>{pageTitle}</title>
                </Helmet>

                <div>
                    <h2>Contact Us</h2>
                    <h3>Get in Touch. We'll get back to you within 24 hours.</h3>
                </div>


                <ContactComponent />
            </div>
        );
    }
}
