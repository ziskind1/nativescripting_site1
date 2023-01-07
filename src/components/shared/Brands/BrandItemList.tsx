import * as React from 'react';
import styled from 'styled-components';

import { BrandItem } from './BrandItem';

interface BrandItemListProps {

}

const BrandItemsContainer = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin-top: 40px;
padding: 0;
border: 0;
font-size: 100%;
font: inherit;
vertical-align: baseline;
`;

export const BrandItemList = (
    props: BrandItemListProps
) => {
    return (

        <BrandItemsContainer>
            <BrandItem title="Oracle" imgSrc="/img/brands/colored/oracle.svg" />
            <BrandItem title="FedEx" imgSrc="/img/brands/recolored/fedex.svg" />
            <BrandItem title="Google" imgSrc="/img/brands/recolored/google.svg" />
            <BrandItem title="ING" imgSrc="/img/brands/recolored/ing.svg" />
            <BrandItem title="CapitalOne" imgSrc="/img/brands/recolored/capitalone.svg" />
            <BrandItem title="PNC" imgSrc="/img/brands/recolored/pnc.svg" />

            <BrandItem title="SAP" imgSrc="/img/brands/recolored/sap.svg" />
            <BrandItem title="Nokia" imgSrc="/img/brands/recolored/nokia.svg" />
            <BrandItem title="Eaton" imgSrc="/img/brands/recolored/eaton.svg" />
            <BrandItem title="Equifax" imgSrc="/img/brands/recolored/equifax.svg" />
            <BrandItem title="Gartner" imgSrc="/img/brands/recolored/gartner.svg" />
            <BrandItem title="IEEE" imgSrc="/img/brands/recolored/ieee.svg" />

            <BrandItem title="RedHat" imgSrc="/img/brands/recolored/redhat.svg" />
            <BrandItem title="Ryder" imgSrc="/img/brands/recolored/ryder.svg" />
            <BrandItem title="Securitas" imgSrc="/img/brands/recolored/who.svg" />
            <BrandItem title="Sennheiser" imgSrc="/img/brands/recolored/sennheiser.svg" />
            <BrandItem title="Virgin Media" imgSrc="/img/brands/recolored/virgin-media.svg" />
            <BrandItem title="Honeywell" imgSrc="/img/brands/recolored/honeywell.svg" />
        </BrandItemsContainer>
    );
}
