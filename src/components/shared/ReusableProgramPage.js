// === ReusableProgramPage.js ===
import React, { useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import { ORANGE, LIGHT_ORANGE, LIGHT_ORANGE_BACKGROUND, PURPLE, DARK_PURPLE, GRAY_BACKGROUND } from "settings/colors";

export const ReusableProgramPage = ({
  pageTitle,
  heroTitle,
  heroSubtitle,
  sections,
  supportTitle,
  supportText,
}) => {
  return (
    <PageWrapper>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <HeroSection>
        <HeroOverlay />
        <HeroContent>
          <h1>{heroTitle}</h1>
          <p>{heroSubtitle}</p>
        </HeroContent>
      </HeroSection>

      <AltBackground>
        <Container>
          {sections.map(({ title, text, list, img, reverse }, idx) => (
            <Section key={idx} reverse={reverse}>
              <ImageBlock>
                <ImageWithFallback src={img} alt={title} title={title} />
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
          <h2>{supportTitle}</h2>
          <p>{supportText}</p>
        </HighlightSection>
      </Container>
    </PageWrapper>
  );
};

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

const PageWrapper = styled.div`
  background: #ffffff;
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
