import React from "react";
import styled from "styled-components";
import DropdownMenu from "../DropDown/DropdownMenu";
import LoginButton from "../Buttons/LoginButton";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/Store";


const HeaderWrapper = styled.header`
  padding: 1rem 2rem;
  background-color:rgb(240, 240, 240);
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoImage = styled.img`
  width: 200px;
  height: 60px;
  object-fit: contain;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;



const Header: React.FC = () => {

  const dropdownItems = useSelector((state: RootState) => state.dropdown.dropdownItems);


  return (
    <HeaderWrapper>
      <LogoWrapper>
        <LogoImage src='/public/Logo.png' alt='logo' />
      </LogoWrapper>

      <Nav>
        {dropdownItems.map((dropdown, index) => (
          <DropdownMenu
            key={index}
            label={dropdown.label}
            items={dropdown.items}
          />
        ))}
      </Nav>


      <LoginButton>ورود</LoginButton>
    </HeaderWrapper>
  );
};

export default Header;
