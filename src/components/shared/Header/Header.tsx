import * as React from 'react';
import { Link } from 'gatsby';

import SiteLogo from '../SiteLogo';
import { HeaderMenuMobile } from '../HeaderMenu/HeaderMenuMobile';

import './Header.css';
import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import SiteHeaderLinks from './SiteHeaderLinks';
import { GridRow } from '../../../layouts/grid2/grid-row';
import { GridColumn } from '../../../layouts/grid2/grid-column';

interface HeaderProps {
  data: any;
  siteName: string;
}

function Header(props: HeaderProps) {
  return (
    <header className="site-header">
      <GridRow>
        <GridColumn xs={3} sm={6} md={6}>
          <SiteLogo siteName={props.siteName} />
        </GridColumn>
        <GridColumn xs={9} sm={6} md={6}>
          <GridRow>
            <GridColumn xs={12}>
              <SiteHeaderLinks />
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn xs={12}>
              <HeaderMenu data={props.data} />
            </GridColumn>
          </GridRow>
        </GridColumn>
      </GridRow>
    </header>
  );
}

export default Header;
