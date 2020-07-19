import React from "react";
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
  return (
    <Wrapper>
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
