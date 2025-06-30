import React from "react";
import styled from "styled-components";
import { ORANGE } from "../settings/colors";

const ContactForm = () => (
  <FormSection>
    <h2>Contact Us</h2>
    <form>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <textarea placeholder="Message" required></textarea>
      <SendButton type="submit">Send</SendButton>
    </form>
  </FormSection>
);

const SendButton = styled.button`
  padding: 1rem;
  background-color: ${ORANGE};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const FormSection = styled.section`
  padding: 4rem 2rem;
  text-align: center;

  form {
    max-width: 500px;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  input,
  textarea {
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

export default ContactForm;
