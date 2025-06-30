import React from "react";
import styled from "styled-components";
import { gap } from "../../../settings/sizing";
import { DARK_PURPLE, ORANGE, PURPLE } from "../../../settings/colors";
import { TRANSLATION } from "../../../translation/translation";
import { Title } from "./StudentTestimonials";

const WhoWeAre = () => {
  const lang = localStorage.getItem("lang") || "en";
  return (
    <HeroSection>
      <Title>{TRANSLATION?.lets_get_to_know_each_other[lang]}</Title>
      <H1>{TRANSLATION?.who_are_we[lang]}</H1>
      <Paragraph>{TRANSLATION?.your_uk_study_partner[lang]}</Paragraph>
      <Paragraph style={{ marginTop: 0 }}>
        {TRANSLATION?.we_are_a_team[lang]}
      </Paragraph>
      <PrimaryButton>Read more</PrimaryButton>
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

export default WhoWeAre;
