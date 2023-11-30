import React from "react";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Add = () => {
  return (
    <>
      <Header>
        <h2 style={{ textAlign: "center" }}>WRITE</h2>
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>다이어리 작성</h2>
      </Main>
      <Footer></Footer>
    </>
  );
};

export default Add;
