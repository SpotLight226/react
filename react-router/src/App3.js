import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  /* 
    1. npm install axios  : 설치 
  */

  // axios 의 resonse 데이터를 핸들링할 state
  const [data, setData] = useState({});
  // 실기 axios 를 핸들링할 state
  const [dataBy, setDataBy] = useState([{ key: "", value: "" }]);

  // 강사님
  // 실기 data를 핸들링할 useState
  const [otp, setOtp] = useState([]);

  const handleClick = () => {
    // fetch의 반환 Promise
    // axios의 반환 Promise
    // 결론 === 문법이 똑같다
    // 단 axios 의 Promise 는 reponse에 data 를 바로 담아준다
    // 즉, json() 을 거치지 않고 바로 사용할 수 있다
    axios
      .get(
        "https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json"
      )
      .then((response) => setData(response.data));
  };

  // 이 데이터를 화면이 로드될 때 axios로 처리해보기
  // https://raw.githubusercontent.com/yopy0817/data_example/master/by.json

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/yopy0817/data_example/master/by.json"
      )
      .then((response) => {
        setDataBy(response.data);
      });
  }, []);

  /* 강사님 */
  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/yopy0817/data_example/master/by.json"
      )
      .then((a) => setOtp(a.data));
  }, []);

  const list = dataBy.map((item) => <li key={item.key}>{item.value}</li>);

  // async & await
  // async 와 aswait을 사용하지 않은 비동기 방식
  // axios 는 순서를 보장하지 않으므로, 데이터를 가져오는 순번대로 실행된다
  /*
  const handleClick2 = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json"
      )
      .then((data) => console.log(1));

    console.log(2);

    axios
      .get(
        "https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json"
      )
      .then((data) => console.log(3));

    console.log(4);

    axios
      .get(
        "https://raw.githubusercontent.com/yopy0817/data_example/master/by.json"
      )
      .then((data) => console.log(5));

    console.log(6);
  };
	
  // 콜백 함수를 이용해서 순서를 보장해서 실행
  const handleClick2 = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json"
      )
      .then((data) => {
        console.log(1);
        axios
          .get(
            "https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json"
          )
          .then((data) => {
            console.log(3);
            axios
              .get(
                "https://raw.githubusercontent.com/yopy0817/data_example/master/by.json"
              )
              .then((data) => {
                console.log(5);
              });
          });
      });

    console.log(2);

    console.log(4);

    console.log(6);
  };
	*/

  // async & await를 사용해서 순서를 보장하는 방식
  // 1. asyncs 안에서 await을 사용할 수 있다
  // 2. function에 async를 붙이면 return이 Promise 객체가 된다
  // 3. return이 Promise 객체라면, await를 사용할 수 있고, then 절을 생략할 수 있다
  // 부모 함수에 async => 밑의 함수에 await 사용 가능
  const handleClick2 = async () => {
    // axois의 return은 Promise다 => await를 사용가능 => async를 부모 함수에 붙여준다
    // then절에서 받아야할 result를 바로 받을 수 있다
    const result = await axios.get(
      "https://raw.githubusercontent.com/yopy0817/data_example/master/hi.json"
    );
    console.log(result); // 1

    const result2 = await axios.get(
      "https://raw.githubusercontent.com/yopy0817/data_example/master/hello.json"
    );
    console.log(result2); // 2

    const result3 = await axios.get(
      "https://raw.githubusercontent.com/yopy0817/data_example/master/by.json"
    );
    console.log(result3); // 3
  };

  return (
    <div>
      <h3>엑시오스 사용하기</h3>
      <button onClick={handleClick}>데이터 가져오기</button>
      <button onClick={handleClick2}>async확인하기</button>
      <p>
        {data.userId} <br />
        {data.userPw} <br />
        {data.userName}
      </p>
      <ul>{list}</ul>

      {/* 강사님 */}
      <h3>강사님</h3>
      <select>
        {otp.map((item) => (
          <option key={item.key} value={item.value}>
            {item.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default App;
