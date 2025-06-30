import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";
import {
  PURPLE,
  DARK_PURPLE,
  LIGHT_ORANGE,
  LIGHT_ORANGE_BACKGROUND,
  GRAY_BACKGROUND,
} from "settings/colors";
import { TRANSLATION } from "translation/translation";
import w1 from "assets/images/w1.png";
import w2 from "assets/images/w2.png";
import w3 from "assets/images/w3.png";
import w4 from "assets/images/w4.png";
import w5 from "assets/images/w5.png";

const BachelorPage = () => {
  const lang = localStorage.getItem("lang") || "en";

  return (
    <PageWrapper>
      <Helmet>
        <title>{TRANSLATION?.bachelor_title[lang]}</title>
      </Helmet>

      <Hero>
        <h1>{TRANSLATION?.bachelor_title[lang]}</h1>
        <p>{TRANSLATION?.bachelor_intro[lang]}</p>
      </Hero>

      <Container>
        <Section>
          <TextBlock>
            <h2>{TRANSLATION?.bachelor_why_title[lang]}</h2>
            <ul>
              {TRANSLATION?.bachelor_why_list[lang].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </TextBlock>
          <ImageBlock>
            <StyledImage src={w1} alt="Why study in the UK" />
          </ImageBlock>
        </Section>
      </Container>

      <FullWidthText>
        <h2>{TRANSLATION?.bachelor_value_title[lang]}</h2>
        <p>{TRANSLATION?.bachelor_value_text[lang]}</p>
      </FullWidthText>

      <FactGrid>
        <FactCard>
          <h4>⏳ Duration</h4>
          <p>
            Studies last <strong>3–4 years</strong> <br />
            (<em>5–6 years</em> for fields like medicine or engineering)
          </p>
        </FactCard>
        <FactCard>
          <h4>🏛️ Institutions</h4>
          <p>
            Programmes offered at <strong>130+ universities</strong> and numerous
            colleges
          </p>
        </FactCard>
        <FactCard>
          <h4>🎓 Degree Types</h4>
          <ul>
            <li>BA – Bachelor of Arts</li>
            <li>BSc – Bachelor of Science</li>
            <li>BEd – Bachelor of Education</li>
            <li>BEng – Bachelor of Engineering</li>
          </ul>
        </FactCard>
      </FactGrid>

      <Container>
        <Section>
          <ImageBlock>
            <StyledImage src={w3} alt="Flexible study formats" />
          </ImageBlock>
          <TextBlock>
            <h2>{TRANSLATION?.bachelor_flex_title[lang]}</h2>
            <p>{TRANSLATION?.bachelor_flex_text[lang]}</p>
          </TextBlock>
        </Section>
      </Container>

      <Container>
        <Section>
          <TextBlock>
            <h2>{TRANSLATION?.bachelor_popular_title[lang]}</h2>
            <ol>
              {TRANSLATION?.bachelor_popular_list[lang]?.map((course, i) => (
                <li key={i}>{course}</li>
              ))}
            </ol>
          </TextBlock>
          <ImageBlock>
            <StyledImage src={w2} alt="Popular Courses" />
          </ImageBlock>
        </Section>
      </Container>

      <Container>
        <Section>
          <ImageBlock>
            <StyledImage src={w5} alt="Learning Experience" />
          </ImageBlock>
          <TextBlock>
            <h2>{TRANSLATION?.bachelor_experience_title[lang]}</h2>
            <ul>
              {TRANSLATION?.bachelor_experience_list[lang].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </TextBlock>
        </Section>
      </Container>

      <FullWidthText>
        <h2>{TRANSLATION?.bachelor_intern_title[lang]}</h2>
        <p>{TRANSLATION?.bachelor_intern_text[lang]}</p>
        <ul>
          {TRANSLATION?.bachelor_intern_list[lang].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </FullWidthText>

      <Container>
        <Section>
          <TextBlock>
            <h2>{TRANSLATION?.bachelor_apply_title[lang]}</h2>
            <p>{TRANSLATION?.bachelor_apply_text[lang]}</p>
          </TextBlock>
          <ImageBlock>
            <StyledImage src={w4} alt="Internship opportunities" />
          </ImageBlock>
        </Section>
      </Container>

      <Container>
        <Section>
          <ImageBlock>
            <StyledImage src={w2} alt="Finance" />
          </ImageBlock>
          <TextBlock>
            <h2>{TRANSLATION?.bachelor_finance_title[lang]}</h2>
            <p>{TRANSLATION?.bachelor_finance_text[lang]}</p>
          </TextBlock>
        </Section>
      </Container>

      <Container>
        <Section>
          <TextBlock>
            <h2>{TRANSLATION?.bachelor_career_title[lang]}</h2>
            <p>{TRANSLATION?.bachelor_career_text[lang]}</p>
            <ul>
              {TRANSLATION?.bachelor_skills_list[lang].map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </TextBlock>
          <ImageBlock>
            <StyledImage src={w1} alt="Career title" />
          </ImageBlock>
        </Section>
      </Container>

      <FullWidthText>
        <h2>{TRANSLATION?.bachelor_faq_title?.[lang]}</h2>
        <ul>
          {TRANSLATION?.bachelor_faq_list?.[lang]?.map((faq, i) => {
            const [question, answer] = faq.split("\n");
            return (
              <li key={i}>
                <strong>{question.replace(/^\*\*/, "").replace(/\*\*$/, "")}</strong>
                <br />
                {answer}
              </li>
            );
          })}
        </ul>
      </FullWidthText>
    </PageWrapper>
  );
};

export default BachelorPage;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageWrapper = styled.div`
  background: #fff;
  color: ${DARK_PURPLE};
`;

const Hero = styled.section`
  padding: 5rem 2rem;
  text-align: center;
  background: ${LIGHT_ORANGE_BACKGROUND};

  h1 {
    color: ${PURPLE};
    font-size: 2.75rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
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

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 1rem;
  max-width: 500px;
`;

const FullWidthText = styled.section`
  padding: 4rem 14rem;
  background: ${LIGHT_ORANGE};
  text-align: center;

  h2 {
    color: ${PURPLE};
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    max-width: 900px;
    margin: 0 auto;
    font-size: 1.1rem;
  }

  ul {
    text-align: left;
    max-width: 800px;
    margin: 2rem auto 0;
    line-height: 1.6;
    padding-left: 1.5rem;
  }
`;

const FactGrid = styled.section`
  padding: 4rem 14rem;
  background: #fff;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const FactCard = styled.div`
  background: ${GRAY_BACKGROUND};
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease;

  h4 {
    color: ${PURPLE};
    font-size: 1.3rem;
    margin-bottom: 0.75rem;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.6;
  }

  ul {
    margin-top: 0.5rem;
    padding-left: 1.2rem;
    line-height: 1.6;
    font-size: 1.05rem;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
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