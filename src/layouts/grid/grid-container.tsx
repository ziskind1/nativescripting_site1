import * as React from 'react';
import styled from 'styled-components';

interface GridContainerProps {
    children: React.ReactNode;
}

const Container = styled.div`
border: 1px solid red;
`;

export const GridContainer: React.StatelessComponent<
    GridContainerProps
> = (props: GridContainerProps) => {



    return (
        <Container>
            {props.children}
        </Container>
    );
};
