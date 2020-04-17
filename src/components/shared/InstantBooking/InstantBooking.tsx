import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors } from '../../../global/colors';

import { GridRow } from '../../../layouts/grid2/grid-row';
import { GridColumn } from '../../../layouts/grid2/grid-column';
import ActionButton from '../../ActionButton/ActionButton';

const BookingWrapper = styled.div`
  margin-top: 30px;
  border: 2px solid rgb(3, 51, 129);
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 200px;

  @media only screen and (max-width: 768px) {
    justify-content: flex-start;
    align-items: center;
  }
`;
const AvatarWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 200px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
    align-items: flex-end;
  }
`;

const AvatarImg = styled.img`
  border-radius: 50%;
  height: 150px;
`;

const ActionButtonWrapper = styled.div`
  width: 200px;
`;

interface InstantBookingProps {
  style?: React.CSSProperties;
}

export const InstantBooking: React.StatelessComponent<InstantBookingProps> = (
  props: InstantBookingProps
) => {
  // This combines the incoming style with the debug border
  const style = { ...(props.style ? props.style : {}) };

  return (
    <BookingWrapper>
      <GridRow style={style}>
        <GridColumn xs={12} sm={6}>
          <AvatarWrapper>
            <AvatarImg src="/img/authors/alex_ziskind.png" />
          </AvatarWrapper>
        </GridColumn>
        <GridColumn xs={12} sm={6}>
          <ContentWrapper>
            <h2>Instantly book meeting with Alex</h2>
            <ActionButtonWrapper>
              <ActionButton
                text="Choose Time"
                type="primary"
                url="https://calendly.com/nuvious"
              />
            </ActionButtonWrapper>
          </ContentWrapper>
        </GridColumn>
      </GridRow>
    </BookingWrapper>
  );
};
