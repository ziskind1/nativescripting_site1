import * as React from 'react';
import { Bundle, Product } from '../../../domain/models';
import ActionButton, { ActionBtnType } from '../../ActionButton/ActionButton';
import BundleCourseList from '../BundleCourse/BundleCourseList';

import './BundleCard.css';
import LicenseSelector from '../../shared/LicenseSelector/LicenseSelector';

export interface BundleCardProps {
  bundle: Bundle;
}

interface BundleCardState {
  selectedProduct: Product;
  actionUrl: string;
}

function getBundleActionUrl(bundle: Bundle, product: Product) {
  //const url = `https://sso.teachable.com/secure/89912/checkout/confirmation?product_id=` + product.id + `&course_id=` + bundle.id;
  const url = `https://sso.teachable.com/secure/89912/checkout/confirmation?product_id=${
    product.id
  }&course_id=${bundle.id}`;
  return url;
}

function getPriceBlockHtml(selectedProduct: Product) {
  const savingsPercent = Math.round(
    (1 - selectedProduct.pricesale / selectedProduct.pricereg) * 100
  );

  let savingsBlockHtml = null;
  if (savingsPercent > 0) {
    savingsBlockHtml = (
      <div>
        <span className="package__price-full">${selectedProduct.pricereg}</span>
        <span className="package__price-save">Save {savingsPercent}%</span>
      </div>
    );
  }
  let salePriceHtml =
    selectedProduct.pricesale === 0 ? (
      <p>FREE</p>
    ) : (
      <p>
        <span>$</span>
        {selectedProduct.pricesale}
      </p>
    );

  return (
    <div className="bundle-price">
      {salePriceHtml}
      {savingsBlockHtml}
    </div>
  );
}

export default class BundleCard extends React.Component<
  BundleCardProps,
  BundleCardState
> {
  constructor(props: BundleCardProps) {
    super(props);

    const selectedProduct = props.bundle.products.find(
      p => p.licensesMax === 1
    );

    this.state = {
      selectedProduct: selectedProduct,
      actionUrl: getBundleActionUrl(props.bundle, selectedProduct)
    };
  }

  private licenseSelect(p: Product) {
    this.setState({ selectedProduct: p });
  }

  public render() {
    const bundle = this.props.bundle;

    let bundleType: ActionBtnType = null;
    switch (bundle.bundleLevel) {
      case 1:
        bundleType = 'primary';
        break;
      case 2:
        bundleType = 'secondary';
        break;
      case 3:
        bundleType = 'tertiary';
        break;
    }

    const priceBlockHtml = getPriceBlockHtml(this.state.selectedProduct);

    const savingsPercent = Math.round(
      (1 -
        this.state.selectedProduct.pricesale /
          this.state.selectedProduct.pricereg) *
        100
    );

    return (
      <div className={`bundle-container ${bundleType}`}>
        {bundle.promoremaining > 0 && (
          <div className="bundle-card-promo-container">
            <div className="bundle-card-promo-count">
              <span>{bundle.promoremaining}</span>/
              <span>{bundle.promototal}</span>&nbsp;left at this price
            </div>
          </div>
        )}

        <div className="bundle-header">
          <h3 className={`bundle-header-title`}>{bundle.title}</h3>
          <p className="bundle-header-subtitle">
            {bundle.courses.length} courses
          </p>
        </div>

        <div className="bundle-courses">
          <BundleCourseList courses={bundle.courses} />
        </div>

        <div className="bundle-bottom">
          <div className="bundle-license">
            <LicenseSelector
              products={bundle.products}
              onLicenseSelect={p => this.licenseSelect(p)}
            />
          </div>
          {priceBlockHtml}
        </div>

        <ActionButton
          text={'buy bundle'}
          url={getBundleActionUrl(
            this.props.bundle,
            this.state.selectedProduct
          )}
          type={bundleType}
          newWindow={true}
        />
      </div>
    );
  }
}
