import React from "react";
import styled from "styled-components";
import { PURPLE } from "../settings/colors";
import { generateIcon, Icon } from "../settings/generate-icon";
import LanguageDropdown from "./shared/LanguageDropdown";
import { NavButton } from "./shared/NavButton";

const Header = () => {
  const [language, setLanguage] = React.useState(
    localStorage.getItem("lang") || "en"
  );

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    localStorage.clear();
    localStorage.setItem("lang", e.target.value);
    location.reload();
  };
  return (
    <Nav>
      <Icon
        src={generateIcon("Logo")}
        style={{ height: "40px", width: "40px" }}
      />

      <div style={{ display: "flex", gap: "1rem" }}>
        <NavButton to="/home">Home</NavButton>
        <NavButton to="/courses">Courses</NavButton>
        <NavButton to="/study">Study</NavButton>
        <NavButton to="/finance">Finance</NavButton>
        <NavButton to="/refer-a-friend">Refer a friend</NavButton>
        <NavButton to="/contanct">Contanct</NavButton>
      </div>


      <LanguageDropdown value={language} onChange={handleLanguageChange} />
    </Nav>
  );
};

const Nav = styled.nav`
  padding: 1rem 2rem;
  background: ${PURPLE};
  color: white;
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1000; /* make sure it stays on top */
`;

const Logo = styled.h1`
  font-size: 1.5rem;
`;

export default Header;
