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
  color: ${colors.dark};
  text-align: center;
  font-size: 2.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
`;

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const SingleServiceContainer = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr;
    margin: 3rem;
    align-items: end;
    max-width: 400px;
  }
`;

export const ServiceImg = styled.img`
  width: 100%;
  object-fit: contain;
`;
export const ServiceTitle = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.dark};
  margin: 0;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid ${colors.green};
  position: relative;
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);

  ::before {
    content: "";
    position: absolute;
    width: 50%;
    height: 80%;
    background: ${colors.green};
    z-index: -1;
    top: 40%;
    left: 40%;
    transform: translateY(-50%);
  }
  @media (min-width: 1024px) {
    font-size: 1.3rem;
  }
`;
export const ServiceDesc = styled.div``;

export const ServiceParagraph = styled.p`
  color: ${colors.dark};
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
`;

export const ServiceInfoContainer = styled.div`
  flex: 2;
  margin-left: 0.5rem;
  p:last-child {
    display: none;
  }
  @media (min-width: 1024px) {
    p:last-child {
      display: block;
    }
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;
