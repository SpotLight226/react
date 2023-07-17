import { useState } from "react";

const EventComponent = () => {
  /* input 처음 에서 사용할 useState */
  const [name, setName] = useState("");
  /* 두번째 input에서 사용할 useState */
  const [topic, setTopic] = useState("");

  // input태그의 값(value)를 핸들링할 이벤트 함수
  // event객체를 첫번째 매개변수로 받는다
  const handleChange = (e) => {
    // console.log(e.target); // 사용자의 입력값
    // event객체의 target은 이벤트 발생한 태그 자기 자신
    setName(e.target.value);
    // 마지막으로 input의 value속성에 리액트의 state를 적는다
  };

  /* keyUP 이벤트 */
  const handleKeyUp = (e) => {
    // 2개 씩 뜨는 것은 bug (maybe 한글이 2byte 라서?)
    // enter도 키 라서 작동한다 : keyCode = 13, key = 'Enter'

    //enter를 쳤을 때 동작함
    if (e.key === "Enter") {
      // console.log("엔터 눌렀어~~~!!");
      // handleClick 함수를 실행 : 버튼을 클릭한 것과 동일한 효과
      handleClick();
    }
  };

  /* click 이벤트 */
  const handleClick = () => {
    alert(`${name}님의 할일목록은 ${topic}`);
    // state를 ""으로 설정
    setName("");
    setTopic("");
  };

  return (
    <div>
      <h3>리액트의 이벤트 핸들링(input태그의 change)</h3>
      {/* 이벤트 태그에서 이벤트 발생시 event 객체를 onChange의 이벤트함수로 전달 
				  변경되는 state를 input태그의 value로 설정*/}
      <input type="text" name="name" onChange={handleChange} value={name} />
      변경된 값: {name}
      <br />
      <hr />
      <h3>리액트 이벤트(keyUp)</h3>
      <input
        type="text"
        /* 이벤트를 여러 개 건다면, 줄 바꿔서 작성 */
        onChange={(e) => setTopic(e.target.value)}
        onKeyUp={handleKeyUp}
        value={topic}
      />
      변경된 값: {topic}
      <hr />
      <br />
      <h3>리액트 이벤트(click)</h3>
      <button onClick={handleClick}>클릭</button>
    </div>
  );
};

export default EventComponent;
