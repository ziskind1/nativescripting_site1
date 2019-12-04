import * as React from 'react';
import styled from 'styled-components';
import { DEBUG_LAYOUT, debugBorderRed } from '../../global/layout-debug';

interface GridRowProps {
    children: React.ReactNode;
    small?: boolean;
    style?: React.CSSProperties;
}


export const GridRow: React.StatelessComponent<
    GridRowProps
> = (props: GridRowProps) => {

    const Row = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        margin-top: ${props.small ? '40px' : '0px'};
    `;

    // This combines the incoming style with the debug border
    const style = { ...(props.style ? props.style : {}), ...(DEBUG_LAYOUT ? debugBorderRed : {}) };

    return (
        <Row style={style}>
            {props.children}
        </Row>
    );
};
