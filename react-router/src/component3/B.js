import { useContext } from "react";
import UserContext from "../context/ContextAPI2";

const B = () => {
  const { state, action } = useContext(UserContext);

  return (
    <div>
      <h3>B 컴포넌트</h3>
      {state.id}
      {state.name}
    </div>
  );
};

export default B;
