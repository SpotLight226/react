import { useContext, useRef } from "react";
import UserContext from "../context/ContextAPI2";

const C = () => {
  const { state, action } = useContext(UserContext);

  //ref 설정
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  const handleClick = () => {
    // provider 값을 외부에서 변경
    action.setUser({
      id: inputRef1.current.value,
      name: inputRef2.current.value,
    });

    inputRef1.current.value = "";
    inputRef2.current.value = "";
  };

  return (
    <div>
      <h3>C 컴포넌트</h3>
      <input type="text" ref={inputRef1} placeholder="id" />
      <input type="text" ref={inputRef2} placeholder="name" />
      <button onClick={handleClick}>provider값 변경하기</button>

      {state.id}
      {state.name}
    </div>
  );
};

export default C;
