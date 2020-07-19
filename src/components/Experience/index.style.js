import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.h2`
  font-size: 4rem;
  color: ${colors.dark};
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const SubTitle = styled.h5`
  font-size: 2rem;
  color: ${colors.dark};
  margin: 0;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const ExpContainer = styled.div`
  align-self: flex-start;
  margin: 1rem 10vw;
`;
export const SingleExpContainer = styled.div`
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ExpTitle = styled.p`
  font-size: 2rem;
  color: ${colors.dark};
  margin: 0;
  font-weight: bold;
  position: relative;
  ::before {
    content: "";
    width: 40%;
    height: 100%;
    position: absolute;
    left: -10%;
    top: 0;
    background: ${colors.green};
    z-index: -1;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const TechContainer = styled.p`
  color: ${colors.dark};
  font-weight: bold;
  @media (max-width: 600px) {
    font-size: 0.75rem;
  }
`;

export const Slash = styled.span`
  color: ${colors.green};
  font-weight: bold;
`;
