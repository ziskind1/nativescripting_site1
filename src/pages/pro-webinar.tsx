import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { MainLayout } from '../layouts/MainLayout';
import { Seo } from '../components/shared/Seo/Seo';
import { ContentPageWrapper } from '../layouts/page-layouts/content-page';
import { Wrapper } from '../layouts/page-layouts/wrapper';
import { PageHeadingMain, PageHeading2 } from '../components/shared/PageHeaders';
import { PageSection } from '../layouts/page-layouts/page-section';

import { GridRow } from '../layouts/grid2/grid-row';
import { GridColumn } from '../layouts/grid2/grid-column';
import { ContactComponent } from '../components/contact/contact.component';
import WebinarCountdownTimer from '../components/shared/WebinarCountdownTimer/WebinarCountdownTimer';

const CTAWrapper = styled.div`
    margin: auto;
    margin-top: 50px;
    text-align: center;
`;

const CTA = styled.button`
    background-color: #e43145;
    border: none;
    color: white;
    font-size: 26px;
    line-height: 130%;
    font-weight: 500;
    padding: 25px;
    width: 70%;
    white-space: normal;
    cursor: pointer;
    text-transform: uppercase;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);

    :hover {
        background-color: #bd2234;
    }
`;

interface ProWebinarPageProps { }
interface ProWebinarPageState { }

export default class extends React.Component<ProWebinarPageProps, ProWebinarPageState> {

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


                            <PageHeadingMain center>Online training begins in <WebinarCountdownTimer style={{ color: '#e43145' }} /></PageHeadingMain>


                            <CTAWrapper>
                                <CTA type="button" className="" title="regpopbox_819005285141055972_623cfc39cd">
                                    <span>Yes, I want to join the free training</span>
                                </CTA>
                            </CTAWrapper>

                            <img src="//events.genndi.com/tracker?action=registration-evergreen&webicode=623cfc39cd&version=&memberid=819005285141055972" style={{ visibility: 'hidden', height: '0px', width: '0px', border: 'none' }}></img>

                        </Wrapper>
                    </PageSection>
                </ContentPageWrapper>

            </MainLayout>
        );
    }
}
