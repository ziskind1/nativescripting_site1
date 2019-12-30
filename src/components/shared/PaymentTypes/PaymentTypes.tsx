import * as React from 'react';
import styled from 'styled-components';
import { GridRow } from '../../../layouts/grid2/grid-row';
import { GridColumn } from '../../../layouts/grid2/grid-column';
import { DEBUG_LAYOUT, debugBorderRed } from '../../../global/layout-debug';


const PaymentImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const PaymentTypeImg = styled.img`
  height: 20px;
  margin: 0 5px;
`;
const PayTypeText = styled.p`
  margin-top: 15px;
`;

interface PaymentTypesProps {
    style?: React.CSSProperties;
}

export const PaymentTypes: React.StatelessComponent<
PaymentTypesProps
> = (props: PaymentTypesProps) => {

    // This combines the incoming style with the debug border
    const style = { ...(props.style ? props.style : {}), ...(DEBUG_LAYOUT ? debugBorderRed : {}) };

    const s = { ...style, ...{display: 'block' } };

    return (
        <GridRow style={s}>
          <GridColumn style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', paddingBottom: '40px' }}>
            <PaymentImageWrapper> 
              <PaymentTypeImg src="/img/payment/mastercard.svg" alt="Accepting MasterCard" /> 
              <PaymentTypeImg src="/img/payment/paypal.svg" alt="Accepting PayPal" /> 
              <PaymentTypeImg src="/img/payment/visa.svg" alt="Accepting VISA" /> 
              <PaymentTypeImg src="/img/payment/amex.svg" alt="Accepting Amex" /> 
            </PaymentImageWrapper>
            <PayTypeText className=""> Secure SSL encrypted payments </PayTypeText>
          </GridColumn>
        </GridRow>
    );
};