import * as React from "react";
import styled from 'styled-components';


interface CollapsibleProps {
    title: string;
    children: React.ReactNode;
}

//Currently not collapsible - make collapsible later
export default function Collapsible(props: CollapsibleProps) {


    const Container = styled.div`
        border-top: 1px solid #222;
        max-width: 1100px;
        margin: 0 auto;
        width: 100%;

        :before {
            content: " ";
            display: table;
        }

        :after {
            clear: both;
            content: " ";
            display: table;
        }
    `;

    const HeaderWrapper = styled.div`
        cursor: pointer;
    `;

    const H3 = styled.h3`
        font-weight: 500;
        font-size: 18px;
        color: #11F5FF;
        letter-spacing: 1px;
        margin-bottom: 15px;
        line-height: 55px;
        text-transform: capitalize;
    `;

    const H3Span = styled.span`
        width: 14px;
        height: 10px;
        background: url(/img/arrow.png) 0 no-repeat;
        margin-right: 15px;
        margin-left: 10px;
        display: inline-block;
        
        transition: transform .3s;
        transform: rotate(180deg);
    `;

    const ContentWrapper = styled.div`

    `;

    return (
        <Container>

            <HeaderWrapper>
                <H3><H3Span></H3Span>{props.title}</H3>
            </HeaderWrapper>

            <ContentWrapper>
                {props.children}
            </ContentWrapper>


        </Container>
    );
}


