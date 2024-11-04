import React from "react";
import styled from "styled-components";

const NavLogo = () => {
  return (
    <LogoWrapper>
      <LogoImage loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/39b01875d7164623805557885af3caf0/f6972f0b75853885fbb0cbf0bc9d69ff06b8d702eda0c0aa88648b183a111562?apiKey=39b01875d7164623805557885af3caf0&" alt="BK SSPS Logo" />
      <LogoText>BK SSPS</LogoText>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  align-self: center;
  display: flex;
  width: 135px;
  max-width: 100%;
  gap: 11px;
  color: #3497f9;
  letter-spacing: 1.6px;
  font: 700 20px Sarala, sans-serif;
`;

const LogoImage = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 36px;
`;

const LogoText = styled.span`
  transform: rotate(-0.005163154802990027rad);
  @media (max-width: 640px) {
    width: auto;
    flex-grow: 1;
    margin: auto;
  }
`;

export default NavLogo;