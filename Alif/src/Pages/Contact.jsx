import React from "react";
import styled from "styled-components";

const Contact = () => {
  return (
    <Container>
      <Title>Contact Us</Title>
      <ContactForm>
        <FormField>
          <Label>Your Name</Label>
          <Input type="text" placeholder="Enter your name" />
        </FormField>
        <FormField>
          <Label>Your Email</Label>
          <Input type="email" placeholder="Enter your email" />
        </FormField>
        <FormField>
          <Label>Your Message</Label>
          <TextArea placeholder="Enter your message" />
        </FormField>
        <Button>Send Message</Button>
      </ContactForm>
    </Container>
  );
};

export default Contact;

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

const ContactForm = styled.form`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  color: #333;
  background-color: #f9f9f9;

  &:focus {
    outline: none;
    border: 1px solid #6e00ff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1rem;
  color: #333;
  background-color: #f9f9f9;
  height: 150px;

  &:focus {
    outline: none;
    border: 1px solid #6e00ff;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #6e00ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #9c00ff;
  }
`;
