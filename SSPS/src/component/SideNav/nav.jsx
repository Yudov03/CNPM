import React from "react";
import styled from "styled-components";
import NavLogo from "./logo";
import NavItem from "./navitem";
import { navItems } from "./navdata";

const SideNavigation = () => {
  return (
    <Nav>
      <NavContent>
        <NavLogo />
        <NavItem
          icon="https://cdn.builder.io/api/v1/image/assets/39b01875d7164623805557885af3caf0/0507a930741523e90d396145561690f21fc3e000e02e5cfedda12bd3d9ec6640?apiKey=39b01875d7164623805557885af3caf0&"
          text="Bảng điều khiển"
          isActive={true}
        />
        <NavList>
          {navItems.map((item, index) => (
            <NavItem key={index} icon={item.icon} text={item.text} />
          ))}
        </NavList>
      </NavContent>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  max-width: 213px;
  flex-direction: column;
  overflow: hidden;
  font: 600 16px Segoe UI, sans-serif;
`;

const NavContent = styled.div`
  background-color: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 40px 0;
`;

const NavList = styled.ul`
  display: flex;
  margin-top: 25px;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  color: var(--Grey-500, #7f8f98);
  padding: 0 25px;
  list-style-type: none;
`;

export default SideNavigation;