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
  ServiceInfoContainer,
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
          <ServiceImg src={webImg} />
          <ServiceInfoContainer>
            <ServiceTitle>Websites & Web Apps</ServiceTitle>
            <ServiceDesc>
              <ServiceParagraph>
                I Love creating websites that are easy to look at and enjoyable
                to navigate.
              </ServiceParagraph>
              <ServiceParagraph>
                I Love creating websites that are easy to look at and enjoyable
                to navigate.
              </ServiceParagraph>
            </ServiceDesc>
          </ServiceInfoContainer>
        </SingleServiceContainer>
        <SingleServiceContainer>
          <ServiceImg src={mobileImg} />
          <ServiceInfoContainer>
            <ServiceTitle>Mobile Apps Android/iOS</ServiceTitle>
            <ServiceDesc>
              <ServiceParagraph>
                You’ve got an idea and you want an app for it ? I’m your guy.
              </ServiceParagraph>
              <ServiceParagraph>
                My Apps are cross platform so you don’t have to worry about what
                platform your users are using whether they’re iOS or Android.
              </ServiceParagraph>
            </ServiceDesc>
          </ServiceInfoContainer>
        </SingleServiceContainer>
        <SingleServiceContainer>
          <ServiceImg src={ecommerceImg} />
          <ServiceInfoContainer>
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
          </ServiceInfoContainer>
        </SingleServiceContainer>
      </ServicesContainer>
    </Wrapper>
  );
};

export default Services;
