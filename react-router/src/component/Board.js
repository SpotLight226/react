import { Link, NavLink, Outlet } from "react-router-dom";

const Board = () => {
  const myStyle = {
    color: "red",
    backgroundColor: "yellow",
  };

  return (
    <div>
      <h3>Board페이지</h3>
      <ul>
        {/* <li>
          <Link to="/board/1">1번글</Link>
        </li>
        <li>
          <Link to="/board/2">2번글</Link>
        </li>
        <li>
          <Link to="/board/3">3번글</Link>
        </li> */}

        {/* NavLink 는 Link와 동일하지만 style을 줄 수 있다 */}
        <li>
          <NavLink
            to="/board/1"
            /* 구조 분해 할당으로 isActive 값을 받아온다 */
            style={({ isActive }) => {
              return isActive ? myStyle : undefined;
            }}
          >
            1번글
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/board/2"
            style={({ isActive }) => (isActive ? myStyle : undefined)}
          >
            2번글
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/board/3"
            style={({ isActive }) => (isActive ? myStyle : undefined)}
          >
            3번글
          </NavLink>
        </li>
      </ul>

      {/* 하위 라우터가 페이지 이동없이 바로 표시된다 */}
      <Outlet />
    </div>
  );
};

export default Board;
