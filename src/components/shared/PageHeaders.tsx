import * as React from 'react';
import styled from 'styled-components';
import { sizes } from '../../global/sizes';
import { colors } from '../../global/colors';

interface PageHeadingMainProps {
    children: React.ReactNode;
    center?: boolean;
}

interface PageHeading2Props {
    children: React.ReactNode;
}

interface PageHeading3Props {
    children: React.ReactNode;
}


export const PageHeadingMainInternal = styled.h1`
    font-family: MonoRegular;
    font-size: ${sizes.h1}px;
    font-weight: 700;
    line-height: 50px;
    color: ${colors.titleGreen};
    letter-spacing: 2px;
    margin: 10px 0 0 0;
`;


export const PageHeadingMain = (props: PageHeadingMainProps) => {

    const style: React.CSSProperties = { textAlign: props.center ? 'center' : 'left' };

    return (
        <PageHeadingMainInternal style={style}>
            {props.children}
        </PageHeadingMainInternal>
    );
};


export const PageHeading2 = styled.h2`
font-family: MonoRegular;
font-size: ${sizes.h2}px;
font-weight: 500;
line-height: 46px;
margin-bottom: 5px;
color: ${colors.titleBlue};
letter-spacing: -2px;
`;

/*
export const PageHeading2: React.StatelessComponent<
    PageHeading2Props
> = (props: PageHeading2Props) => {



    return (
        <H2>
            {props.children}
        </H2>
    );
};
*/

export const PageHeading3 = styled.h3`
font-size: ${sizes.h3}px;
font-weight: 300;
line-height: 40px;
color: ${colors.white};
letter-spacing: 1px;
margin: 10px 0 10px 0;
`;

/*
export const PageHeading3: React.StatelessComponent<
    PageHeading3Props
> = (props: PageHeading3Props) => {



    return (
        <H3>
            {props.children}
        </H3>
    );
};
*/
