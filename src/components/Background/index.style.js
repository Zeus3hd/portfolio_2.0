import styled from "styled-components";
import { colors } from "../../utils/colors";
export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

export const TopRightRect = styled.div`
  background: ${colors.red};
  width: 250px;
  height: 10px;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;

export const BottomLeftRect = styled.div`
  background: ${colors.red};
  width: 250px;
  height: 10px;
  position: absolute;
  left: 1rem;
  bottom: 1rem;
`;
