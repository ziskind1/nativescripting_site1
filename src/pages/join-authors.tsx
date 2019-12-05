import * as React from 'react';
import { Helmet } from 'react-helmet';

import { MainLayout } from '../layouts/MainLayout';
import { Seo } from '../components/shared/Seo/Seo';
import { ContentPageWrapper } from '../layouts/page-layouts/content-page';
import { Wrapper } from '../layouts/page-layouts/wrapper';
import { PageHeadingMain } from '../components/shared/PageHeaders';
import { PageSection } from '../layouts/page-layouts/page-section';

import { GridRow2 } from '../layouts/grid2/grid-row';
import { GridColumn2 } from '../layouts/grid2/grid-column';


interface JoinAuthorsPageProps { }

export default class extends React.Component<JoinAuthorsPageProps, any> {
    constructor(props: JoinAuthorsPageProps) {
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

                            <PageHeadingMain center>Join Our Authors Team</PageHeadingMain>


                            <GridRow2>
                                <GridColumn2 xs={12} md={6}>
                                    col1
                                </GridColumn2>
                                <GridColumn2 xs={12} md={6}>
                                    col2
                                </GridColumn2>
                            </GridRow2>


                        </Wrapper>
                    </PageSection>
                </ContentPageWrapper>

            </MainLayout>
        );
    }
}
