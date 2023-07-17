import { useEffect, useState } from "react";

const HookEffect = () => {
  // state를 관리하는 훅
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  console.log(1);

  //생명주기 훅
  // useEffect ( 콜백함수, 배열(한번만 실행하고자 한다면))
  // useEffect(() => {
  //   console.log("랜더링완료: " + name);
  // });

  //useEffect 를 한번만 실행하고자 한다면 두번째 매개변수 []배열을 넣는다
  // useEffect(() => {
  //   console.log("첫번째 마운트 이후에만 실행된다");
  // }, []);

  // 특정 값이 업데이트 될때 실행된다
  useEffect(() => {
    console.log("name 업데이트 시에 실행된다");

    return () => {
      console.log("unmount될 때 실행된다");
      console.log(`인풋의 값이 바뀌기 직전 값 : ${name}`); // state가 ab로 변경할 때 a가 출력
    };
  }, [name, age]);

  console.log(2);

  return (
    <div>
      <h3>mount와 unmount, update이후</h3>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <br />
      <input
        type="number"
        onChange={(e) => setAge(e.target.value)}
        value={age}
      />
      <br />
      이름: {name} 나이 : {age}
    </div>
  );
};

export default HookEffect;
