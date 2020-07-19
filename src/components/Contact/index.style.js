import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/colors";
export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Title = styled.h2`
  font-size: 4rem;
  color: ${colors.dark};
  align-self: center;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

export const SectionsContainer = styled.div`
  display: flex;
  margin: 3rem;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  @media (max-width: 900px) {
    flex: auto;
  }
`;

export const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  @media (max-width: 900px) {
    flex: auto;
  }
`;

export const Paragraph = styled.p`
  font-size: 2rem;
  color: ${colors.dark};
  @media (max-width: 900px) {
    font-size: 1rem;
  }
`;
export const SocialContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
export const SocialInfo = styled.div`
  display: flex;
  align-items: center;
`;
export const SocialText = styled.p`
  color: ${colors.dark};
  @media (max-width: 900px) {
    display: none;
  }
`;

const WhatsAppWrapper = styled.svg`
  width: 1.5rem;
  margin-right: 0.5rem;
`;
export const WhatsApp = () => (
  <WhatsAppWrapper
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M42.75 7.18542C38 2.59375 31.75 0 25.0938 0C5.98958 0 -6.00625 20.6979 3.53333 37.1625L0 50L13.1979 46.5583C18.9479 49.6646 23.6583 49.3896 25.1062 49.5729C47.2583 49.5729 58.2854 22.7729 42.7187 7.26667L42.75 7.18542Z"
        fill="#ECEFF1"
      />
      <path
        d="M25.1396 45.3148L25.1271 45.3127H25.0938C18.4646 45.3127 14.2292 42.1731 13.8125 41.9919L6 44.0231L8.09375 36.4294L7.59583 35.6481C5.53333 32.3648 4.4375 28.5835 4.4375 24.6898C4.4375 6.37103 26.8229 -2.78939 39.7771 10.1585C52.7 22.971 43.6271 45.3148 25.1396 45.3148Z"
        fill="#4CAF50"
      />
      <path
        d="M36.473 29.8063L36.4542 29.9625C35.8271 29.65 32.773 28.1563 32.2042 27.95C30.9271 27.4771 31.2875 27.875 28.8355 30.6834C28.4709 31.0896 28.1084 31.1209 27.4896 30.8396C26.8646 30.5271 24.8584 29.8709 22.4834 27.7459C20.6334 26.0896 19.3917 24.0584 19.025 23.4334C18.4146 22.3792 19.6917 22.2292 20.8542 20.0292C21.0625 19.5917 20.9563 19.2479 20.8021 18.9375C20.6459 18.625 19.4021 15.5625 18.8813 14.3417C18.3813 13.125 17.8667 13.2792 17.4813 13.2792C16.2813 13.175 15.4042 13.1917 14.6313 13.9959C11.2688 17.6917 12.1167 21.5042 14.9938 25.5584C20.648 32.9584 23.6605 34.3209 29.1688 36.2125C30.6563 36.6854 32.0125 36.6188 33.0855 36.4646C34.2813 36.275 36.7667 34.9625 37.2855 33.4938C37.8167 32.025 37.8167 30.8063 37.6605 30.525C37.5063 30.2438 37.098 30.0875 36.473 29.8063Z"
        fill="#FAFAFA"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="50" height="50" fill="white" />
      </clipPath>
    </defs>
  </WhatsAppWrapper>
);

const GmailWrapper = styled.svg`
  width: 1.5rem;
  margin-right: 0.5rem;
`;

export const Gmail = () => (
  <GmailWrapper
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M43.75 6.25H6.25V43.75H43.75V6.25Z" fill="#ECEFF1" />
    <path d="M25 28.9438L43.75 43.75V14.5188L25 28.9438Z" fill="#CFD8DC" />
    <path
      d="M45.3125 6.25H43.75L25 21.0562L6.25 6.25H4.6875C2.1 6.25 0 8.35 0 10.9375V39.0625C0 41.65 2.1 43.75 4.6875 43.75H6.25V14.5187L25 28.9406L43.75 14.5156V43.75H45.3125C47.9 43.75 50 41.65 50 39.0625V10.9375C50 8.35 47.9 6.25 45.3125 6.25Z"
      fill="#F44336"
    />
  </GmailWrapper>
);

const FacebookWrapper = styled.svg`
  width: 1.5rem;
  margin-right: 0.5rem;
`;

export const Facebook = () => (
  <FacebookWrapper
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M43.75 0H6.25C2.80208 0 0 2.80208 0 6.25V43.75C0 47.1958 2.80208 50 6.25 50H43.75C47.1958 50 50 47.1958 50 43.75V6.25C50 2.80208 47.1958 0 43.75 0Z"
      fill="#3B5999"
    />
    <path
      d="M34.375 25V18.75C34.375 17.025 35.775 17.1875 37.5 17.1875H40.625V9.375H34.375C29.1958 9.375 25 13.5708 25 18.75V25H18.75V32.8125H25V50H34.375V32.8125H39.0625L42.1875 25H34.375Z"
      fill="white"
    />
  </FacebookWrapper>
);

const TwitterWrapper = styled.svg`
  width: 1.5rem;
  margin-right: 0.5rem;
`;

export const Twitter = () => (
  <TwitterWrapper
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M44.9 16.1438C44.9 15.6917 44.8833 15.2521 44.8625 14.8187C46.8958 13.375 48.6062 11.5729 50 9.49792V9.49583C48.1396 10.3104 46.1604 10.8521 44.0938 11.1146C46.2188 9.84583 47.8417 7.85208 48.6042 5.45C46.6229 6.63125 44.4354 7.46458 42.1042 7.93125C40.2229 5.92708 37.5417 4.6875 34.6167 4.6875C28.9417 4.6875 24.3729 9.29375 24.3729 14.9396C24.3729 15.7521 24.4417 16.5333 24.6104 17.2771C16.0896 16.8604 8.54792 12.7771 3.48125 6.55417C2.59792 8.08958 2.07708 9.84583 2.07708 11.7354C2.07708 15.2854 3.90417 18.4312 6.63125 20.2542C4.98333 20.2229 3.36875 19.7437 2 18.9917V19.1042C2 24.0854 5.55208 28.2229 10.2125 29.1771C8.64583 29.6062 6.71667 29.5896 5.58542 29.3396C6.9125 33.3979 10.6833 36.3833 15.1625 36.4812C11.675 39.2083 7.24583 40.8521 2.45208 40.8521C1.6125 40.8521 0.80625 40.8146 0 40.7125C4.54167 43.6396 9.92083 45.3125 15.725 45.3125C34.5875 45.3125 44.9 29.6875 44.9 16.1438Z"
        fill="#55ACEE"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="50" height="50" fill="white" />
      </clipPath>
    </defs>
  </TwitterWrapper>
);

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background: #ffffff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  border-radius: 0.3rem;
  width: 100%;
  max-width: 300px;
  text-align: left;
  @media (max-width: 900px) {
    width: 80vw;
    max-width: 100%;
  }
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;
export const Label = styled.label`
  color: ${colors.red};
  margin-bottom: 0.5rem;
`;
export const InputField = styled.input`
  padding: 0.7rem 0.5rem;
  border: 1px solid ${colors.red};
  border-radius: 0.3rem;
`;
export const TextArea = styled.textarea`
  padding: 0.5rem;
  border: 1px solid ${colors.red};
  border-radius: 0.3rem;
  resize: none;
`;
export const FormButton = styled.button`
  border: none;
  background: ${colors.red};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  height: 2.5rem;
  width: 7rem;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.2rem;
  align-self: center;
`;
