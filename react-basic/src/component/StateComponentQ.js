import { useState } from "react";

const StateComponentQ = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>실습</h3>
      <h3>카운트 : {count}</h3>
      <button onClick={() => setCount(count + 1)}>증가</button>
      <button onClick={() => setCount(count - 1)}>감소</button>
      <button onClick={() => setCount(0)}>초기화</button>
    </div>
  );
};

export default StateComponentQ;
