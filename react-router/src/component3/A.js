import { useContext, useRef } from "react";
import UserContext from "../context/ContextAPI2";
import C from "./C";

const A = () => {
  //useContext훅 - 이용해서 값을 조회하거나 or 값을 제어
  // API에서 설정한 컨텍스트를 리턴 : state 와, setter 가 들어가 있다
  // provider의 value값을 사용할 수 있다
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
      <h3>A 컴포넌트</h3>
      <input type="text" ref={inputRef1} placeholder="id" />
      <input type="text" ref={inputRef2} placeholder="name" />
      <button onClick={handleClick}>provider값 변경하기</button>

      <div>
        {state.id}
        {state.name}
      </div>

      <C />
      {/* <UserConsumer>
        {(value) => (
          <div>
            {value.state.id}
            <br />
            {value.state.name}
          </div>
        )}
      </UserConsumer> */}
    </div>
  );
};

export default A;
