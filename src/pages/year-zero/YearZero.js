import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import {
  ORANGE,
  LIGHT_ORANGE,
  LIGHT_ORANGE_BACKGROUND,
  PURPLE,
  DARK_PURPLE,
  GRAY_BACKGROUND,
} from "settings/colors";
import { TRANSLATION } from "translation/translation";

import image1 from "assets/images/w1.png";
import image2 from "assets/images/w2.png";
import image3 from "assets/images/w3.png";
import image4 from "assets/images/w4.png";
import image5 from "assets/images/w5.png";
import image6 from "assets/images/w6.png";

const FoundationYearPage = () => {
  const lang = localStorage.getItem("lang") || "en";

  const sections = [
    {
      title: TRANSLATION?.foundation_section_1_title[lang],
      text: TRANSLATION?.foundation_section_1_text[lang],
      image: image1,
    },
    {
      title: TRANSLATION?.foundation_section_2_title[lang],
      list: TRANSLATION?.foundation_section_2_list[lang],
      image: image2,
      reverse: true,
    },
    {
      title: TRANSLATION?.foundation_section_3_title[lang],
      list: TRANSLATION?.foundation_section_3_list[lang],
      image: image3,
    },
    {
      title: TRANSLATION?.foundation_section_4_title[lang],
      list: TRANSLATION?.foundation_section_4_list[lang],
      image: image4,
      reverse: true,
    },
    {
      title: TRANSLATION?.foundation_section_5_title[lang],
      text: TRANSLATION?.foundation_section_5_text[lang],
      image: image5,
    },
    {
      title: TRANSLATION?.foundation_section_6_title[lang],
      text: TRANSLATION?.foundation_section_6_text[lang],
      image: image6,
      reverse: true,
    },
  ];

  return (
    <PageWrapper>
      <Helmet>
        <title>{TRANSLATION?.foundation_year_title[lang]}</title>
      </Helmet>

      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <h1>{TRANSLATION?.foundation_year_title[lang]}</h1>
          <HeroIntro>
            <p>{TRANSLATION?.foundation_year_intro[lang]}</p>
            <ul>
              <li>{TRANSLATION?.foundation_reason_1[lang]}</li>
              <li>{TRANSLATION?.foundation_reason_2[lang]}</li>
              <li>{TRANSLATION?.foundation_reason_3[lang]}</li>
              <li>{TRANSLATION?.foundation_reason_4[lang]}</li>
            </ul>
          </HeroIntro>
          <CallToActionButton>
            {TRANSLATION?.foundation_cta[lang]}
          </CallToActionButton>
        </HeroContent>
      </HeroSection>

      <AltBackground>
        <Container>
          {sections.map(({ title, text, list, image, reverse }, i) => (
            <Section key={i} reverse={reverse}>
              <ImageBlock>
                <ImageWithFallback src={image} alt={title} title={title} />
              </ImageBlock>
              <TextBlock>
                <h2>{title}</h2>
                {text && <p>{text}</p>}
                {list && <ul>{list.map((li, i) => <li key={i}>{li}</li>)}</ul>}
              </TextBlock>
            </Section>
          ))}
        </Container>
      </AltBackground>

      <Container>
        <HighlightSection>
          <h2>{TRANSLATION?.foundation_why_title[lang]}</h2>
          <ul>
            <li>🎓 {TRANSLATION?.foundation_why_1[lang]}</li>
            <li>🇬🇧 {TRANSLATION?.foundation_why_2[lang]}</li>
            <li>📘 {TRANSLATION?.foundation_why_3[lang]}</li>
            <li>💪 {TRANSLATION?.foundation_why_4[lang]}</li>
            <li>🌍 {TRANSLATION?.foundation_why_5[lang]}</li>
          </ul>
        </HighlightSection>

        <CallToAction>
          <h2>{TRANSLATION?.foundation_easy_title[lang]}</h2>
          <p>{TRANSLATION?.foundation_easy_desc[lang]}</p>
          <CallToActionButton>
            {TRANSLATION?.foundation_easy_cta[lang]}
          </CallToActionButton>
        </CallToAction>
      </Container>
    </PageWrapper>
  );
};

export default FoundationYearPage;

// === Subcomponents ===
const ImageWithFallback = ({ src, alt, title }) => {
  const [error, setError] = useState(false);
  return error ? (
    <ImageFallback role="img" aria-label={`Image placeholder for ${title}`}>
      {`Image: ${title}`}
    </ImageFallback>
  ) : (
    <img src={src} alt={alt} loading="lazy" onError={() => setError(true)} />
  );
};

// === Styled Components ===
const PageWrapper = styled.div`
  background: #ffffff;
  font-family: 'Segoe UI', sans-serif;
`;

const AltBackground = styled.div`
  background: ${GRAY_BACKGROUND};
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`;

const HeroSection = styled.section`
  background: ${LIGHT_ORANGE_BACKGROUND};
  color: ${DARK_PURPLE};
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0.3));
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${PURPLE};
  }
`;

const HeroIntro = styled.div`
  margin-top: 1.5rem;
  color: ${DARK_PURPLE};
  text-align: left;

  p {
    font-weight: 500;
    margin-bottom: 0.5rem;
  }

  ul {
    padding-left: 1.25rem;
    margin: 0;
  }

  li {
    margin-bottom: 0.25rem;
  }
`;

const CallToActionButton = styled.button`
  background: ${ORANGE};
  color: white;
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;

const Section = styled.section`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  align-items: stretch;
  margin-bottom: 3rem;
  background: white;
  border-radius: 1.25rem;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
  overflow: hidden;
  transition: transform 0.2s ease;
  @media (max-width: 768px) {
    flex-direction: column;
  }

  &:hover {
    transform: translateY(-2px);
  }
`;

const ImageBlock = styled.div`
  flex: 1;
  min-height: 300px;
  max-height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

const TextBlock = styled.div`
  flex: 1;
  padding: 2rem;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    color: ${PURPLE};
    margin-bottom: 1rem;
    font-size: 1.75rem;
  }

  p,
  ul {
    color: ${DARK_PURPLE};
    line-height: 1.75;
    padding-left: 10px;
  }
`;

const ImageFallback = styled.div`
  position: relative;
  background: ${LIGHT_ORANGE_BACKGROUND};
  border: 2px dashed ${ORANGE};
  color: ${DARK_PURPLE};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 1rem;
  min-height: 300px;
`;

const HighlightSection = styled.div`
  background: ${LIGHT_ORANGE_BACKGROUND};
  padding: 2rem;
  border-radius: 1rem;
  margin: 2rem 0;
  ul li {
    margin-bottom: 0.75rem;
  }
`;

const CallToAction = styled.div`
  background: ${LIGHT_ORANGE};
  text-align: center;
  padding: 3rem 2rem;
  border-radius: 1rem;
  h2 {
    color: ${PURPLE};
    margin-bottom: 1rem;
  }
  p {
    color: ${DARK_PURPLE};
  }
`;
