import React from "react";
import styled from "styled-components";

const MenuItem = ({ icon, label, isActive, isLogout }) => {
  return (
    <ListItem $isActive={isActive} $isLogout={isLogout}>
      <Icon src={icon} alt={`${label} icon`} />
      <Label>{label}</Label>
    </ListItem>
  );
};

const ListItem = styled.li`
  display: flex;
  align-items: ${props => props.$isLogout ? "end" : "center"};
  gap: 17px;
  color: ${props => props.$isActive ? "#7f8f98" : "#7f8f98"};
  background-color: ${props => props.$isActive ? "rgba(52, 151, 249, 0.12)" : "transparent"};
  padding: ${props => props.$isActive ? "10px 20px" : "10px 25px"};
  margin-bottom: 20px;
  border-left: ${props => props.$isActive ? "5px solid #3497F9" : ""};
  cursor: pointer;
  transition: background-color 0.3s ease;
  flex-grow: ${props => props.$isLogout ? "1" : ""};
  height: ${props => props.$isLogout ? "21" : ""};
  &:hover {
    background-color: ${props => props.$isActive ? "rgba(52, 151, 249, 0.5)" : "#f0f0f0"};
  }
`;

const Icon = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 20px;
`;
const Label = styled.span`
  flex-grow: 1;
`;

export default MenuItem;