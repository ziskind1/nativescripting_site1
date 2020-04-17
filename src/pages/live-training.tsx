import * as React from 'react';
import { Helmet } from 'react-helmet';

import '../css/faq.css';
import { MainLayout } from '../layouts/MainLayout';
import { Seo } from '../components/shared/Seo/Seo';
import TrainingLink from '../components/home/TrainingLink/TrainingLink';
import { InstantBooking } from '../components/shared/InstantBooking/InstantBooking';

function FaqPage() {
  const pageTitle = `NativeScript Training and Workshops`;

  return (
    <MainLayout>
      <div className="wrapper">
        <Seo path="/live-training" />
        <Helmet>
          <title>{pageTitle}</title>
        </Helmet>

        <div style={{ marginTop: '30px', marginBottom: '30px' }}>
          <TrainingLink />
          <InstantBooking />
        </div>
      </div>
    </MainLayout>
  );
}

export default FaqPage;
