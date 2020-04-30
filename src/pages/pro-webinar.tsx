import * as React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

import { MainLayout } from '../layouts/MainLayout';
import { Seo } from '../components/shared/Seo/Seo';
import { ContentPageWrapper } from '../layouts/page-layouts/content-page';
import { Wrapper } from '../layouts/page-layouts/wrapper';
import {
  PageHeadingMain,
  PageHeading2
} from '../components/shared/PageHeaders';
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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  :hover {
    background-color: #bd2234;
  }
`;

const VidWrapper = styled.div`
  height: 300px;
`;

interface ProWebinarPageProps {}
interface ProWebinarPageState {}

export default class extends React.Component<
  ProWebinarPageProps,
  ProWebinarPageState
> {
  public componentDidMount() {
    this.mountWebinarScript();
  }

  private mountWebinarScript() {
    const script = document.createElement('script');
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
              <div className="video-container">
                <div className="about-top-block">
                  <PageHeadingMain center>
                    Online training webinar begins in{' '}
                    <WebinarCountdownTimer style={{ color: '#e43145' }} />
                  </PageHeadingMain>
                  <h2>Reserve your spot below</h2>

                  <VidWrapper className="video-wrapper sm">
                    <iframe
                      width="640"
                      height="360"
                      src="https://player.vimeo.com/video/399471866"
                      frameBorder="0"
                      allowFullScreen
                    />
                  </VidWrapper>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <CTAWrapper>
                  <CTA
                    type="button"
                    data-webinarHash="ml3nqs7"
                    title="regpopbox_819005285141055972_623cfc39cd"
                  >
                    Yes, I want to join the free training webinar
                  </CTA>
                  <script src="https://event.webinarjam.com/register/ml3nqs7/embed-button"></script>
                </CTAWrapper>
              </div>
            </Wrapper>
          </PageSection>
        </ContentPageWrapper>
      </MainLayout>
    );
  }
}
