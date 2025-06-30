import React from "react";

import styled from "styled-components";
import { DesktopPagePadding, gap, marginTop } from "../../../settings/sizing";
import { H2, H3, Paragraph } from "../../../components/HomeSloganSection";
import { PURPLE } from "../../../settings/colors";
import { TRANSLATION } from "../../../translation/translation";
import { ImageWithDescriptionCard } from "../../../components/shared/ImageWithDescriptionCard";

const SecondSection = () => {
  const lang = localStorage.getItem("lang") || "en";
  return (
    <SloganContainer>
      <NoHiddenCostContainer>
        <H2>{TRANSLATION?.no_hidden_cost[lang]}</H2>
      </NoHiddenCostContainer>
      <div style={{ textAlign: "center", marginTop: marginTop - 40 }}>
        <H2>{TRANSLATION?.study_abroad[lang]}</H2>
        <Paragraph>{TRANSLATION?.check_what_we_can_offer_you[lang]}</Paragraph>
        <TileContainer>
          <ImageWithDescriptionCard
            image="w1"
            text={TRANSLATION?.free_assistance[lang]}
          />
          <ImageWithDescriptionCard
            image="w2"
            text={TRANSLATION?.professional_advice[lang]}
          />
          <ImageWithDescriptionCard
            image="w3"
            text={TRANSLATION?.comprehensive_professional_assistance[lang]}
          />
        </TileContainer>
      </div>
    </SloganContainer>
  );
};

export default SecondSection;

const TileContainer = styled.div`
  display: flex;
  gap: ${gap}px;
`;

export const MainContainer = styled.div`
  padding: ${DesktopPagePadding}px;
  padding-top: 0;
`;

const NoHiddenCostContainer = styled.div`
  display: flex;
  border: 5px solid ${PURPLE};
  padding: 10px;
  border-radius: 32px;
  justify-content: center;
`;

const SloganRightImage = styled.div`
  width: 50%;
  border: 1px solid red;
`;

const SloganContainer = styled.div`
  align-items: center;
  box-sizing: border-box;
  margin-top: ${marginTop}px;
`;
