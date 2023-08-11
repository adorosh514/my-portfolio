import styled, { createGlobalStyle } from 'styled-components';
import React from 'react';
import App from '../App';

const Contact = () => {
  return (
    <div>
      <div>
        <h6>Email: adorosh@live.ca</h6>
        <h6>Phone: 514-713-2511</h6>
      </div>
      <SocialMediaImageContainer>
        <SocialsImage src="/media/linkedin.png" alt="LinkedIn" />
        <SocialsImage src="/media/github.png" alt="GitHub" />
      </SocialMediaImageContainer>
    </div>
  );
};

const SocialMediaImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px;
  height: 50px;
  width: 50px;
`;

const SocialsImage = styled.img`
  margin-top: 100px;
  height: 50px;
  width: 50px;
`;

export default Contact;
