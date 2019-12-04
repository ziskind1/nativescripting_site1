import * as React from 'react';
import styled from 'styled-components';
import { DEBUG_LAYOUT, debugBorderWhite } from '../../global/layout-debug';

interface GridColumnProps {
    children: React.ReactNode;
    doubleCol?: boolean;
    style?: React.CSSProperties;
}

const Column = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;

@media screen and (min-width: 800px) {
    .column {
       flex: 1;
    }
    .double-column {
      flex: 2;
    }
  }
`;

export const GridColumn: React.StatelessComponent<
    GridColumnProps
> = (props: GridColumnProps) => {



    const colClass = props.doubleCol ? 'double-column' : 'column';

    // This combines the incoming style with the debug border
    const style = { ...(props.style ? props.style : {}), ...(DEBUG_LAYOUT ? debugBorderWhite : {}) };


    return (
        <Column className={colClass} style={style}>
            {props.children}
        </Column>
    );
};
