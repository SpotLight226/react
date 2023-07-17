import Category from "./Category";
import NewsList from "./NewsList";

const NewsHome = () => {
  return (
    <div>
      <h3>뉴스홈</h3>

      {/* NewsList 컴포넌트를 사용 */}
      <Category />
      <NewsList />
    </div>
  );
};

export default NewsHome;
