import * as React from 'react';
import styled from 'styled-components';

interface GridColumnProps {
    children: React.ReactNode;
    doubleCol?: boolean;
}

export const GridColumn: React.StatelessComponent<
    GridColumnProps
> = (props: GridColumnProps) => {

    const Column = styled.div`
        display: flex;
        flex-direction: column;
        flex-basis: 100%;
        border: 1px solid orange;

        @media screen and (min-width: 800px) {
            .column {
               flex: 1;
            }
            .double-column {
              flex: 2;
            }
          }
    `;

    const colClass = props.doubleCol ? 'double-column' : 'column';

    return (
        <Column className={colClass}>
            {props.children}
        </Column>
    );
};
