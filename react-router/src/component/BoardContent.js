import { useParams } from "react-router-dom";

const BoardContent = () => {
  //URL 파라미터로 받음
  const { num } = useParams();

  console.log(num);

  return (
    <div>
      <h3>BoardContent페이지</h3>
      {num} 입니다
    </div>
  );
};

export default BoardContent;
