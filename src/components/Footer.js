import React from "react";
import styled from "styled-components";
import { PURPLE } from "../settings/colors";

const Footer = () => (
  <FooterWrapper>
    <p>© 2025 AdmitGo. All rights reserved.</p>
  </FooterWrapper>
);

const FooterWrapper = styled.footer`
  background-color: ${PURPLE};
  color: white;
  text-align: center;
  padding: 1rem;
`;

export default Footer;
