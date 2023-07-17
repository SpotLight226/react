// 강사님
import { useState } from "react";

const IterationComponentQ2_1 = () => {
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

  const newSelect = select.map((item, index) => (
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

  const [list, setList] = useState(data); // 목록 값
  const [search, setSearch] = useState(""); // input 값

  const newList = list.map((item) => (
    <li key={item.id}>
      {item.type}-{item.teacher}
    </li>
  ));

  //3 - 셀렉트박스가 체인지되면 이벤트객체를 활용해서 선택된 값만 필터링해주세요.

  const handleChange = (e) => {
    // e.target.value; // select가 선택한 값
    // data의 요소에서 type이 select에서 선택한 값과 같으면 true
    // 고정된 요소에서 찾아야 나온다 : state로 찾으면 state가 변경될 때 안 나옴
    const newList = data.filter((item) => item.type === e.target.value);

    setList(newList);
  };

  //4 - 검색기능 (input태그의 값이 변경되면 핸들링)

  const handleClick = () => {
    // data 에서 filter
    // data의 type을 소문자로 바꿔서 search state의 값을 찾는다 or teacher에서 찾음
    let newList = data.filter(
      (item) =>
        item.type.toLowerCase().includes(search) ||
        item.teacher.includes(search)
    );

    setList(newList);
  };

  return (
    <div>
      <h3>강사님</h3>
      <hr />
      <h3>실습</h3>
      Search: {/* input 태그에서 바로 setSearch */}
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <button onClick={handleClick}>검색</button>
      <br />
      과목찾기:
      <select onChange={handleChange}>{newSelect}</select>
      <ul>{newList}</ul>
    </div>
  );
};

export default IterationComponentQ2_1;
