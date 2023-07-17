import { useState } from "react";

const IterationComponentQ = () => {
  const arr = [
    { src: "/img/img1.png", title: "아이폰10", price: 1000 },
    { src: "/img/img2.png", title: "아이폰11", price: 2000 },
    { src: "/img/img3.png", title: "아이폰12", price: 3000 },
    { src: "/img/img4.png", title: "아이폰13", price: 4000 },
  ];

  //1. arr을 state로 관리
  const [list, setList] = useState(arr);

  //2. img의 src를 관리할 state변수
  const [img, setImg] = useState("/img/img1.png");

  //3. 이벤트
  const handleClick = (e) => {
    // console.log(e.target);
    // 이미지가 아니라면 종료
    if (e.target.tagName !== "IMG") {
      return;
    }
    // 이미지의 src를 변경
    setImg(e.target.src);
  };

  const newList = list.map((item, index) => (
    <div key={index} onClick={handleClick}>
      <img src={item.src} width="100" alt={item.title} />
      <p>상품 : {item.title}</p>
      <p>가격 : {item.price}</p>
    </div>
  ));

  return (
    <div>
      <h3>이미지 데이터 반복해보기</h3>

      <div>
        <img src={img} alt="제목" />
      </div>

      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {newList}
      </div>
    </div>
  );
};

export default IterationComponentQ;

/* 내가 한 것
import { useState } from "react";

const IterationComponentQ = () => {
  const arr = [
    { src: "/img/img1.png", title: "아이폰10", price: 1000 },
    { src: "/img/img2.png", title: "아이폰11", price: 2000 },
    { src: "/img/img3.png", title: "아이폰12", price: 3000 },
    { src: "/img/img4.png", title: "아이폰13", price: 4000 },
  ];

  const imgList = arr.map((item) => (
    <div
      key={item.title}
      style={{
        marginRight: 30,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img src={item.src} alt={item.title} />
      <p>{item.title}</p>
      <p>가격: {item.price} 원</p>
    </div>
  ));

  const [mainImg, setMainImg] = useState(
    <img src={arr[0].src} alt={arr[0].title} />
  );

  const handleImg = (e) => {
    if (e.target.tagName === "IMG") {
      const change = <img src={e.target.src} alt={e.target.alt} />;
      setMainImg(change);
    }
  };

  return (
    <div>
      <h3>이미지 데이터 반복해보기</h3>

      <div>{mainImg}</div>

      <div style={{ display: "flex" }} onClick={handleImg}>
        {imgList}
      </div>
    </div>
  );
};

export default IterationComponentQ;
*/
