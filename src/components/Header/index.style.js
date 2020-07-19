import React from "react";
import styled from "styled-components";
import { colors } from "../../utils/colors";

const ScrollSVGContent = styled.svg`
  position: absolute;
  bottom: 1rem;
  width: 2rem;
`;

export const ScrollSVG = () => (
  <ScrollSVGContent
    width="50"
    height="85"
    viewBox="0 0 50 85"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M48.5 42.5C48.5 54.0161 45.7511 64.3688 41.3848 71.7915C36.9981 79.2489 31.1549 83.5 25 83.5C18.8451 83.5 13.0019 79.2489 8.61523 71.7915C4.24891 64.3688 1.5 54.0161 1.5 42.5C1.5 30.9839 4.24891 20.6312 8.61523 13.2085C13.0019 5.75108 18.8451 1.5 25 1.5C31.1549 1.5 36.9981 5.75108 41.3848 13.2085C45.7511 20.6312 48.5 30.9839 48.5 42.5Z"
      stroke="#EF476F"
      strokeWidth="3"
    />
    <path
      d="M18.9479 52.8604L16 55.8062L24.8396 64.6458L33.6792 55.8062L30.7313 52.8604L24.8396 58.7542L18.9479 52.8604Z"
      fill="#EF476F"
    />
    <path
      d="M30.7313 32.7854L33.6792 29.8396L24.8396 21L16 29.8396L18.9479 32.7854L24.8396 26.8938L30.7313 32.7854Z"
      fill="#EF476F"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.8396 36.5729C26.4972 36.5729 28.0869 37.2314 29.259 38.4035C30.4311 39.5756 31.0896 41.1653 31.0896 42.8229C31.0896 44.4805 30.4311 46.0703 29.259 47.2424C28.0869 48.4145 26.4972 49.0729 24.8396 49.0729C23.182 49.0729 21.5923 48.4145 20.4202 47.2424C19.2481 46.0703 18.5896 44.4805 18.5896 42.8229C18.5896 41.1653 19.2481 39.5756 20.4202 38.4035C21.5923 37.2314 23.182 36.5729 24.8396 36.5729ZM24.8396 40.7396C25.3921 40.7396 25.922 40.9591 26.3127 41.3498C26.7034 41.7405 26.9229 42.2704 26.9229 42.8229C26.9229 43.3755 26.7034 43.9054 26.3127 44.2961C25.922 44.6868 25.3921 44.9063 24.8396 44.9063C24.2871 44.9063 23.7572 44.6868 23.3665 44.2961C22.9758 43.9054 22.7563 43.3755 22.7563 42.8229C22.7563 42.2704 22.9758 41.7405 23.3665 41.3498C23.7572 40.9591 24.2871 40.7396 24.8396 40.7396Z"
      fill="#EF476F"
    />
  </ScrollSVGContent>
);
export const Wrapper = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const CodeContainer = styled.div`
  font-size: 5rem;
  font-weight: bold;
  font-family: "Ubuntu";
`;

export const LogoContainer = styled.div`
  height: 6rem;
  position: relative;
  ::before {
    content: "";
    width: 70%;
    height: 50%;
    position: absolute;
    background: ${colors.green};
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
export const Logo = styled.img`
  height: 100%;
`;
export const FirstLine = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;
  color: ${colors.dark};
  > span {
    color: ${colors.red};
  }
`;
export const SecondLine = styled.p`
  color: ${colors.dark};
  margin: 1rem 0;
  margin-left: 4rem;
`;
export const ThirdLine = styled.p`
  color: ${colors.dark};
  margin: 1rem 0;
  margin-left: 2.5rem;
`;
