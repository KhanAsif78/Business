import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Title>About Us</Title>
      <Content>
        <TextSection>
          <Heading>Our Mission</Heading>
          <Paragraph>
            At ⚡Consultancy, we aim to empower businesses by providing
            actionable insights, strategies, and solutions that drive growth and
            sustainability. Our mission is to help our clients overcome
            challenges and seize new opportunities.
          </Paragraph>
        </TextSection>
        <TextSection>
          <Heading>Our Vision</Heading>
          <Paragraph>
            We envision becoming the leading consultancy, helping businesses
            worldwide scale through innovation, data-driven decisions, and
            strategic partnerships.
          </Paragraph>
        </TextSection>
      </Content>
    </Container>
  );
};

export default About;

const Container = styled.div`
  padding: 60px 20px;
  text-align: center;
  background: #f4f4f9;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #6e00ff;
  margin-bottom: 40px;
  font-family: "Arial", sans-serif;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
`;

const TextSection = styled.div`
  width: 45%;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #666;
`;
