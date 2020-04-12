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

interface ContactPageProps {
  location: Location;
}

export default class extends React.Component<ContactPageProps, any> {
  constructor(props: ContactPageProps) {
    super(props);
  }

  public render() {
    const pageTitle = `Contact Us | NativeScript Courses`;

    return (
      <MainLayout>
        <Seo path="/contact" />
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>

        <ContentPageWrapper>
          <PageSection>
            <Wrapper>
              <PageHeadingMain center>Contact Us</PageHeadingMain>
              <ContactComponent location={this.props.location} />
            </Wrapper>
          </PageSection>
        </ContentPageWrapper>
      </MainLayout>
    );
  }
}
