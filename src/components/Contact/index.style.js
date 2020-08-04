import styled from "styled-components";
import { colors } from "../../utils/colors";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1024px) {
    padding: 0 10vw;
  }
`;
export const Title = styled.h2`
  color: ${colors.dark};
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  text-align: center;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

export const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  @media (min-width: 768px) {
    margin-right: 2rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    flex: 2;
    align-items: flex-start;
  }
`;

export const RightSection = styled.div`
  flex: 1;
`;

export const Paragraph = styled.p`
  color: ${colors.dark};
  text-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  font-weight: bold;
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1024px) {
    max-width: 60ch;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding: 1rem;
  box-sizing: border-box;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.25);
  border-radius: 0.3rem;
`;
export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;
export const Label = styled.label`
  color: ${colors.red};
`;
export const InputField = styled.input`
  padding: 0.5rem;
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
  background: ${colors.red};
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  color: #ffffff;
  font-weight: bold;
  border: none;
  align-self: center;
  padding: 0.5rem 1rem;
`;

export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.grey};
  margin: 1rem 0;
`;
export const SocialLinksContainer = styled.div`
  display: flex;
  padding-bottom: 1rem;
`;
export const SocialLink = styled.a`
  margin: 0 0.6rem;
  svg {
    height: 25px;
    fill: ${colors.grey};
  }
`;
export const SocialText = styled.p`
  margin: 0;
  font-weight: bold;
  padding-left: 0.5rem;
  border-left: 3px solid ${colors.grey};
`;
