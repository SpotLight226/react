import { NavLink } from "react-router-dom";
import styled from "./Category.module.css";

const Category = () => {
  // business, entertainment, general, health, science, sports, technology
  const list = [
    { name: "all", topic: "전체" },
    { name: "business", topic: "비지니스" },
    { name: "entertainment", topic: "연예" },
    { name: "general", topic: "일반" },
    { name: "health", topic: "건강" },
    { name: "science", topic: "과학" },
    { name: "sports", topic: "스포츠" },
    { name: "technology", topic: "기술" },
  ];

  const myStyle = {
    backgroundColor: "tomato",
    color: "white",
    textDecoration: "none",
  };

  return (
    <div>
      <ul className={styled.warp}>
        {/* <NavLink to="xxx">전체</NavLink> */}
        {list.map((item, index) => (
          <li key={index}>
            {/* item의 name 속성이 all 이라면 / (홈으로) , 아니라면 각 카테고리로 */}
            <NavLink
              to={item.name === "all" ? "/" : `/${item.name}`}
              style={({ isActive }) => (isActive ? myStyle : undefined)}
            >
              {item.topic}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
