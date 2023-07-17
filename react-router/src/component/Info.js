import { useParams } from "react-router-dom";

// 예시 데이터
const data = {
  1: { b: "홍길동" },
  2: { b: "이순신" },
  3: { b: "홍길자" },
};

const Info = () => {
  //쿼리 파라미터 값
  const obj = useParams();
  // 객체에는 App.js에서 설정한 키 에 값이 담겨있다
  console.log(obj);
  console.log(obj.a);

  // ex) obj 값을 이용해서 서버에서는 데이터를 가져오고 state로 관리

  return (
    <div>
      <h3>정보페이지</h3>
      {/* data가 객체이므로 obj.a 를 키로 찾아서 내부 객체의 b를 가져온디 */}
      {obj.a}에 해당하는 값 = {data[obj.a].b}
    </div>
  );
};

export default Info;
