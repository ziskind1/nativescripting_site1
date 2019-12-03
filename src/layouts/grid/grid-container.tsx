import * as React from 'react';
import styled from 'styled-components';

interface GridContainerProps {
    children: React.ReactNode;
}

export const GridContainer: React.StatelessComponent<
    GridContainerProps
> = (props: GridContainerProps) => {

    const Container = styled.div`
        border: 1px solid red;
    `;

    return (
        <Container>
            {props.children}
        </Container>
    );
};
