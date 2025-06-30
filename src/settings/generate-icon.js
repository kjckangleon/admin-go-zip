import styled from "styled-components";
import img1 from "../assets/images/img1.png";
import w1 from "../assets/images/w1.png";
import w2 from "../assets/images/w2.png";
import w3 from "../assets/images/w3.png";
import w4 from "../assets/images/w4.png";
import w5 from "../assets/images/w5.png";
import w6 from "../assets/images/w6.png";
import w7 from "../assets/images/w7.png";
import w8 from "../assets/images/w8.png";
import w9 from "../assets/images/w9.png";
import Logo from "../assets/images/Logo.png";

export const generateIcon = (icon) => {
  switch (icon) {
    case "img1":
      return img1;
    case "w1":
      return w1;
    case "w2":
      return w2;
    case "w3":
      return w3;
    case "w4":
      return w4;
    case "w5":
      return w5;
    case "w6":
      return w6;
    case "w7":
      return w7;
    case "w8":
      return w8;
    case "w9":
      return w9;
    case "Logo":
      return Logo;

    default:
      return "";
  }
};

export const Icon = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 40px;
`;
