import React, { useEffect, useState } from "react";
import {
  Wrapper,
  FirstLine,
  SecondLine,
  ThirdLine,
  CodeContainer,
  Logo,
  LogoContainer,
  ScrollSVG,
} from "./index.style";
import logo from "../../imgs/logo.png";
const Header = () => {
  const [startAnim, setStartAnim] = useState(false);
  useEffect(() => {
    let timer1 = setTimeout(() => setStartAnim(true), 1000);

    // this will clear Timeout when component unmount like in willComponentUnmount
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <Wrapper startAnim={startAnim}>
      <CodeContainer>
        <FirstLine>
          <span>While</span> (
          <LogoContainer>
            <Logo src={logo} />
          </LogoContainer>
          )&#123;
        </FirstLine>
        <SecondLine>create( );</SecondLine>
        <ThirdLine>&#125;</ThirdLine>
      </CodeContainer>
      <ScrollSVG />
    </Wrapper>
  );
};

export default Header;
