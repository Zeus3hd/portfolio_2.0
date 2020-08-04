import React, { useEffect, useState } from "react";
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
  Graph1bg,
  Graph2bg,
} from "./index.style";
const Background = () => {
  const [startAnim, setStartAnim] = useState(false);
  useEffect(() => {
    let timer1 = setTimeout(() => setStartAnim(true), 1000);

    // this will clear Timeout when component unmount like in willComponentUnmount
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <Wrapper>
      <TopRightRect />
      <BottomLeftRect />
      <TopLeftRectsContainer>
        <TopLeftRectsContainerInner>
          <Rect1 startAnim={startAnim} />
          <Rect2 startAnim={startAnim} />
          <Rect3 startAnim={startAnim} />
          <Rect4 startAnim={startAnim} />
          <Rect5 startAnim={startAnim} />
          <Rect6 startAnim={startAnim} />
        </TopLeftRectsContainerInner>
      </TopLeftRectsContainer>
      <BottomRightRectsContainer>
        <BottomRightRectsContainerInner>
          <Rect1 startAnim={startAnim} />
          <Rect2 startAnim={startAnim} />
          <Rect3 startAnim={startAnim} />
          <Rect4 startAnim={startAnim} />
          <Rect5 startAnim={startAnim} />
          <Rect6 startAnim={startAnim} />
        </BottomRightRectsContainerInner>
      </BottomRightRectsContainer>
      <Graph1bg />
      <Graph2bg />
    </Wrapper>
  );
};

export default Background;
