import React from "react";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate(-1);
  };
  const handleClickHome = () => {
    navigate("/home");
  };
  return (
    <>
      <Header handleClickMenu={handleClickMenu} icon="back.svg">
        <h2 style={{ textAlign: "center" }}>WRITE</h2>
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>다이어리 작성</h2>
      </Main>
      <Footer handleClickHome={handleClickHome} icon="home.svg"></Footer>
    </>
  );
};

export default Add;
