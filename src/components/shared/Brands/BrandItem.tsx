import * as React from 'react';
import styled from 'styled-components';

interface BrandItemProps {
    imgSrc: string;
    title: string;
}

const ItemWrapper = styled.div`
height: 70px;
line-height: 70px;
text-align: center;
width: calc(14.28% - 6 * 30px/7)!important;
margin-right: 30px!important;

@media only screen and (max-width: 980px)
{
    width: calc(20% - 4 * 30px/5)!important;
}

@media only screen and (max-width: 780px)
{
    width: calc(25% - 3 * 30px/4)!important;
}
`;

const ItemImg = styled.img`
vertical-align: middle;
max-width: 100%;
display: inline-block;
border-radius: 0;
width: 90px;
color: white;
fill: #ffffff;
`;

export const BrandItem: React.StatelessComponent<BrandItemProps> = (
    props: BrandItemProps
) => {

    return (
        <ItemWrapper> <ItemImg src={props.imgSrc} alt={props.title} />
        </ItemWrapper>
    );
}
