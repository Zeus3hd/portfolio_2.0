import React from "react";
import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import Background from "./components/Background";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

const Section = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
`;
const Layout = styled.div``;
function App() {
  return (
    <Layout>
      <Background />
      <Section>
        <Header />
      </Section>
      <Section>
        <Services />
      </Section>
      <Section>
        <Experience />
      </Section>
      <Section>
        <Contact />
      </Section>
    </Layout>
  );
}

export default App;
