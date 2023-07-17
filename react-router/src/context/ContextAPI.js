import { createContext } from "react";

// 전역으로 사용할 컨텍스트API 를 생성
const ColorContext = createContext({ color: "red" }); // 초기값 지정

console.log(ColorContext);

export default ColorContext;
