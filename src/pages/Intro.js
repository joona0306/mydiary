import React from "react";
import Main from "../components/Main";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Intro = () => {
  return (
    <>
      <Main>
        <h1 style={{ textAlign: "center" }}>인트로</h1>
        <Link to="/home">내용보기</Link>
      </Main>
      <p>
        <h3>Copyright 2023. by Andy</h3>
      </p>
    </>
  );
};

export default Intro;
