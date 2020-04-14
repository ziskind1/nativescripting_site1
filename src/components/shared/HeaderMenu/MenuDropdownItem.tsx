import * as React from 'react';
import { Link } from '@reach/router';

import styled from 'styled-components';

const DropdownContainer = styled.div`
  overflow: hidden;

  :hover button {
    background-color: #0949b2;
  }
`;

const MenuLinkButton = styled.button`
  display: inline-block;

  color: #12ffcd;
  line-height: 80px;

  border: none;
  padding: 14px 16px;
  background-color: inherit;
  font: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */

  font-size: 16px;
  font-family: 'MonoRegular';
`;

const DropdownConent = styled.div`
  display: none;
  position: absolute;
  background-color: rgb(3, 51, 129);
  width: 100%;
  left: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1) 0s;
  animation-name: fadeSlide;
  animation-duration: 300ms;
  animation-timing-function: cubic-bezier(0.86, 0, 0.07, 1);
  animation-fill-mode: forwards;
`;

const DropdownContentHeader = styled.div`
  background-color: #0949b2;
  font-family: MonoRegular;
  padding: 10px 50px 10px 50px;
  font-weight: 400;
  color: #11f5ff;
`;

const DropdownContentRow = styled.div`
  padding: 10px 50px 10px 50px;
  :after {
    content: '';
    display: table;
    clear: both;
  }
`;

const DropdownContentColumn = styled.div`
  float: left;
  width: 33.33%;
  padding: 5px;
  background-color: rgb(3, 51, 129);

  h3 {
    font-family: MonoRegular;
    font-weight: 400;
    color: #12ffcd;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

const SelectorImageWrapper = styled.div`
  display: inline-block;
  margin-left: 5px;
`;

const SelectorImage = styled.img`
  vertical-align: middle;
  transition: 0.2s transform ease;
`;

export interface MenuDowndownDataCatItem {
  title: string;
  link: string;
  external?: boolean;
  className?: string;
}

export interface MenuDowndownDataCat {
  categoryName: string;
  categoryLinks: MenuDowndownDataCatItem[];
}

interface MenuDowndownItemProps {
  menuName: string;
  linkName: string;
  itemData: MenuDowndownDataCat[];
  navButtonClick: () => void;
  openStateProp: boolean;
}

interface MenuDowndownItemState {
  // isOpen: boolean;
}

export class MenuDowndownItem extends React.Component<
  MenuDowndownItemProps,
  MenuDowndownItemState
> {
  constructor(props: MenuDowndownItemProps) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  public onNavBtnClick() {
    this.props.navButtonClick();
  }

  public render() {
    const btnAriaLabel = this.props.openStateProp ? 'close menu' : 'open menu';
    const dropdownDivClass = this.props.openStateProp
      ? 'dropdown open'
      : 'dropdown';

    const categoriesHtml = this.props.itemData.map(cat => {
      const linksHtml = cat.categoryLinks.map(l => {
        const className = `column-link ${l.className}`;

        if (l.external) {
          return (
            <a className={className} href={l.link} key={l.link}>
              {l.title}
            </a>
          );
        } else {
          return (
            <Link className={className} to={l.link} key={l.link}>
              {l.title}
            </Link>
          );
        }
      });
      return (
        <DropdownContentColumn className="column" key={cat.categoryName}>
          <h3>{cat.categoryName}</h3>
          {linksHtml}
        </DropdownContentColumn>
      );
    });

    return (
      <DropdownContainer className={dropdownDivClass}>
        <MenuLinkButton
          onClick={() => this.onNavBtnClick()}
          aria-label={btnAriaLabel}
          className="menu-link-button"
        >
          {this.props.linkName}
          <SelectorImageWrapper>
            <SelectorImage
              alt="selector arrow"
              className="selector-img noselect"
              src="/img/arrow.png"
            />
          </SelectorImageWrapper>
        </MenuLinkButton>
        <DropdownConent className="dropdown-content">
          <DropdownContentHeader className="header">
            <h2>{this.props.menuName}</h2>
          </DropdownContentHeader>
          <DropdownContentRow>{categoriesHtml}</DropdownContentRow>
        </DropdownConent>
      </DropdownContainer>
    );
  }
}
