import React from "react";
import {
  Wrapper,
  Title,
  SectionsContainer,
  LeftSection,
  RightSection,
  Paragraph,
  SocialContainer,
  SocialInfo,
  WhatsApp,
  SocialText,
  Gmail,
  Facebook,
  Twitter,
  Form,
  InputGroup,
  Label,
  InputField,
  TextArea,
  FormButton,
} from "./index.style";
const Contact = () => {
  return (
    <Wrapper>
      <Title>Let's Chat</Title>
      <SectionsContainer>
        <LeftSection>
          <Paragraph>
            I’d be happy to hear from you.. You can reach me at any of the
            following links or the contact form
          </Paragraph>
          <SocialContainer>
            <SocialInfo>
              <WhatsApp />
              <SocialText>+90 531 900 65 30</SocialText>
            </SocialInfo>
            <SocialInfo>
              <Gmail />
              <SocialText>ahdhani0@gmail.com</SocialText>
            </SocialInfo>
            <SocialInfo>
              <Facebook />
              <SocialText>/3hdhani</SocialText>
            </SocialInfo>
            <SocialInfo>
              <Twitter />
              <SocialText>@AhdHani_js</SocialText>
            </SocialInfo>
          </SocialContainer>
        </LeftSection>
        <RightSection>
          <Form>
            <InputGroup>
              <Label>Name</Label>
              <InputField />
            </InputGroup>
            <InputGroup>
              <Label>Email or Phone No.</Label>
              <InputField />
            </InputGroup>
            <InputGroup>
              <Label>Message</Label>
              <TextArea rows="6" />
            </InputGroup>
            <InputGroup>
              <FormButton>SEND</FormButton>
            </InputGroup>
          </Form>
        </RightSection>
      </SectionsContainer>
    </Wrapper>
  );
};

export default Contact;
