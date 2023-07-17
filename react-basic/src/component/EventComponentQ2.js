import { useState } from "react";

const EventComponentQ2 = () => {
  const [form, setForm] = useState({ topic: "", result: "" });

  const handleChange = (e) => {
    /* input태그의 value를 객체의 해당 키의 value로 만든다 */
    // result는 유지시키기 위해 result의 value를 form의 result value로 만든다
    setForm({ topic: e.target.value, result: form.result });
  };

  const handleClick = () => {
    // result의 value를 topic의 value로 치환하고, topic의 value는 공백으로
    setForm({ topic: "", result: form.topic });
  };

  return (
    <div>
      <h3>인풋데이터 핸들링(실습)</h3>
      <p>클릭시 데이터는 공백으로, 결과는 인풋이 입력한 값으로 처리</p>
      <input
        type="text"
        name="topic"
        onChange={handleChange}
        value={form.topic}
      />
      <button onClick={handleClick}>추가하기</button>

      <h3>결과</h3>
      <p>{form.result}</p>
    </div>
  );
};

export default EventComponentQ2;
