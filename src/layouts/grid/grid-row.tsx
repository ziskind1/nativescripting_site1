import * as React from 'react';
import styled from 'styled-components';

interface GridRowProps {
    children: React.ReactNode;
}


const Row = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
border: 1px solid green;
`;

export const GridRow: React.StatelessComponent<
    GridRowProps
> = (props: GridRowProps) => {



    return (
        <Row>
            {props.children}
        </Row>
    );
};
