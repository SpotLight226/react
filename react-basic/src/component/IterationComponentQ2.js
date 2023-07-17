import { useState } from "react";

const IterationComponentQ2 = () => {
  //1 - select는 컴포넌트반복으로 option태그를 생성합니다.
  const select = [
    "선택",
    "HTML",
    "Javascript",
    "CSS",
    "Java",
    "Oracle",
    "Mysql",
  ];

  const options = select.map((item, index) => (
    <option key={index}>{item}</option>
  ));

  //2 - 아래 데이터는 state로 관리하고 화면에 li태그로 반복해주세요 .
  const data = [
    { id: 1, type: "Java", teacher: "이순신" },
    { id: 2, type: "Java", teacher: "홍길자" },
    { id: 3, type: "Javascript", teacher: "홍길동" },
    { id: 4, type: "Oracle", teacher: "이순신" },
    { id: 5, type: "Mysql", teacher: "이순신" },
    { id: 6, type: "CSS", teacher: "박찬호" },
    { id: 7, type: "HTML", teacher: "coding404" },
  ];

  const [list, setList] = useState(data);
  const [inputData, setInputData] = useState("");

  // input태그의 value로 inputData state를 핸들링
  const handleInput = (e) => {
    setInputData(e.target.value);
  };

  //3 - 셀렉트박스가 체인지되면 이벤트객체를 활용해서 선택된 값만 필터링해주세요.
  const handleChange = (e) => {
    // filter를 거친 후, true인 것만 새로운 filterList를 생성한다
    const filterList = data.filter((item) => item.type === e.target.value);
    // state 를 수정한다
    setList(filterList);
  };

  //4 - 검색기능 (input태그의 값이 변경되면 핸들링)
  const handleClick = () => {
    // data를 filter
    const searchedList = data.filter(
      (item) =>
        // data의 type 요소를 소문자로 바꾸고 inputData state를 소문자로 바꾼 것이 포함되어 있다면
        item.type.toLowerCase().includes(inputData.toLowerCase()) ||
        // 또는 data의 teacher 요소에 inputData가 포함되어 있다면 true
        item.teacher.includes(inputData)
    );
    setList(searchedList);
    setInputData("");
  };

  // 5 - 클릭시 list를 초기화
  const handleRefresh = () => {
    const refreshList = data.filter(() => true);
    setList(refreshList);
  };

  // 화면에 뿌려줄 리스트 생성
  const newList = list.map((item) => (
    <li key={item.id}>
      {item.type} : {item.teacher}
    </li>
  ));

  return (
    <div>
      <hr />
      <h3>실습</h3>
      Search: <input type="text" onChange={handleInput} value={inputData} />
      <button onClick={handleClick}>검색</button>
      <br />
      과목찾기:
      <select onChange={handleChange}>{options}</select>
      <ul>{newList}</ul>
      <button onClick={handleRefresh}>새로고침</button>
    </div>
  );
};

export default IterationComponentQ2;
