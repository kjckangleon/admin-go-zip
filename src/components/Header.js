import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { PURPLE } from "../settings/colors";
import { generateIcon, Icon } from "../settings/generate-icon";
import LanguageDropdown from "./shared/LanguageDropdown";
import NavButton from "./shared/NavButton";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "en");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    localStorage.clear();
    localStorage.setItem("lang", e.target.value);
    location.reload();
  };

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <Nav>
      <Left>
        <Icon src={generateIcon("Logo")} style={{ height: "40px", width: "40px" }} />
        <Burger onClick={() => setMenuOpen((prev) => !prev)}>
          <FaBars size={24} />
        </Burger>
      </Left>

      <Right open={menuOpen}>
        <NavButton to="/home">Home</NavButton>
        <NavButton to="/courses">Courses</NavButton>
        <NavButton
          to="/study"
          dropdownItems={[
            { label: "Year Zero", to: "/study/year-zero" },
            { label: "Bachelor", to: "/study/bachelor" },
            { label: "Master", to: "/study/master" },
          ]}
        >
          Study
        </NavButton>
        <NavButton
          to="/finance"
          dropdownItems={[
            { label: "Credit for tuition", to: "/finance/credit" },
            { label: "Maintenance loan", to: "/finance/loan" },
          ]}
        >
          Finance
        </NavButton>
        <NavButton to="/refer-a-friend">Refer a friend</NavButton>
        <NavButton to="/contact">Contact</NavButton>
        <LanguageDropdown value={language} onChange={handleLanguageChange} />
      </Right>
    </Nav>
  );
};

export default Header;

const Nav = styled.nav`
  background: ${PURPLE};
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Burger = styled.button`
  background: none;
  border: none;
  color: white;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    position: absolute;
    top: 72px;
    left: 0;
    right: 0;
    flex-direction: column;
    background: ${PURPLE};
    padding: 1rem 2rem;
    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;
