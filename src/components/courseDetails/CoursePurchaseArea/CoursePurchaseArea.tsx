import * as React from 'react';

import styled from 'styled-components';

import LicenseSelector from '../../shared/LicenseSelector/LicenseSelector';
import ActionButton from '../../ActionButton/ActionButton';
import { Course, Product } from '../../../domain/models';

import './CoursePurchaseArea.css';
import { PaymentTypes } from '../../shared/PaymentTypes/PaymentTypes';
import { PaymentPlanOption } from './PaymentPlanOption';

interface CoursePurchaseAreaProps {
  course: Course;
}

interface CoursePurchaseAreaState {
  selectedProduct: Product;
  actionUrl: string;
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

function getCourseActionUrl(course: Course, product: Product) {
  return (
    'https://sso.teachable.com/secure/89912/checkout/confirmation?product_id=' +
    product.id +
    '&course_id=' +
    course.id
  );
}

export class CoursePurchaseArea extends React.Component<
  CoursePurchaseAreaProps,
  CoursePurchaseAreaState
> {
  constructor(props: CoursePurchaseAreaProps) {
    super(props);

    const selectedProduct = props.course.products.find(
      p => p.licensesMax === 1
    );

    this.state = {
      selectedProduct: selectedProduct,
      actionUrl: getCourseActionUrl(props.course, selectedProduct)
    };
  }

  private licenseSelect(p: Product) {
    this.setState({ selectedProduct: p });
  }

  public render() {
    const course = this.props.course;

    const priceBlockHtml = getPriceBlockHtml(this.state.selectedProduct);

    const paymentPlans = course.products.filter(p => p.prodType === 'plan');

    const paymentPlanHtml =
      paymentPlans.length > 0 ? (
        <PaymentPlanOption courseId={course.id} paymentPlans={paymentPlans} />
      ) : null;

    return (
      <div className="course-purchase-area-container">
        <h2>Course purchase options</h2>
        <div className="course-purchase-area-options">
          <div className="bundle-license">
            <LicenseSelector
              products={course.products}
              onLicenseSelect={p => this.licenseSelect(p)}
            />
          </div>
          {priceBlockHtml}
        </div>

        <ActionButton
          text={`Get Course`}
          url={getCourseActionUrl(course, this.state.selectedProduct)}
          type="primary"
          newWindow={true}
        />

        {paymentPlanHtml}

        <PaymentTypes style={{ marginTop: '40px' }} />
      </div>
    );
  }
}
