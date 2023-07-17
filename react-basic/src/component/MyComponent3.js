import PropTypes from "prop-types";

const MyComponent3 = ({ title, content, writer }) => {
  return (
    <div>
      실습 컴포넌트
      <br />
      실습 title : {title} <br />
      실습 content : {content} <br />
      실습 writer : {writer} <br />
    </div>
  );
};

// writer 기본값 지정
MyComponent3.defaultProps = {
  writer: "admin",
};

// title 타입 확인
MyComponent3.propTypes = {
  // title 타입을 string으로
  title: PropTypes.string,
};
export default MyComponent3;
