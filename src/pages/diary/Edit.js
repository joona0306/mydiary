import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { useParams } from "react-router";

const Edit = () => {
  const param = useParams();
  console.log(param);
  return (
    <>
      <Header>
        <h2 style={{ textAlign: "center" }}>EDIT</h2>
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>
          다이어리 수정 {param.pk} 글 수정
        </h2>
      </Main>
      <Footer></Footer>
    </>
  );
};

export default Edit;
