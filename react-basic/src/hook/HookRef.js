import { useRef, useState } from "react";

const HookRef = () => {
  //state 선언
  const [form, setForm] = useState({ data: "", result: "" });

  //useRef
  const inputRef = useRef(null);

  // input 값으로 state 를 관리하기 위한 이벤트 함수
  const handleChange = (e) => {
    // result 값은 유지시키기 위해서 spread로 가져오고, data만 변경한다
    const copy = { ...form, data: e.target.value };
    // console.log(copy);
    setForm(copy);
  };

  // 버튼을 클릭해서
  const handleClick = () => {
    // ref의 current속성에 태그를 넣어준다
    console.log(inputRef); // 객체
    console.log(inputRef.current); // 태그
    console.log(inputRef.current.value); // 태그 값

    setForm({ data: "", result: inputRef.current.value });
    // 인풋태그는 focus 로 포커스를 걸 수 있다
    inputRef.current.focus(); // 인풋태그에 포커스
  };

  return (
    <div>
      <h3>useRef(특정태그 이름달기)</h3>

      <input
        type="text"
        onChange={handleChange}
        value={form.data}
        // input태그에 ref 속성을 이용한다
        ref={inputRef}
      />
      <button onClick={handleClick}>확인하기</button>

      {form.result}
    </div>
  );
};

export default HookRef;
