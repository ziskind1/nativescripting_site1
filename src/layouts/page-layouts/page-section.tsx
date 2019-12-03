import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../global/colors';

interface PageSectionProps {
    children: React.ReactNode;
    isTop?: boolean;
    secondary?: boolean;
}

export const PageSection: React.StatelessComponent<
    PageSectionProps
> = (props: PageSectionProps) => {

    const PSInternal = styled.section`
        padding: ${props.isTop ? '0' : '50px'} 0 50px 0;
        background-color: ${props.secondary ? colors.darkBlue : 'transparent'};
    `;

    return (
        <PSInternal>
            {props.children}
        </PSInternal>
    );
};
