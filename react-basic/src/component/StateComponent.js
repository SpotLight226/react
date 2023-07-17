import { useState } from "react";

const StateComponent = () => {
  // 스테이트는 지역 변수로 선언하여 사용
  // state - 컴포넌트 안에서 변화하는 값(상태변수)
  // const result = useState("초기값");
  // console.log(result); // 배열 반환
  // const a = result[0]; // 초기값
  // const b = result[1]; // 함수

  // 구조 분해 할당으로 각 변수를 받는다
  const [data, setData] = useState("초기값");
  const [num, SetNum] = useState(0);

  const [color, setColor] = useState("black");

  //state 는 절대 직접 수정 금지
  // data = "체인지~~~!";

  // 두번째 매개변수로 전달해주는 setter 를 이용하여 state를 변경한다
  // state는 이벤트 or 특정 함수안에서 바꾸도록 처리한다
  // setData("체인지~~~~!");

  // state 변경 함수
  const handleData = () => {
    setData("체인지~~~!!!"); // 비동기적으로 state값을 변경 -> 화면을 리렌더링 한다
    SetNum(10);
  };

  // 붉은색 button 변경
  // const hadleColor = () => setColor("red");

  return (
    <div>
      스테이트 값 : {data}; <br />
      num 스테이트 값 : {num}
      <button onClick={handleData}>스테이트값 변경</button>
      <hr />
      <h3 style={{ color: color }}>{data}</h3>
      <button onClick={() => setColor("red")}>붉은색</button>
      <button onClick={() => setColor("blue")}>푸른색</button>
      <button onClick={() => setColor("yellow")}>그 사이 3초 짧은색</button>
    </div>
  );
};

export default StateComponent;
