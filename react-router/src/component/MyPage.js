import { useNavigate, Navigate } from "react-router-dom";

const MyPage = () => {
  const loginYN = false; // localStorage.getItem("token");

  // navigate 훅을 이용하면 렌더링과정에서 사용이 불가능하다
  // const nav = useNavigate();
  // if (!loginYN) {
  //    nav("/"); // history.ts:487 You should call navigate() in a React.useEffect(), not when your component is first rendered.
  // }

  // to = 경로 replace = 기록을 남기는지 여부
  if (!loginYN) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div>
      <h3>여기는 권한이 있는 사람만 접근할 수 있음</h3>
    </div>
  );
};

export default MyPage;
