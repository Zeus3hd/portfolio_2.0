import React from "react";
import {
  Wrapper,
  Title,
  ServicesContainer,
  SingleServiceContainer,
  ServiceImg,
  ServiceTitle,
  ServiceDesc,
  ServiceParagraph,
  ServiceTextContainer,
} from "./index.style";
import webImg from "../../imgs/services_web.png";
import mobileImg from "../../imgs/services_mobile.png";
import ecommerceImg from "../../imgs/services_ecommerce.png";
const Services = () => {
  return (
    <Wrapper>
      <Title>I Make:</Title>
      <ServicesContainer>
        <SingleServiceContainer>
          <ServiceImg bg={webImg} />
          <ServiceTextContainer>
            <ServiceTitle>Websites & Web Apps</ServiceTitle>
            <ServiceDesc>
              <ServiceParagraph>
                I Love creating websites that are easy to look at and enjoyable
                to navigate.
              </ServiceParagraph>
              <ServiceParagraph>- Fast</ServiceParagraph>
              <ServiceParagraph>- Secure</ServiceParagraph>
              <ServiceParagraph>- Fun</ServiceParagraph>
              <ServiceParagraph>- Expressive</ServiceParagraph>
            </ServiceDesc>
          </ServiceTextContainer>
        </SingleServiceContainer>
        <SingleServiceContainer>
          <ServiceImg bg={mobileImg} />
          <ServiceTextContainer>
            <ServiceTitle>Mobile Apps iOS/Android</ServiceTitle>
            <ServiceDesc>
              <ServiceParagraph>
                You’ve got an idea and you want an app for it ? I’m your guy.
              </ServiceParagraph>
              <ServiceParagraph>
                My Apps are cross platform so you don’t have to worry about what
                platform your users are using whether they’re iOS or Android.
              </ServiceParagraph>
            </ServiceDesc>
          </ServiceTextContainer>
        </SingleServiceContainer>
        <SingleServiceContainer>
          <ServiceImg bg={ecommerceImg} />
          <ServiceTextContainer>
            <ServiceTitle>E-Commerce & CMS</ServiceTitle>
            <ServiceDesc>
              <ServiceParagraph>
                Ecommerce and CMS are great ways to boost your business and/or
                your audience.
              </ServiceParagraph>
              <ServiceParagraph>
                It will help you reach your customers / aduience and help them
                reach you.
              </ServiceParagraph>
            </ServiceDesc>
          </ServiceTextContainer>
        </SingleServiceContainer>
      </ServicesContainer>
    </Wrapper>
  );
};

export default Services;
