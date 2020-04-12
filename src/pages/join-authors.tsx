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

interface JoinAuthorsPageProps {
  location: Location;
}

export default class extends React.Component<JoinAuthorsPageProps, any> {
  constructor(props: JoinAuthorsPageProps) {
    super(props);
  }

  public render() {
    const pageTitle = `Join Us | NativeScript Courses`;

    return (
      <MainLayout>
        <Seo path="/join-authors" />
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>

        <ContentPageWrapper>
          <PageSection>
            <Wrapper>
              <PageHeadingMain center>Join Us</PageHeadingMain>
              <ContactComponent
                location={this.props.location}
                contactType="authors"
              />
            </Wrapper>
          </PageSection>
        </ContentPageWrapper>
      </MainLayout>
    );
  }
}
