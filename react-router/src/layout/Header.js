import { Fragment } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import styled from "./Header.module.css";

const Header = () => {
  /* useNavigate 훅 */
  const nav = useNavigate(); // 함수반환

  // 홈으로 함수
  const goHome = () => {
    nav("/"); // 홈으로
  };
  // 뒤로가기 함수
  const goBack = () => {
    nav(-1); // 뒤로가기
  };
  // 앞으로가기 함수
  const goFoward = () => {
    nav(1); // 앞으로가기
  };

  return (
    <Fragment>
      <header className={styled.header}>
        <h3>헤더파일</h3>
        <ul className={styled.ul}>
          <li>목록</li>
          <li>목록</li>
          <li>목록</li>
          <li>목록</li>
        </ul>

        <div>
          <button onClick={goHome}>홈으로</button>
          <button onClick={goBack}>뒤로가기</button>
          <button onClick={goFoward}>앞으로</button>
        </div>
      </header>

      <section>
        {/* 헤더 밑 section에 App.js에서의 하위 라우터를 표시 */}
        <Outlet />
      </section>
    </Fragment>
  );
};

export default Header;
