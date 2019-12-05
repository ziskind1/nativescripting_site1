import * as React from 'react';
import styled from 'styled-components';
import { DEBUG_LAYOUT, debugBorderWhite } from '../../global/layout-debug';

interface GridColumnProps {
    children: React.ReactNode;
    colCount?: number;
    style?: React.CSSProperties;
}


export const GridColumn: React.StatelessComponent<
    GridColumnProps
> = (props: GridColumnProps) => {



    const Column = styled.div`
display: flex;
flex-direction: column;
flex-basis: 100%;

@media screen and (min-width: 800px) {
    .col1 {
       flex: 1;
    }
    .col2 {
      flex: 2;
    }
    .col3 {
        flex: 3;
      }
      .col4 {
        flex: 4;
      }
      .col5 {
        flex: 5;
      }
      .col6 {
        flex: 6;
      }
  }
`;


    // const colClass = props.doubleCol ? 'double-column' : 'column';
    let colClass = 'col1';
    let colCount = 1;
    if (props.colCount) {
        switch (props.colCount) {
            case 1:
                colClass = 'col1';
                colCount = 1;
                break;
            case 2:
                colClass = 'col2';
                colCount = 2;
                break;
            case 3:
                colClass = 'col3';
                colCount = 3;
                break;
            case 4:
                colClass = 'col4';
                colCount = 4;
                break;
            case 5:
                colClass = 'col5';
                colCount = 5;
                break;
            case 6:
                colClass = 'col6';
                colCount = 6;
                break;
        }
    }


    // This combines the incoming style with the debug border
    const style = { ...(props.style ? props.style : {}), ...(DEBUG_LAYOUT ? debugBorderWhite : {}) };



    return (
        <Column className={colClass} style={style}>
            {props.children}
        </Column>
    );
};
