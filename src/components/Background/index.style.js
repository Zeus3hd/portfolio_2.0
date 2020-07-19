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

export const TopLeftRectsContainer = styled.div`
  width: 25%;
  height: 25%;
  position: absolute;
  left: 0;
  top: 0;
`;
export const TopLeftRectsContainerInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
export const BottomRightRectsContainer = styled.div`
  position: absolute;
  width: 25%;
  height: 25%;
  right: 0;
  bottom: 0;
  transform: rotateZ(180deg);
`;
export const BottomRightRectsContainerInner = styled.div``;
export const Rect1 = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  border: 2px solid ${colors.dark};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  right: 0%;
  top: 30%;
`;

export const Rect2 = styled.div`
  width: 50px;
  height: 50px;
  position: absolute;
  border: 3px solid ${colors.dark};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  right: 25%;
  bottom: 10%;
`;

export const Rect3 = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  border: 4px solid ${colors.dark};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  right: 30%;
  top: 10%;
`;

export const Rect4 = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid ${colors.dark};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 30%;
  bottom: 10%;
`;

export const Rect5 = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid #000000;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 20%;
  top: 10%;
`;

export const Rect6 = styled.div`
  width: 30px;
  height: 30px;
  background: ${colors.dark};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
  position: absolute;
  left: 4%;
  bottom: 0%;
`;
