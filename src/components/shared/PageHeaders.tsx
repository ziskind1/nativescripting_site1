import * as React from 'react';
import styled from 'styled-components';
import { sizes } from '../../global/sizes';

interface PageHeadingMainProps {
    children: React.ReactNode;
}

interface PageHeading2Props {
    children: React.ReactNode;
}

interface PageHeading3Props {
    children: React.ReactNode;
}

export const PageHeadingMain: React.StatelessComponent<
    PageHeadingMainProps
> = (props: PageHeadingMainProps) => {

    const H1 = styled.h1`
        font-family: MonoRegular;
        font-size: ${sizes.h1}px;
        font-weight: 700;
        line-height: 50px;
        color: #12ffcd;
        letter-spacing: 2px;
        margin: 10px 0 10px 0;
        text-align: center;
    `;

    return (
        <H1>
            {props.children}
        </H1>
    );
};

export const PageHeading2: React.StatelessComponent<
    PageHeading2Props
> = (props: PageHeading2Props) => {

    const H2 = styled.h2`
        font-family: MonoRegular;
        font-size: ${sizes.h2}px;
        font-weight: 500;
        line-height: 48px;
        color: #11f5ff;
        letter-spacing: 1px;
        margin: 10px 0 10px 0;
        text-align: center;
    `;

    return (
        <H2>
            {props.children}
        </H2>
    );
};

export const PageHeading3: React.StatelessComponent<
    PageHeading3Props
> = (props: PageHeading3Props) => {

    const H3 = styled.h3`
        font-size: ${sizes.h3}px;
        font-weight: 300;
        line-height: 40px;
        color: #ffffff;
        letter-spacing: 1px;
        margin: 10px 0 10px 0;
        text-align: center;
    `;

    return (
        <H3>
            {props.children}
        </H3>
    );
};

