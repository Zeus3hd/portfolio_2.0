import React from "react";
import {
  Wrapper,
  TopRightRect,
  BottomLeftRect,
  TopLeftRectsContainer,
  BottomRightRectsContainer,
  TopLeftRectsContainerInner,
  BottomRightRectsContainerInner,
  Rect1,
  Rect2,
  Rect3,
  Rect4,
  Rect5,
  Rect6,
} from "./index.style";
const Background = () => {
  return (
    <Wrapper>
      <TopRightRect />
      <BottomLeftRect />
      <TopLeftRectsContainer>
        <TopLeftRectsContainerInner>
          <Rect1 />
          <Rect2 />
          <Rect3 />
          <Rect4 />
          <Rect5 />
          <Rect6 />
        </TopLeftRectsContainerInner>
      </TopLeftRectsContainer>
      <BottomRightRectsContainer>
        <BottomRightRectsContainerInner>
          <Rect1 />
          <Rect2 />
          <Rect3 />
          <Rect4 />
          <Rect5 />
          <Rect6 />
        </BottomRightRectsContainerInner>
      </BottomRightRectsContainer>
    </Wrapper>
  );
};

export default Background;
