import * as React from 'react';
import { Helmet } from 'react-helmet';

import { ContactComponent } from '../components/contact/contact.component';
import { MainLayout } from '../layouts/MainLayout';
import { Seo } from '../components/shared/Seo/Seo';
import { ContentPageWrapper } from '../layouts/page-layouts/content-page';
import { Wrapper } from '../layouts/page-layouts/wrapper';
import {
  PageHeadingMain,
  PageHeading2,
  PageHeading3
} from '../components/shared/PageHeaders';
import { PageSection } from '../layouts/page-layouts/page-section';
import { InstantBooking } from '../components/shared/InstantBooking/InstantBooking';

interface ContactPageProps {
  location: Location;
}

export default class extends React.Component<ContactPageProps, any> {
  constructor(props: ContactPageProps) {
    super(props);
  }

  public render() {
    const pageTitle = `NativeScript Courses for Teams`;

    return (
      <MainLayout>
        <Seo path="/teams" />
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>

        <ContentPageWrapper>
          <PageSection>
            <Wrapper>
              <PageHeadingMain center>
                Get Your Team Trained in NativeScript
              </PageHeadingMain>
              <InstantBooking />
              <ContactComponent
                location={this.props.location}
                contactType="team"
              />
            </Wrapper>
          </PageSection>
        </ContentPageWrapper>
      </MainLayout>
    );
  }
}
