import * as React from 'react';

import styled from 'styled-components';

import { Bundle } from '../../../domain/models';
import BundleCardList from '../BundleCard/BundleCardList';

import './BundleSection.css';
import { PaymentTypes } from '../../shared/PaymentTypes/PaymentTypes';
import { GridRow } from '../../../layouts/grid2/grid-row';
import { GridColumn } from '../../../layouts/grid2/grid-column';

const ProdGuaranteeWrapper = styled.div`
    position: relative;
    padding-left: 80px;
    padding-right: 30px;
    padding-bottom: 40px;
`;

const GuaranteeTitleRefund = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 5px;

  :before {
    content: "";
    width: 64px;
    height: 64px;
    position: absolute;
    top: -22px;
    left: 0;

    background: url(/img/benefits/guarantee.svg) center center no-repeat;
    background-size: cover;

    @media only screen and (max-width: 767px) {
        width: 48px;
        height: 48px;
        top: -16px;
    }
  }
`;

const GuaranteeTitleDiscount = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 5px;

  :before {
    content: "";
    width: 64px;
    height: 64px;
    position: absolute;
    top: -22px;
    left: 0;

    background: url(/img/benefits/discount.svg) center center no-repeat;
    background-size: cover;

    @media only screen and (max-width: 767px) {
      width: 48px;
      height: 48px;
      top: -16px;
    }
  }
`;

export interface BundleSectionProps {
  bundles: Bundle[];
  bundlesTitle: string;
  bundlesDesc: string;
  bg?: string;
}

const BundleSection = (
  props: BundleSectionProps
) => {

  const Section = styled.div`
    ${props.bg ? 'background-color: ' + props.bg : ''}
  `;

  return (
    <Section className="section">
      <div className="wrapper">
        <a id="specials" />
        <div className="heading">
          <h2 className="heading__title">{props.bundlesTitle}</h2>
          <p className="heading__text">
            {props.bundlesDesc}
          </p>
        </div>

        <BundleCardList bundles={props.bundles} />

        <PaymentTypes/>

        <GridRow>
          <GridColumn xs={12} sm={6}>
            <ProdGuaranteeWrapper>
              <GuaranteeTitleRefund> 100% money back guarantee </GuaranteeTitleRefund>
              <p> These courses are empowering thousands with expert knowledge - they will you too. If you're disappointed for whatever reason, you'll get every cent back. </p>
            </ProdGuaranteeWrapper>
          </GridColumn>
          <GridColumn xs={12} sm={6}>
            <ProdGuaranteeWrapper>
              <GuaranteeTitleDiscount> Student/Location discounts </GuaranteeTitleDiscount>
              <p> Not-so-good exchange rate? (i.e. India/Brazil) Get in touch for a coupon. Student? Email us from your student email or attach your student ID. </p>
            </ProdGuaranteeWrapper>
          </GridColumn>
        </GridRow>
        
      </div>
    </Section>
  );
};

export default BundleSection;
