import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
  // 다이어리 샘플 데이터
  const diaryData = [
    {
      open: true,
      year: "2023",
      month: "12",
      date: "01",
      day: "금",
      title: "타이틀",
      memo: "내일시험이 있어서 내자리 정리하고 가기",
      category: "사적",
      weather: 1,
      mood: 3,
      detail: {
        content: "그냥 글자로 작성후 고도화 거치면서",
        pics: ["1.jpg", "2.jpg"],
      },
    },
    {
      open: false,
      year: "2023",
      month: "12",
      date: "02",
      day: "토",
      title: "토요일 타이틀",
      memo: "토요일 시험이 있어서 내자리 정리하고 가기",
      category: "공적",
      weather: 2,
      mood: 5,
      detail: {
        content: "토요일 상세한 내용입니다.",
        pics: ["3.jpg", "4.jpg"],
      },
    },
  ];

  const navigate = useNavigate();
  const handleClickMenu = () => {
    navigate(-1);
  };

  const handleClickHome = () => {
    navigate("/home");
  };

  const handleClickList = index => {
    navigate("/diary/edit/" + index);
  };

  // 간단하게 데이터 출력 경험해보기
  console.log("component 시작");
  const [list, setList] = useState([]);
  const showData = () => {
    console.log("자료 불렀음");
    // 자료 화면에 적용(변화 리렌더링 시켜서) : state 를 원본과 복사본 비교변경
    setList([...diaryData]);
  };
  // 데이터를 불러오기 적정한 곳 (html 렌더링 완료 시점
  useEffect(() => {
    console.log("Hook 작동");
    showData();
  }, []);

  return (
    <>
      <Header handleClickMenu={handleClickMenu} icon="back.svg">
        <h2 style={{ textAlign: "center" }}>INDEX</h2>
      </Header>
      <Main>
        <h2 style={{ textAlign: "center", color: "red" }}>다이어리 첫 화면</h2>
        <div>
          <h3>배열의 내용을 출력함 : map메서드사용</h3>
          <ul>
            {list.map((elem, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    handleClickList(index);
                  }}
                >
                  <p>{elem.open ? "사적" : "공개"}</p>
                  <p>{`${elem.year}년도 ${elem.month}월 ${elem.date}일 ${elem.day}`}</p>
                  <p>{`제목: ${elem.title}`}</p>
                  <p>{`메모: ${elem.memo}`}</p>
                  <p>{`상세내용: ${elem.detail.content}`}</p>
                  <p>
                    그림1:
                    <img src={elem.detail.pics[0]} alt={elem.detail.pics[0]} />
                  </p>
                  <p>
                    그림1:
                    <img src={elem.detail.pics[0]} alt={elem.detail.pics[0]} />
                  </p>
                  <hr />
                </li>
              );
            })}
          </ul>
        </div>
        <Link to="/diary/add">다이어리 작성</Link>
        <br />
        <Link to="/diary/edit/1">다이어리 수정</Link>
      </Main>
      <Footer handleClickHome={handleClickHome} icon="home.svg"></Footer>
    </>
  );
};

export default Index;