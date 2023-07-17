import { createContext, useState } from "react";

// 1. useContext 훅
const UserContext = createContext({
  state: { id: "초기값", name: "초기값" },
  action: {
    setUser: () => {},
  },
});

// 2. Provider 함수 선언
// 반드시 children
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ id: "aaa", name: "홍길동" });

  const value = {
    // 위의 초기 값이 바뀌었을 때, API fubctib 의 값도 변경
    state: user,
    action: { setUser },
  };

  // 외부에서 provider 사용시 아래의 값이 나온다
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// 3. Consumer함수 반환
const UserConsumer = UserContext.Consumer;

// 일반 export는 여러 개 OK
export { UserProvider, UserConsumer };
// default 는 한 개
export default UserContext;
