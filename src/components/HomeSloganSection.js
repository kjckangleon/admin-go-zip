import React from "react";
import styled from "styled-components";
import { DARK_PURPLE, ORANGE, PURPLE } from "../settings/colors";
import { gap } from "../settings/sizing";
import { TRANSLATION } from "../translation/translation";

const HomeSloganSection = () => {
  const lang = localStorage.getItem("lang") || "en";
  return (
    <HeroSection>
      <H1>{TRANSLATION?.slogan[lang]}</H1>
      <Paragraph>We’re here to help every step of the way</Paragraph>
      <PrimaryButton>Get Started</PrimaryButton>
    </HeroSection>
  );
};

export const H1 = styled.h1`
  color: ${PURPLE};
  font-size: 3rem;
  font-weight: 700;
`;

export const H2 = styled.h2`
  color: ${PURPLE};
  font-size: 2rem;
  font-weight: 700;
`;

export const H3 = styled.h3`
  color: ${PURPLE};
  font-size: 1rem;
  font-weight: 700;
`;

export const Paragraph = styled.h1`
  color: ${DARK_PURPLE};
  font-size: 1.25rem;
  margin: 1rem 0;
`;

const HeroSection = styled.div`
  position: relative;
  background: url("/assets/hero-bg.jpg") center/cover no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--text-on-primary);
  text-align: center;
  width: 50%;
  padding: ${gap}px;
  box-sizing: border-box;
`;

export const PrimaryButton = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  background: ${ORANGE};
  color: var(--text-on-primary);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

export default HomeSloganSection;
