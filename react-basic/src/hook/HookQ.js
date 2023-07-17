import { useEffect, useRef, useState } from "react";

const HookQ = () => {
  //usestate
  const [form, setForm] = useState({ id: "", pw: "" });

  // 각 input태그의 ref
  const idRef = useRef(null);
  const pwRef = useRef(null);

  // usestate 관리
  const handleChange = (e) => {
    const copy = { ...form, [e.target.name]: e.target.value };
    setForm(copy);
  };

  //useEffect 첫번째 마운트에 포커싱
  useEffect(() => {
    idRef.current.focus();
  }, []);

  // 버튼 클릭 이벤트
  const handleClick = () => {
    if (form.id === "") {
      alert("아이디는 필수입니다");
      idRef.current.focus();
      return;
    } else if (form.pw === "") {
      alert("비밀번호는 필수입니다");
      pwRef.current.focus();
      return;
    }

    alert(`id ${form.id} pw ${form.pw}`);
  };
  return (
    <div>
      <h3>실습</h3>
      <p>
        로그인 클릭시 공백이라면 공백인 태그에 포커스 추가 <br />
        공백이 아니라면 경고창으로 입력된 id, pw를 출력 <br />
        첫번째 마운트 이후에는 id에 자동 포커싱
      </p>
      <input
        type="text"
        onChange={handleChange}
        placeholder="아이디"
        name="id"
        value={form.id}
        ref={idRef}
      />
      <br />
      <input
        type="password"
        onChange={handleChange}
        placeholder="비밀번호"
        name="pw"
        value={form.pw}
        ref={pwRef}
      />
      <br />
      <button type="button" onClick={handleClick}>
        로그인
      </button>
    </div>
  );
};

export default HookQ;

/*
import { useEffect, useRef, useState } from "react";

const HookQ = () => {
  //usestate
  const [form, setForm] = useState({ id: "", pw: "" });

  // idRef
  const idRef = useRef(null);
  // pwRef
  const pwRef = useRef(null);

  // 로그인 클릭시 이벤트
  const handleLogin = () => {
    const id = idRef.current.value;
    const pw = pwRef.current.value;

    if (id === "") {
      alert("아이디는 필수입니다");
      idRef.current.focus();
    } else if (pw === "") {
      alert("비밀번호는 필수입니다");
      pwRef.current.focus();
    } else {
      alert(`아이디는 ${form.id} 비밀번호는 ${form.pw}`);
    }
  };

  // useEffect로 처음 id에 포커스
  useEffect(() => {
    idRef.current.focus();
  }, []);

  const handleId = (e) => {
    setForm({ ...form, id: e.target.value });
  };
  const handlePw = (e) => {
    setForm({ ...form, pw: e.target.value });
  };

  return (
    <div>
      <h3>실습</h3>
      <p>
        로그인 클릭시 공백이라면 공백인 태그에 포커스 추가 <br />
        공백이 아니라면 경고창으로 입력된 id, pw를 출력 <br />
        첫번째 마운트 이후에는 id에 자동 포커싱
      </p>
      <input
        type="text"
        ref={idRef}
        onChange={handleId}
        placeholder="아이디"
        value={form.id}
      />
      <br />
      <input
        type="password"
        ref={pwRef}
        onChange={handlePw}
        placeholder="비밀번호"
        value={form.pw}
      />
      <br />
      <button type="button" onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
};

export default HookQ;
*/
