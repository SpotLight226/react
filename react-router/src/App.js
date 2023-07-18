import { Route, Routes } from "react-router-dom";
import NewsHome from "./component2/NewsHome";
import Header from "./layout/Header";

const App = () => {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<NewsHome />} />
        {/* 페이지를 이동하지 않고, 밑에 NewHome을 띄운다 
						/:<가변적으로 변하는 값>*/}
        <Route path="/:category" element={<NewsHome />} />
      </Route>
    </Routes>
  );
};

export default App;
