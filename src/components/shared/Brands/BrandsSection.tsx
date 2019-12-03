import * as React from 'react';
import styled from 'styled-components';
import { BrandItemList } from './BrandItemList';


interface BrandsSectionProps {
    disabled?: boolean;
}

const Section = styled.div`
padding-top: 100px;
padding-bottom: 100px;

@media only screen and (max-width: 767px)
{
    padding: 60px 0;
}
`;
const HeadingWrapper = styled.div`
margin: 0 auto;
text-align: center;
`;

const Heading = styled.h2`
color: #11f5ff;
letter-spacing: -2px;
line-height: 40px;
margin-bottom: 5px;
font-size: 3rem;
font-family: 'MonoRegular';

@media only screen and (max-width: 1024px) and (min-width: 768px)
{
    font-size: 2.4rem;
    line-height: 32px;
}
@media only screen and (max-width: 767px)
{
    letter-spacing: 0px;
    font-size: 1.8rem;
    line-height: 24px;
}
`;

const SubTitle = styled.p`
max-width: 840px;
margin: 10px auto 0;
font-size: 1.8rem;
line-height: 24px;
`;


export const BrandsSection: React.StatelessComponent<BrandsSectionProps> = (
    props: BrandsSectionProps
) => {



    const SectionWrapper = styled.div`
        display: ${props.disabled ? 'none' : 'block'}
    `;


    return (
        <Section>
            <SectionWrapper className="wrapper">
                <HeadingWrapper><Heading>Helping 200+ organizations and 20,000+ students build NativeScript skills</Heading></HeadingWrapper>

                <BrandItemList></BrandItemList>
            </SectionWrapper>
        </Section>
    );
}
