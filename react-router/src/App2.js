import { useEffect, useState } from "react";

const App = () => {
  // 가져온 json 데이터를 핸들링할 state
  // 1. 에러를 피하고자 {} 객체로 선언
  // const [data, setData] = useState({});

  // 2. 삼항연산자 사용
  const [data, setData] = useState();

  // 1st 버튼 이벤트
  const handleClick = () => {
    // fetch로 데이터 가져오기
    // 1. fetch ( '주소' ) => Promise 객체 반환
    // 2. then 에서 Promise 객체의 response 를 구조 분해 할당으로 받아서 json으로 변환
    // 3. then 에서 변환된 json 데이터를 data state에 저장
    fetch(
      "https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json"
    )
      .then((response) => response.json())
      .then((data) => {
        //console.log(data)
        setData(data);
      });
  };

  // 2nd 화면 로드시 데이터 불러오기
  const [raw, setRaw] = useState();
  // useEffect 안에 넣지 않으면 무한 루프가 발생한다
  // 두번째 매개변수로 [] 을 준다
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setRaw(data);
      });
  }, []);

  console.log(1);

  return (
    <div>
      <h3>fetch로 데이터 가져오기</h3>
      <p>버튼 클릭시 데이터 가져오기</p>
      <button onClick={handleClick}>데이터로드</button>
      {/* 삼항 연산자를 사용하여 undefined 가 아닐 때만 화면에 뿌려준다 */}
      {data !== undefined ? (
        <p>
          {data.userId} <br />
          {data.userPw} <br />
          {data.userName} <br />
        </p>
      ) : null}
      <p>화면 로드시 가져오기</p>

      {raw !== undefined ? (
        <p>
          {raw.userId} <br />
          {raw.userPw} <br />
          {raw.userName}
        </p>
      ) : null}
    </div>
  );
};

export default App;
