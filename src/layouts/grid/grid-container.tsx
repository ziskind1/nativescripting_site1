import * as React from 'react';
import styled from 'styled-components';
import { DEBUG_LAYOUT, debugBorderAqua } from '../../global/layout-debug';


interface GridContainerProps {
    children: React.ReactNode;
    style?: React.CSSProperties;
}

const Container = styled.div``;

export const GridContainer: React.StatelessComponent<
    GridContainerProps
> = (props: GridContainerProps) => {

    // This combines the incoming style with the debug border
    const style = { ...(props.style ? props.style : {}), ...(DEBUG_LAYOUT ? debugBorderAqua : {}) };

    return (
        <Container style={style}>
            {props.children}
        </Container>
    );
};
