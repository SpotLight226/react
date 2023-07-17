import { useReducer } from "react";

//1. 리듀서 함수 (state값, 리듀서 실행함수가 전달하는 상태값)
const myReducer = (state, action) => {
  console.log(state);
  console.log(action);

  //action에 따라서 상태를 변경하고 return state 반환
  if (action.x === "increase") {
    // useReducer에서 설정한 state 형태를 가져와서 수정한다
    state = { value: state.value + 1 };
  } else if (action.x === "decrease") {
    state = { value: state.value - 1 };
  } else if (action.x === "reset") {
    state = { value: 0 };
  }

  return state;
};

const HookReducer = () => {
  //2. const [현재state, 리듀서 실행함수] = 리듀서 훅 (리듀서 함수, state초기값)
  const [state, func] = useReducer(myReducer, { value: 0 });

  // 클릭 이벤트
  const handleClick = () => {
    //리듀서 함수를 실행
    func({ x: "increase" });
  };

  return (
    <div>
      <h3>실습</h3>
      <h3>카운트 : {state.value}</h3>
      {/* 이벤트가 발생하면, 리듀서 실행함수를 호출하며, 매개변수로 객체를 전달
					객체에는 프로퍼티가 들어있고, 프로퍼티의 값에는 리듀서에서 구분할 수 있는
					값(문자열 등)을 할당해서 전달한다 */}
      <button onClick={handleClick}>증가</button>
      <button onClick={() => func({ x: "decrease" })}>감소</button>
      <button onClick={() => func({ x: "reset" })}>초기화</button>
    </div>
  );
};

export default HookReducer;
