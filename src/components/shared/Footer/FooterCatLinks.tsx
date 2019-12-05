import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { colors } from '../../../global/colors';

import { GridRow } from '../../../layouts/grid2/grid-row';
import { GridColumn } from '../../../layouts/grid2/grid-column';


interface FooterCatLinksProps {
    style?: React.CSSProperties;
}

export const FooterCatLinks: React.StatelessComponent<
    FooterCatLinksProps
> = (props: FooterCatLinksProps) => {

    // This combines the incoming style with the debug border
    const style = { ...(props.style ? props.style : {}) };

    return (
        <GridRow style={style}>
            <GridColumn xs={12} md={6}>

            </GridColumn>
            <GridColumn xs={12} md={6}>

            </GridColumn>

        </GridRow>
    );
};
