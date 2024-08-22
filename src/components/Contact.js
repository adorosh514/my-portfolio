import styled, { createGlobalStyle } from 'styled-components';
import React, { useState, useRef } from 'react';
import App from '../App';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    console.log('send email is working');
    e.preventDefault();

    console.log(form.current);
    emailjs
      .sendForm('service_m7ex1e9', 'template_amikp6b', form.current, {
        publicKey: 'fKMUTgouEYEQ8gMcm',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
  };

  return (
    <ContactFormWrapper>
      <ContactFormContainer>
        <Form>
          <ContactTitle>Get In Touch</ContactTitle>
          <ContactParagraph>
            Feel free to reach out to me through the contact form below to
            discuss potential collaborations, projects, or any inquiries you may
            have. I look forward to connecting with you and exploring how we can
            work together to bring your ideas to life. Thank you for visiting my
            portfolio!
          </ContactParagraph>
          <ContactForm ref={form} onSubmit={sendEmail}>
            <label for="fname">Full name:</label>
            <input
              type="text"
              id="fname"
              placeholder=""
              required
              name="user_name"
            />

            <label for="EA">Email address:</label>
            <input
              type="email"
              id="email"
              placeholder=""
              required
              name="user_email"
            />

            <label for="PhoneN">Phone number:</label>
            <input type="tel" id="PhoneN" placeholder="" required />

            <label for="Message">Message:</label>
            <input
              type="message"
              id="message"
              placeholder=""
              required
              name="message"
            />

            <button class="submit" type="Submit">
              Submit
            </button>
          </ContactForm>
        </Form>
      </ContactFormContainer>
      <div>
        <h6>Email: adorosh@live.ca</h6>
        <h6>Phone: 514-713-2511</h6>
      </div>
      <SocialMediaImageContainer>
        <a href="http://linkedin.com/in/anna-dorosh">
          <SocialsImage src="/media/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/adorosh514">
          <SocialsImage src="/media/github.png" alt="GitHub" />
        </a>
      </SocialMediaImageContainer>
    </ContactFormWrapper>
  );
};

const ContactFormWrapper = styled.div`
  width: 100%;
  @media (min-width: 500px) {
  }
  /* background-color: orange; */
  font-family: sans-serif;
`;

const ContactFormContainer = styled.div`
  @media (min-width: 500px) {
    display: flex;
    justify-content: center;
  }
  /* background-color: yellow; */
`;

const ContactParagraph = styled.p`
  font-family: sans-serif;
  font-weight: bold;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const ContactTitle = styled.h1`
  font-family: sans-serif;
  font-weight: bolder;
  font-size: 30px;
  display: flex;
  align-items: flex-start;
`;
const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-family: sans-serif;
  /* background-color: green; */
`;

const DivFormLabelHolder = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  background-color: black;
`;

const ButtonHolder = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: pink; */
`;
const button = styled.button`
  display: flex;
  /* background-color: purple; */
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  padding: 10%;
  align-content: space-between;
  background: white;
  border-radius: 5px;
  gap: 10px;
  /* background-color: brown; */
`;

const SocialMediaImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  /* background-color: teal; */
`;

const SocialsImage = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  gap: 10px;
  /* background-color: aqua; */
`;

export default Contact;
