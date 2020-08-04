import React from "react";
import {
  Wrapper,
  Title,
  SectionsContainer,
  LeftSection,
  RightSection,
  Paragraph,
  Form,
  InputGroup,
  Label,
  InputField,
  TextArea,
  FormButton,
  SocialContainer,
  SocialLinksContainer,
  SocialLink,
  SocialText,
} from "./index.style";
import FacebookIcon from "../../static/FacebookIcon.svg";
import InstagramIcon from "../../static/InstagramIcon.svg";
import TwitterIcon from "../../static/TwitterIcon.svg";
import EmailIcon from "../../static/EmailIcon.svg";
import LinkedIcon from "../../static/LinkedIcon.svg";
import ResumeIcon from "../../static/ResumeIcon.svg";

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
            <SocialLinksContainer>
              <SocialLink href="https://www.facebook.com/3hdhani">
                <FacebookIcon />
              </SocialLink>
              <SocialLink href="https://twitter.com/AhdHani_js">
                <TwitterIcon />
              </SocialLink>
              <SocialLink href="https://www.instagram.com/AhdHani_Dev/">
                <InstagramIcon />
              </SocialLink>
              <SocialLink href="mailto:ahdhani0@gmail.com">
                <EmailIcon />
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/ahdradwan/">
                <LinkedIcon />
              </SocialLink>
              <SocialLink href="https://docs.google.com/document/d/e/2PACX-1vQYZTL_UdqBG68IrTW29-gu8pTq0q0y1iCxm_ulThXbXqCtWcLk64xzhLW4YJ2FicSIDcOROBtIimqq/pub">
                <ResumeIcon />
              </SocialLink>
            </SocialLinksContainer>
            <SocialText>@ahdhani</SocialText>
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
