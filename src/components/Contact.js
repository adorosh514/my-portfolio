import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';
import App from '../App';

const Contact = () => {
  return (
    <ContactFormWrapper>
      <ContactFormContainer>
        <Form>
          <h1>Contact Form</h1>
          <ContactForm>
            <DivFormLabelHolder>
              <label for="fname">Full name:</label>
              <input
                type="text"
                id="fname"
                placeholder="John Hancock"
                required
              />
            </DivFormLabelHolder>
            <DivFormLabelHolder>
              <label for="EA">Email address:</label>
              <input
                type="email"
                id="email"
                placeholder="Banana@rama.ca"
                required
              />
            </DivFormLabelHolder>
            <DivFormLabelHolder>
              <label for="PhoneN">Phone number:</label>
              <input
                type="tel"
                id="PhoneN"
                placeholder="123-456-789"
                required
              />
            </DivFormLabelHolder>
            <DivFormLabelHolder>
              <label for="Message">Message:</label>
              <input type="message" id="message" placeholder="" required />
            </DivFormLabelHolder>
            <ButtonHolder>
              <button class="submit" type="submit">
                Submit
              </button>
            </ButtonHolder>
          </ContactForm>
        </Form>
      </ContactFormContainer>
      <div>
        <h6>Email: adorosh@live.ca</h6>
        <h6>Phone: 514-713-2511</h6>
      </div>
      <SocialMediaImageContainer>
        <SocialsImage src="/media/linkedin.png" alt="LinkedIn" />
        <SocialsImage src="/media/github.png" alt="GitHub" />
      </SocialMediaImageContainer>
    </ContactFormWrapper>
  );
};

const ContactFormWrapper = styled.div`
  width: 100%;
  @media (min-width: 500px) {
  }
`;

const ContactFormContainer = styled.div`
  @media (min-width: 500px) {
    display: flex;
    justify-content: center;
  }
`;

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DivFormLabelHolder = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: center;
`;
const button = styled.button`
  display: flex;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  padding: 10%;
  align-content: space-between;
  background: white;
  border-radius: 5px;
  gap: 10px;
`;

const SocialMediaImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

const SocialsImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  gap: 10px;
`;

export default Contact;
