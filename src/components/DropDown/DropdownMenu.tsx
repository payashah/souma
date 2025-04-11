import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setActiveDropdown } from "./DropDownSlice";
import { RootState } from "../../Redux/Store";


interface Props {
  label: string;
  items: string[];
}

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  
`;

const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease;
  
  &:hover {
    color: #2c7be5;
  }
`;

const Arrow = styled.span<{ open: boolean }>`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid currentColor;
  transform: ${({ open }) => (open ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.2s ease;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 20%;
  background-color:rgb(188, 188, 188);
  color:rgb(255, 255, 255);
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  z-index: 100;
  min-width: 180px;
  padding: 0.5rem 0;
  overflow: hidden;
  text-align: right;
`;

const Item = styled.div`
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 1rem;
  white-space: nowrap;
  &:hover {
    background-color: rgb(225, 221, 221);
    color: #2c7be5;
  }
  }
`;

// const HoverZone = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-end;
// `;

const DropdownMenu: React.FC<Props> = ({ label, items }) => {

  const activeDropdown = useSelector((state: RootState) => state.dropdown.activeDropdown)
  const dispatch = useDispatch()
  const isOpen = activeDropdown === label


  // const [open, setOpen] = useState(false);

  const handleMouseEnter = () => {
    dispatch(setActiveDropdown(label));
  };

  const handleMouseLeave = () => {
    dispatch(setActiveDropdown(null));
  };

  return (
    <Wrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}     >
      {/* <HoverZone> */}
      <LabelWrapper>
        <span>{label}</span>
        <Arrow open={isOpen}></Arrow>
      </LabelWrapper>

      {isOpen && (
        <Dropdown>
          {items.map((item, index) => (
            <Item key={index}>{item}</Item>
          ))}
        </Dropdown>
      )}
      {/* </HoverZone> */}
    </Wrapper>
  );
};

export default DropdownMenu;
