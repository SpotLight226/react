import { useState } from "react";

const EventComponentQ = () => {
  const [select, setSelect] = useState("메뉴를 선택하세요");

  // 값이 변경되었을 때 실행
  const handleSelect = (e) => {
    // select state 를 변경한다
    setSelect(e.target.value);
  };

  return (
    <div>
      <h3>셀렉트 태그 핸들링(실습)</h3>

      <p>셀렉트 태그가 체인지 될 때 선택한 결과를 아래에 출력</p>
      {/* onClick : 말 그대로 클릭할 때, onChange : 값이 변경될 때 */}
      <select onChange={handleSelect} value={select}>
        <option>피자</option>
        <option>햄버거</option>
        <option>치킨</option>
      </select>

      <h3>선택한 결과</h3>
      <p style={{ fontSize: 20 }}>{select}</p>
    </div>
  );
};

export default EventComponentQ;
