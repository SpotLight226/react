import { useState } from "react";

const IterationComponent2 = () => {
  // 1. state 선언
  const [list, setList] = useState([
    { id: 1, topic: "hello" },
    { id: 2, topic: "bye" },
    // 추가...
  ]);

  // 2. input데이터 state
  const [inputData, setInputData] = useState("");

  // 3. inputData 핸들링
  const handleChange = (e) => {
    // 변경된 값을 state에 저장
    setInputData(e.target.value);
  };

  // 4. 클릭 이벤트 생성
  const handleCilck = () => {
    // console.log(inputData); // 데이터 확인

    // id는 마지막 아이디보다 큰 숫자
    // list배열의 마지막 요소(인덱스 : 길이 - 1)를 가져와서 + 1
    const obj = [{ id: list[list.length - 1].id + 1, topic: inputData }];
    // 기존 배열에 합침 : 1st. concat
    const newData = list.concat(obj);
    // 2nd. 전개구문
    // const newData = [...list, ...obj];
    setList(newData);
    // 입력창을 공백으로 초기화
    setInputData("");
  };

  // 5. 더블클릭으로 삭제 이벤트 생성
  // 1st.. 호이스팅 에러가 발생하므로 이 함수보다 밑에 list를 추가하던가
  // 2nd.. list 처리 내부에 직접 작성
  // 삭제는 id가 필요함 ( 특정 타켓을 구분할 수 있는 요소 )
  const handleRemove = (id) => {
    // console.log(id);

    // return에서 true인 요소들만 새로운 배열을 만든다
    // 클릭한 대상의 id가 아닐 때만 true로 반환
    const result = list.filter((item) => {
      // console.log(item); // 해당 이벤트가 일어난 타켓
      // console.log(index); // 타켓의 배열에서의 인덱스

      return item.id !== id;
    });

    setList(result);
  };

  // 호이스팅 이슈로 list 처리를 아래에 놓기 or handleRemove를 따로 작성하는 것이 아닌 한번에 호출로 작성
  // state 를 map 처리하여 화면상에 나타내기
  // li 태그에 인라인 이벤트로 삭제 이벤트를 추가하기
  const newList = list.map((item) => (
    <li
      key={item.id}
      // 이벤트에서 익명함수를 호출하는데 내부의 handleRemove를 호출하므로
      // 해당 이벤트 타켓의 요소를 매개변수로 전달할 수 있다
      onDoubleClick={() => {
        handleRemove(item.id);
      }}
      style={{ cursor: "pointer" }}
    >
      {item.topic}
    </li>
  ));

  return (
    <div>
      <h3>할일 목록 만들기</h3>
      <input
        type="text"
        onChange={handleChange}
        style={{ marginRight: 10 }}
        /* value와 input데이터 state를 동일하게 설정 */
        value={inputData}
      />
      {/* 버튼을 클릭하면 list state에 추가 */}
      <button type="button" onClick={handleCilck}>
        추가하기
      </button>

      <ul>{newList}</ul>
    </div>
  );
};

export default IterationComponent2;
