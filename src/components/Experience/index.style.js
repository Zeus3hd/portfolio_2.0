import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Title = styled.h2`
  font-size: 4rem;
  color: ${colors.dark};
`;

export const SubTitle = styled.h5`
  font-size: 2rem;
  color: ${colors.dark};
  margin: 0;
`;

export const ExpContainer = styled.div`
  align-self: flex-start;
  margin: 1rem 10vw;
`;
export const SingleExpContainer = styled.div``;

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
`;

export const TechContainer = styled.p`
  color: ${colors.dark};
  font-weight: bold;
`;

export const Slash = styled.span`
  color: ${colors.green};
  font-weight: bold;
`;
