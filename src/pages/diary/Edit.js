import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const param = useParams();
  console.log(param);

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
        <h2 style={{ textAlign: "center" }}>EDIT</h2>
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>
          다이어리 수정 {param.pk} 글 수정
        </h2>
      </Main>
      <Footer handleClickHome={handleClickHome} icon="home.svg"></Footer>
    </>
  );
};

export default Edit;
