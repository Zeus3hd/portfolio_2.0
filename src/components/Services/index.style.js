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
  @media (max-width: 590px) {
    font-size: 2rem;
  }
`;

export const ServicesContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media (max-width: 1270px) {
    flex-direction: column;
  }
`;
export const ServiceTextContainer = styled.div`
  @media (max-width: 1270px) {
    flex: 1;
  }
`;
export const SingleServiceContainer = styled.div`
  flex: 1;
  margin: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30vw;
  max-width: 300px;
  @media (max-width: 1270px) {
    width: 100%;
    max-width: 100%;
    margin: 1rem 0;
    flex-direction: row;
  }
`;

export const ServiceImg = styled.div`
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: contain;
  background-position: center;
  height: 30vw;
  width: 100%;
  max-width: 300px;
  max-height: 300px;
  @media (max-width: 1270px) {
    height: 200px;
    flex: 1;
  }
  @media (max-width: 590px) {
    flex: auto;
    height: 100px;
  }
`;
export const ServiceTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${colors.dark};
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid ${colors.green};
  position: relative;

  ::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 80%;
    background: ${colors.green};
    z-index: -1;
    top: 40%;
    right: 0%;
    transform: translateY(-50%);
  }

  @media (max-width: 590px) {
    font-size: 1rem;
  }
`;
export const ServiceDesc = styled.div`
  @media (max-width: 590px) {
    width: 80vw;
  }
`;

export const ServiceParagraph = styled.p`
  color: ${colors.dark};
  margin: 0.5rem 0;
`;
