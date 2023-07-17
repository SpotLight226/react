// class 형
// React 를 import
import React from "react";

//React.Component 를 상속 받음
//클래스형에서 props와 state
class StateComponent2 extends React.Component {
  //클래스형 컴포넌트가 생성될 때 생성자로 프롭스 전달
  constructor(props) {
    // 부모 컴포넌트에게 전달
    super(props);
    // 생성자 안에서 this -> 멤버변수
    this.state = {
      // 초기값 지정
      name: "홍길동",
      age: props.age,
    };
  }

  // 스테이트 값 변경 함수
  // 클래스 안에서는 키워드(const, let)을 작성 안 함
  handleState = () => {
    //비동기적으로 state변경
    //class에서 setState 제공
    // 객체이므로 각 키의 value를 변경
    this.setState({ name: "이순신", age: 30 });
  };

  // render 함수를 오버라이드
  render() {
    // props 는 자동으로 전달
    // const { age } = this.props;
    // render 안에서 return
    return (
      <div>
        <div>클래스형 컴포넌트</div>
        {/* 프롭스값: {age} */}
        {/* state객체의 키의 value */}
        스테이트값 : {this.state.name} <br />
        스테이트값 : {this.state.age} <br />
        {/* 이벤트 함수는 class의 멤버변수 */}
        <button onClick={this.handleState}>스테이트 체인지</button>
      </div>
    );
  }
}

export default StateComponent2;
