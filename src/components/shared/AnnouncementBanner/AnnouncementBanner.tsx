import * as React from 'react';
import styled from 'styled-components';

import { DEBUG_LAYOUT, debugBorderRed } from '../../../global/layout-debug';
import { ENABLE_ANNOUNCEMENT } from '../../../global/switches';
import { GridRow } from '../../../layouts/grid2/grid-row';
import { GridColumn } from '../../../layouts/grid2/grid-column';

interface AnnouncementBannerProps {
    style?: React.CSSProperties;
}

const AnnouncementWrapper = styled.div`
    top: 0;
    z-index: 3000;
    background-color: #f4b535;
    width: 100%;
    height: 68px;
    box-shadow: 0 4px 8px #272727;
    padding-top: 10px;

    @media only screen and (max-width: 470px) {
        height: 84px;
    }
`;
const AnnounceText = styled.span`
    color: #032e74;
    font-size: 16px;
    font-weight: bold;
`;

export const AnnouncementBanner: React.StatelessComponent<
AnnouncementBannerProps
> = (props: AnnouncementBannerProps) => {

    // This combines the incoming style with the debug border
    const style = { ...(props.style ? props.style : {}), ...(DEBUG_LAYOUT ? debugBorderRed : {}) };

    return (
        <>
        { ENABLE_ANNOUNCEMENT ? (
            <AnnouncementWrapper>
                <GridRow style={style}>
                    <GridColumn xs={12} style={{ textAlign: 'center' }}>
                        <AnnounceText>
                            Breathe life into mobile UX with solid architecture lessons
                        </AnnounceText>
                    </GridColumn>
                    <GridColumn xs={12} style={{ textAlign: 'center' }}>
                        <AnnounceText>
                            <a href='https://ti.to/ngatlconf/ngatlanta-nodeatlanta/with/wzdhimfwuoi,lt7-artwm3i'>Next Workshop</a>
                        </AnnounceText>
                    </GridColumn>
                </GridRow>
            </AnnouncementWrapper>
         ) : null }
         </>
    );
};
