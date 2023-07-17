import ColorContext from "../context/ContextAPI";

const ColorComponent = () => {
  const colorHandler = (value) => {
    return <div>컬러컴포넌트 value: {value.color}</div>;
  };

  return (
    /* Consumer에서는 컨텍스트API의 사용, 값을 전달받은 함수를 하나 선언하고, 첫번째 매개변수로 받는다 */
    // ColoerContext 안의 Consumer 속성 사용
    <ColorContext.Consumer>
      {/* 사용 방법 1st
					화살표 함수 의 return을 ()로 묶으면 객체를 반환 */}
      {/*{(value) => (
        <div>
          컬러컴포넌트 value: {value.color} // 컨텍스트의 초기값
        </div>
      )} */}
      {colorHandler}
    </ColorContext.Consumer>
  );
};

export default ColorComponent;
