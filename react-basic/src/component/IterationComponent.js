const IterationComponent = () => {
  const arr = [1, 2, 3, 4, 5];

  // map : 기존 배열을 가지고 새로운 배열을 생성
  // const newArr = arr.map((val, idx, ar) => {
  //   console.log(val); // 값
  //   console.log(idx); // 인덱스
  //   console.log(ar); // 배열

  //   // 새로운 배열을 반환
  //   return val * 10;
  // });
  // console.log(newArr); // [10, 20, 30, 40, 50]

  // 필요한 것은 val 값
  // 결과 동일
  // const result = arr.map((val) => val * 10);
  // console.log(result); // [10, 20, 30, 40, 50]

  // map을 이용해서 반복할 태그를 생성
  // key 는  컴포넌트 반복시 고유하게 지정해야 하는 값이다 (권고사항)
  const result = arr.map((item, index) => <li key={index}>{item}</li>);

  const list = [
    { id: 1, title: "aaa13" },
    { id: 2, title: "bbb13" },
    { id: 3, title: "ccc13" },
  ];

  // select 태그 안에 option태그 넣기
  const result2 = list.map((item) => (
    <option key={item.id}>{item.title}</option>
  ));

  return (
    <div>
      <h3>컴포넌트 반복</h3>
      <ul>{result}</ul>

      <h3>여기에 컴포넌트 반복으로 값을 넣어주세요 option으로 넣기</h3>
      <select>{result2}</select>
    </div>
  );
};

export default IterationComponent;
