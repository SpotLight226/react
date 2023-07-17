import { Fragment } from "react";

function App() {
  const name = "홍길동";
  const age = 20;

  return (
    <>
      <Fragment>
        <div className="App">
          {/* 주석은 이렇게 적는다 */}
          <ul>
            <li>1. JSX의 주석 규칙은 alt + shift + a {/* 이게 주석!!! */}</li>
            <li>
              2. JSX에서는 반드시 하나의 태그(JSX 형태)를 ()로 리턴해야 한다
            </li>
            <li>
              3. div태그를 사용하기 싫다면 Fragment 태그 or 없는 모형<></> 를
              사용할 수 있다{" "}
            </li>
            <li>
              4. 함수 안에서 만들어진 변수는 중괄호 참조를 사용한다 {name}{" "}
              입니다 {age}세 입니다
            </li>
            <li>5. JSX에서 if문을 사용하고 싶다면, 3항 연산자를 사용한다</li>
            <li>6. 화면에 보여주고 싶은게 없는 경우에는 null을 반환</li>
            <li>7. undefined을 반환하는 상황을 만들면 안된다</li>
            <li
              style={{
                color: "red",
                backgroundColor: "yellow",
                fontSize: 18,
              }}
            >
              8. DOM요소(태그)에 스타일을 직접 넣을 때는 반드시 객체형으로 묶고
              카멜표기법을 사용한다
            </li>
            <li>9. class대신 className속성을 사용한다 </li>
            <li>
              10. HTML5의 문법을 정화하게 지킨다 (홀로 사용되는 태그는 반드시
              닫는 태그로 작성 : input, img, br 등등)
            </li>
          </ul>

          {name === "홍길동" ? "홍길동입니다" : "홍길동이 아닙니다"}
          {name === "홍길동" ? <p>홍길동 입니다</p> : <p>홍길동이 아닙니다</p>}
          {age !== 20 ? <p>20세 입니다</p> : null}
          {/* {age !== 20 ? <p>20세 입니다</p> : undefined} => 하지 말자 null 이용*/}

          <input />
          <img alt="제목" src="#" />
          <br />
        </div>
      </Fragment>
    </>
  );
}

export default App;
