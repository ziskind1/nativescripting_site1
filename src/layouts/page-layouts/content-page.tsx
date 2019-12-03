import * as React from 'react';
import styled from 'styled-components';

interface ContentPageProps {
    children: React.ReactNode;
}


const ContentPage = styled.div`
background-image: url('/img/logo_2.svg');
background-position-x: 80%;
background-repeat: no-repeat;
background-attachment: initial;
`;

export const ContentPageWrapper: React.StatelessComponent<
    ContentPageProps
> = (props: ContentPageProps) => {


    return (
        <ContentPage>
            {props.children}
        </ContentPage>
    );
};
