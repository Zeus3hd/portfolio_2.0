import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 0 10vw;
  }
`;
export const Title = styled.h2`
  color: ${colors.dark};
  text-align: center;
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);

  margin: 1rem 0;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const SubTitle = styled.h5`
  color: ${colors.dark};
  text-align: center;
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);

  margin: 1rem 0;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const ExpContainer = styled.div`
  padding: 1rem;
`;
export const SingleExpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ExpTitle = styled.p`
  color: ${colors.dark};
  font-weight: bold;
  position: relative;
  margin: 0;
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);

  ::before {
    content: "";
    width: 100%;
    height: 100%;
    left: -15%;
    position: absolute;
    background: ${colors.green};
    z-index: -1;
  }
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const TechContainer = styled.p`
  font-size: 0.95rem;
  color: ${colors.dark};
  line-height: 1.3rem;
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Slash = styled.span`
  color: ${colors.green};
  font-weight: bold;
`;
