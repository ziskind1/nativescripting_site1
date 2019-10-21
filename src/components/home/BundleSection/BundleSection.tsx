import * as React from 'react';

import styled from 'styled-components';

import { Bundle } from '../../../domain/models';
import BundleCardList from '../BundleCard/BundleCardList';

import './BundleSection.css';

export interface BundleSectionProps {
  bundles: Bundle[];
  bundlesTitle: string;
  bundlesDesc: string;
  bg?: string;
}

const BundleSection: React.StatelessComponent<BundleSectionProps> = (
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
      </div>
    </Section>
  );
};

export default BundleSection;
