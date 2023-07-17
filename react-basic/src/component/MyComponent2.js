import React from "react";
import PropTypes from "prop-types";

/* 클래스형 컴포넌트 */
class MyComponent2 extends React.Component {
  render() {
    //클래스형 컴포넌트는 멤버변수 props로 자동 전달된다
    // console.log(this.props);

    const { name, age } = this.props;

    return (
      <div>
        나의 클래스형 컴포넌트~~~~!!!
        <br />
        클래스형 props : {name}
        <br />
        클래스형 props : {age}
        <br />
      </div>
    );
  }
}

// default 값 설정
MyComponent2.defaultProps = {
  name: "장도도",
  age: 10,
};

// props 타입 확인
MyComponent2.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
};

export default MyComponent2;
