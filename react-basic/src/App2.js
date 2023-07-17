import { Fragment } from "react";
import MyComponent from "./component/MyComponent";
import MyComponent2 from "./component/MyComponent2";
import MyComponent3 from "./component/MyComponent3";

function App() {
  return (
    /* 하나로 묶어준다 */
    <Fragment>
      <div>나의 새로운 컴포넌트</div>
      {/* 함수형 컴포넌트 */}
      <MyComponent
        name={"홍길동"}
        age={20}
        addr={"서울시"}
        email={"상위@naver.com"}
      />

      <MyComponent name={"이순신"} age={30} addr={"경기도"} />
      <MyComponent name={"홍길자"} />

      {/* 클래스형 컴포넌트 */}
      <MyComponent2 name={"강감찬"} age={40} />

      {/* 
			함수형 컴포넌트 MyComponent3 을 생성
			props는 title, content, writer을 전달
			writer의 기본값은 admin으로 선언
			 */}
      <MyComponent3 title={"아프니까 아프다"} content={"이게 뭘까요"} />
    </Fragment>
  );
}

// 반드시 작성해준다 : index.js 가 사용하고 있음
export default App;
