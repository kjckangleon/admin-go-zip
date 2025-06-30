import React from "react";
import styled from "styled-components";
import { generateIcon, Icon } from "../../settings/generate-icon";
import { Paragraph } from "../HomeSloganSection";
import { GRAY_BACKGROUND } from "../../settings/colors";
import { gap } from "../../settings/sizing";

export const ImageWithDescriptionCard = (props) => {
  const { text, image } = props;
  return (
    <Container>
      <Icon src={generateIcon(image)} />
      <Paragraph>{text}</Paragraph>
    </Container>
  );
};

const Container = styled.div`
  width: 33.33%;
  background-color: ${GRAY_BACKGROUND};
  border-radius: 40px;
  box-sizing: border-box;
  padding: ${gap}px;
`;
