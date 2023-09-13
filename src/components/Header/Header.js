import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <Icon id='shopping-bag' />
          <Icon id='search' />
          <button onClick={() => setShowMobileMenu(true)}><Icon id='menu' /></button>
        </MobileNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media ${QUERIES.tablet} {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
  }
  @media ${QUERIES.phone} {
    border-top: 4px solid ${COLORS.gray[900]};
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media ${QUERIES.tablet} {
    display: none;
  }
  @media ${QUERIES.phone} {
    display: none;
  }
`;

const MobileNav = styled(Nav)`
  display: none;

  @media ${QUERIES.tablet} {
    display: flex;
    justify-content: flex-end;
    gap: 32px;
    width: 100%;
    // margin-left: auto;
  }
  @media ${QUERIES.phone} {
    display: flex;
    justify-content: flex-end;
    gap: 32px;
    width: 100%;
    // margin-left: auto;
  }
`

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
