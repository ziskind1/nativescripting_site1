import * as React from 'react';
import styled from 'styled-components';

interface GridRowProps {
    children: React.ReactNode;
}

export const GridRow: React.StatelessComponent<
    GridRowProps
> = (props: GridRowProps) => {


    const Row = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        border: 1px solid green;
    `;

    return (
        <Row>
            {props.children}
        </Row>
    );
};
