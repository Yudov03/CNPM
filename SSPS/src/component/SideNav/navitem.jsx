import React from "react";
import styled from "styled-components";

const NavItem = ({ icon, text, isActive }) => {
  return (
    <NavItemWrapper isActive={isActive}>
      {isActive && <ActiveIndicator />}
      <NavIcon src={icon} alt={`${text} icon`} />
      <NavText>{text}</NavText>
    </NavItemWrapper>
  );
};

const NavItemWrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 17px;
  color: ${props => props.isActive ? "#3497f9" : "inherit"};
  margin-top: ${props => props.isActive ? "39px" : "40px"};
  cursor: pointer;

  &:first-child {
    margin-top: 0;
  }
`;

const ActiveIndicator = styled.div`
  background-color: #3497f9;
  align-self: stretch;
  width: 5px;
  height: 51px;
`;

const NavIcon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
  align-self: start;
`;

const NavText = styled.span`
  flex-grow: 1;
`;

export default NavItem;