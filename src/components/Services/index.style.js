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

export const ServicesContainer = styled.div`
  display: flex;
`;

export const SingleServiceContainer = styled.div`
  flex: 1;
  margin: 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ServiceImg = styled.div`
  background: url(${({ bg }) => bg}) no-repeat;
  background-size: contain;
  background-position: center;
  width: 30vw;
  height: 30vw;
  max-width: 300px;
  max-height: 300px;
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
`;
export const ServiceDesc = styled.div``;

export const ServiceParagraph = styled.p`
  color: ${colors.dark};
  margin: 0.5rem 0;
`;
