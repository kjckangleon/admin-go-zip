import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { LIGHT_ORANGE_BACKGROUND, PURPLE } from "../../../settings/colors";

const StudentTestimonials = () => {
  const testimonials = [
    {
      name: "Jessica Miller",
      role: "Student",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      stars: 5,
    },
    {
      name: "Alex Carter",
      role: "Student",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      stars: 5,
    },
    {
      name: "Michael Johnson",
      role: "Student",
      img: "https://randomuser.me/api/portraits/men/28.jpg",
      stars: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Section>
      <Title>Opinions</Title>
      <Subtitle>What do our students say?</Subtitle>

      <Slider {...settings}>
        {testimonials.map((t, i) => (
          <Card key={i}>
            <Avatar src={t.img} alt={t.name} />
            <Name>{t.name}</Name>
            <Stars>{"★★★★★".slice(0, t.stars)}</Stars>
            <Role>{t.role}</Role>
          </Card>
        ))}
      </Slider>
    </Section>
  );
};

export default StudentTestimonials;

const Section = styled.section`
  background-color: ${LIGHT_ORANGE_BACKGROUND};
  padding: 60px 20px;
  text-align: center;
  margin-top: 60px;
`;

export const Title = styled.p`
  color: #8268e2;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const Subtitle = styled.h2`
  color: ${PURPLE};
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 40px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  margin: 0 10px;
  text-align: center;
  max-width: 300px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 12px;
`;

const Name = styled.h4`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

const Stars = styled.div`
  color: #fbbf24;
  margin: 8px 0;
  font-size: 18px;
`;

const Role = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
`;
