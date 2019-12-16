import * as React from 'react';
import { Helmet } from 'react-helmet';

import { MainLayout } from '../layouts/MainLayout';
import { Seo } from '../components/shared/Seo/Seo';
import { ContentPageWrapper } from '../layouts/page-layouts/content-page';
import { Wrapper } from '../layouts/page-layouts/wrapper';
import { PageHeadingMain } from '../components/shared/PageHeaders';
import { PageSection } from '../layouts/page-layouts/page-section';

import { GridRow } from '../layouts/grid2/grid-row';
import { GridColumn } from '../layouts/grid2/grid-column';
import { ContactComponent } from '../components/contact/contact.component';


interface ProWebinarPageProps { }

export default class extends React.Component<ProWebinarPageProps, any> {
    constructor(props: ProWebinarPageProps) {
        super(props);
    }

    public componentDidMount() {
        this.mountWebinarScript();
      }
    
      private mountWebinarScript() {
        const script = document.createElement("script");
        script.src = `//events.genndi.com/register.evergreen.extra.js`;
        script.async = true;
        document.body.appendChild(script);
      }

    public render() {
        const pageTitle = `NativeScript Pro Webinar | NativeScript Courses`;

        return (
            <MainLayout>
                <Seo path="/pro-webinar" />
                <Helmet>
                    <title>{pageTitle}</title>
                </Helmet>

                <ContentPageWrapper>
                    <PageSection>
                        <Wrapper>
                            <PageHeadingMain center>Join Us</PageHeadingMain>
                            
                            <link href="//events.genndi.com/assets/css/register_button.css" rel="stylesheet"/>
                            <div style={{ margin: 'auto', width: '300px' }}>
                                <div className="embedded-joinwebinar-button">
                                    <button type="button" className="btn btn-default css3button" title="regpopbox_819005285141055972_623cfc39cd">
                                        <span>Register now</span>
                                    </button>
                                </div>
                            </div>
                            <img src="//events.genndi.com/tracker?action=registration-evergreen&webicode=623cfc39cd&version=&memberid=819005285141055972" style={{visibility:'hidden', height:'0px', width:'0px', border:'none'}}></img>


                        </Wrapper>
                    </PageSection>
                </ContentPageWrapper>

            </MainLayout>
        );
    }
}
