import { useLocation, useSearchParams } from "react-router-dom";

const User = () => {
  //쿼리스트링 값을 받는 방법1
  const location = useLocation();
  console.log(location); // search : "?id=aaa123&name=%ED%99%8D%EA%B8%B8%EB%8F%99"

  //쿼리스트링 값을 받는 방법2
  // 첫번째 인덱스 : set,get을 가진 객체
  // 두번째 인덱스 : 쿼리스트링을 직접 변경할 수 있는 함수
  const [obj, setObj] = useSearchParams(); // [URLSearchParams, ƒ] 을 구조분해 할당
  console.log(obj);

  //   obj.get("키"); // === request.getParameter("키")
  let id = obj.get("id");
  let name = obj.get("name");

  const handleClick = () => {
    setObj({ id: "변경", name: "변경" }); // 이후에 리렌더링
  };

  return (
    <div>
      <h3>유저페이지</h3>
      쿼리스트링 id: {id} <br />
      쿼리스트링 name : {name}
      <button onClick={handleClick}>쿼리스트링 제어하기</button>
    </div>
  );
};

export default User;
