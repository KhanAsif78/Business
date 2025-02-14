import React from "react";
import styled from "styled-components";

const Services = () => {
  return (
    <Container>
      <Title>Our Services</Title>
      <ServicesList>
        <ServiceCard>
          <Icon>⚡</Icon>
          <ServiceTitle>Consulting</ServiceTitle>
          <Description>
            Our expert consultants provide tailored strategies to enhance your
            business performance.
          </Description>
        </ServiceCard>
        <ServiceCard>
          <Icon>📊</Icon>
          <ServiceTitle>Market Research</ServiceTitle>
          <Description>
            We provide in-depth market analysis to help you understand trends
            and opportunities in your industry.
          </Description>
        </ServiceCard>
        <ServiceCard>
          <Icon>💼</Icon>
          <ServiceTitle>Business Development</ServiceTitle>
          <Description>
            Our business development team assists in finding new opportunities,
            partnerships, and revenue channels.
          </Description>
        </ServiceCard>
      </ServicesList>
    </Container>
  );
};

export default Services;

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

const ServicesList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;

const ServiceCard = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 250px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  color: #6e00ff;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #666;
`;
