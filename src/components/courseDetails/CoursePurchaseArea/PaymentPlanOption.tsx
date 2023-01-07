import * as React from 'react';
import styled from 'styled-components';

import { Course, Product } from '../../../domain/models';
import ActionButton from '../../ActionButton/ActionButton';

interface PaymentPlanOptionProps {
  courseId: string;
  paymentPlans: Product[];
}

const ProductPaymentPlan = styled.div`
  margin-top: 40px;
  text-align: center;
  background-color: #0949b2;
`;
const PayPlanLabel = styled.span`
  display: inline-block;
  padding: 10px;
`;

function getCourseActionUrl(courseId: string, productId: string) {
  return (
    'https://sso.teachable.com/secure/89912/checkout/confirmation?product_id=' +
    productId +
    '&course_id=' +
    courseId
  );
}

export const PaymentPlanOption = (
  props: PaymentPlanOptionProps
) => {
  // For now, assume only one payment plan option
  const plan = props.paymentPlans[0];

  return (
    <ProductPaymentPlan className="course-purchase-area-options">
      <PayPlanLabel>{plan.name}</PayPlanLabel>

      <div className="bundle-price">
        <p>
          <span>{plan.numPayments} payments of $</span>
          {plan.pricereg}
          <span>/mo</span>
        </p>
      </div>

      <ActionButton
        text={`Start Payment Plan`}
        url={getCourseActionUrl(props.courseId, plan.productId)}
        type="secondary"
        newWindow={true}
      />
    </ProductPaymentPlan>
  );
};
