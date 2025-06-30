// NavButton.js or NavButton.tsx
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import {
  ORANGE,
} from "../../settings/colors";

export const NavButton = styled(NavLink)`
  padding: 0.5rem 1.25rem;
  font-size: 1rem;
  background: transparent;
  color: white;
  text-decoration: none;
  border: none;
  border-radius: 6px;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: ${ORANGE}22; /* light orange hover (translucent) */
  }

  &.active {
    background-color: ${ORANGE}44; /* deeper active highlight */
    font-weight: 600;
  }
`;
