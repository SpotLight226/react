import { useEffect, useState } from "react";
import axios from "axios";
import NewsArticle from "./NewsArticle";
import { useParams } from "react-router-dom";
import styled from "./NewsList.module.css";

// 뉴스 리스트를 컴포넌트로 쪼개어서 관리
const NewsList = () => {
  // 2. 로딩 처리 : 처음엔 false
  const [loading, setLoading] = useState();

  // 3. 쿼리파라미터 값 처리
  const { category } = useParams();

  // undefined 라면 공백 "" , 아니라면 url에 들어가는 형식으로
  const query = category === undefined ? "" : "&category=" + category;

  // 1. 데이터 처리 state
  const [data, setData] = useState([]);

  // 로드 될 때 데이터를 가져온다, useEffect 에는 async 를 작성할 수 없다
  useEffect(() => {
    // 가져올 주소
    let url = `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=2da6b011c4ac493e9280a360122cc808`;
    // async 와 await를 사용하는 방법
    // 즉시 실행 함수를 만들어 async로 감싼다
    (async () => {
      // 구조 분해 할당을 이용하여 data를 가져온다
      // data에서, 내부의 articles 를 가져온다
      let {
        data: { articles },
      } = await axios.get(url);
      setData(articles);
      // 데이터가 도착하면 true로 변경
      setLoading(true);
    })();

    // ★★★query가 바뀔 때, useEffect가 실행되도록 작성★★★
  }, [query]); // 마운트 이후에 실행되고, query변수가 바뀔 때 마다 실행

  if (!loading) {
    return <div>데이터를 불러오는 중입니다</div>;
  }

  return (
    <ul className={styled.warp}>
      {/* <li>
          <a href="#">
            <img src="#" alt="이미지" />
            <article>
              <p>기자</p>
              <p>일자</p>
              <p>제목</p>
              <p>설명</p>
            </article>
          </a>
        </li> */}

      {/* 가져온 data를 map으로 반복을 돌려 화면에 뿌린다 */}
      {data.map((item, index) => (
        /* props 로 item을 넘겨준다 
				   이 때, 반복이 돌아가는 것은 NewsArticle 컴포넌트 이므로 여기에 key를 준다 */
        <NewsArticle item={item} index={index} key={index} />
      ))}
    </ul>
  );
};

export default NewsList;
