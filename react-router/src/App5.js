import ColorComponent from "./component3/ColorComponent";
import ColorContext from "./context/ContextAPI";

const App = () => {
  return (
    /* provider 하위컴포넌트에 전달할 props 값을 제공하는 역할
			 - value 속성에는 consumer에서 제어할 값이 들어간다 
			 Context의 초기값을 덮어쓰고, Consumer에게 전달*/

    <div>
      {/* 사용할 컴포넌트를 Provider로 묶는다 */}
      <ColorContext.Provider value={{ color: "tomato" }}>
        <ColorComponent />
      </ColorContext.Provider>
    </div>
  );
};

export default App;
