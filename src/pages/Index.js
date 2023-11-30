import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Header>
        <h2 style={{ textAlign: "center" }}>My Diary</h2>
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>웹서비스 첫 화면</h2>
      </Main>
      <Footer></Footer>
    </>
  );
};

export default Index;
