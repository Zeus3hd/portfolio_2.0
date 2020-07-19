import React from "react";
import "./App.css";
import Header from "./components/Header";
import { FullPage, Slide } from "react-full-page";
import styled from "styled-components";
import Background from "./components/Background";

const Layout = styled.div``;
function App() {
  return (
    <Layout>
      <Background />
      <FullPage>
        <Slide>
          <Header />
        </Slide>
        <Slide>
          <Header />
        </Slide>
      </FullPage>
    </Layout>
  );
}

export default App;
