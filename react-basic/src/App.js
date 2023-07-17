import { Fragment } from "react";

import "./css/App.css"; // 일반 css 적용
import x from "./css/App.module.css"; // 다른 변수 이름으로 임포트

const App = () => {
  console.log(x);
  return (
    <Fragment>
      <header className="app_header">
        <p style={{ color: "red", textAlign: "center" }}>안녕하세요~~~!!!</p>
      </header>

      <section className={x.warp}>
        <div className={x.item}>
          <p className="inner">CSS모듈</p>
          <input type="text" className="input_control" />
        </div>
      </section>
    </Fragment>
  );
};

export default App;
