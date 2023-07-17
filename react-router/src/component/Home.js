import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h3>메인페이지</h3>
      {/* a태그는 Link태그로 바뀐다 */}
      <ul>
        <li>
          <Link to="/user">회원페이지</Link>
        </li>
        <li>
          {/* 쿼리스트링 */}
          <Link to="/user?id=aaa123&name=홍길동">회원페이지</Link>
        </li>
        {/* 쿼리 파라미터 */}
        <li>
          {/* http://localhost:3000/info/1/홍길동 */}
          <Link to="/info/1/홍길동">정보페이지</Link>
        </li>
        <li>
          {/* http://localhost:3000/info/2/이순신 */}
          <Link to="/info/2/이순신">정보페이지</Link>
        </li>
        <li>
          {/* http://localhost:3000/info/3/홍길자 */}
          <Link to="/info/3/홍길자">정보페이지</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
