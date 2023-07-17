import { useState } from "react";

const EventComponent2 = () => {
  //state 여러 개를 객체로 관리
  const [form, setForm] = useState({ name: "", topic: "" });

  /* input태그는 하나로 관리하는 것이 쉽다 */
  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    /* 전개 키워드 ... 으로 useState 객체를 복사 */
    /* event 객체의 target의 name을 키 로 vlaue를 target태그의 value로 */
    const copy = { ...form, [e.target.name]: e.target.value }; // 객체 복사
    setForm(copy);
    console.log(copy);
  };

  // 버튼 이벤트
  const handleClick = () => {
    alert(`${form.name}님의 할일목록 ${form.topic}`);
    // 각 state를 초기화
    setForm({ name: "", topic: "" });
  };
  // Enter 이벤트 : keyUP이 일어날 때, handleClick 이벤트 함수를 실행
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div>
      <h3>리액트의 이벤트 핸들링(input태그의 change)</h3>
      {/* state의 키 로 name을 맞춘다 
					value값 유지*/}
      <input
        type="text"
        name="name"
        onChange={handleChange}
        value={form.name}
      />
      변경된 값: {form.name}
      <br />
      <hr />
      <h3>리액트 이벤트(keyUp)</h3>
      <input
        type="text"
        name="topic"
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        value={form.topic}
      />
      변경된 값: {form.topic}
      <br />
      <hr />
      <h3>리액트 이벤트(click)</h3>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
};

export default EventComponent2;
