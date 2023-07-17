import { Fragment, useState } from "react";
import HookEffect from "./hook/HookEffect";
import HookRef from "./hook/HookRef";
import HookQ from "./hook/HookQ";
import HookReducer from "./hook/HookReducer";
import IterationComponentQ2 from "./component/IterationComponentQ2";
import IterationComponentQ2_1 from "./component/IterationComponentQ2_1";
const App = () => {
  // 화면을 제어할 state 변수
  // 보이기 숨기기 - unmount값 확인
  const [visible, setVisible] = useState(true);

  // 화면 제어 이벤트 함수
  const handleVisible = () => {
    // 클릭시, state를 반대로 변경
    setVisible(!visible);
  };

  // console.log(visible);

  // 컴포넌트가 사라질 때 unmount가 실행된다
  return (
    <Fragment>
      {/* 문자도 동일하게 삼항 연산자를 사용하여 제어할 수 있다 */}
      <button onClick={handleVisible}>{visible ? "숨기기" : "보이기"}</button>
      {/* 삼항 연산자를 사용해서 visible의 값에 따라 태그를 제어한다 */}
      {visible ? <HookEffect /> : null}

      <hr />
      <HookRef />

      <hr />
      <HookQ />

      <hr />
      <HookReducer />

      <hr />
      <IterationComponentQ2 />

      <hr />
      <IterationComponentQ2_1 />
    </Fragment>
  );
};

export default App;
