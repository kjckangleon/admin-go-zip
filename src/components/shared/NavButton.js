import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ORANGE, PURPLE, LIGHT_ORANGE_BACKGROUND } from "../../settings/colors";

const NavButton = ({ to, children, dropdownItems = [] }) => {
  const hasDropdown = dropdownItems.length > 0;

  return (
    <Wrapper>
      <ButtonLink to={to}>{children}</ButtonLink>

      {hasDropdown && (
        <DropdownMenu>
          {dropdownItems.map((item) => (
            <DropdownItem key={item.to} to={item.to}>
              {item.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      )}
    </Wrapper>
  );
};

export default NavButton;

const Wrapper = styled.div`
  position: relative;

  &:hover > div {
    display: block;
  }
`;

const ButtonLink = styled(NavLink)`
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  color: white;
  text-decoration: none;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 6px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: ${ORANGE}22;
  }

  &.active {
    font-weight: bold;
    background-color: ${ORANGE}44;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  min-width: 200px;
  border-radius: 6px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  display: none;
  z-index: 100;
`;

const DropdownItem = styled(NavLink)`
  display: block;
  padding: 0.75rem 1rem;
  color: ${PURPLE};
  text-decoration: none;
  font-size: 0.95rem;

  &:hover {
    background-color: ${LIGHT_ORANGE_BACKGROUND};
  }
`;
