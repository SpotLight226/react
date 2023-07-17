const dateToString = (date) => {
  let now = new Date(date);

  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  return `${year}-${month < 10 ? "0" + month : month}
								 -${day < 10 ? "0" + day : day}`;
};

// 들어온 props 를 구조 분해 할당으로 item에 할당한다
const NewsArticle = ({ item, index }) => {
  return (
    <li>
      <a href={item.url}>
        <img src={item.urlToImage} alt={item.title} />
        <article>
          <p>기자 : {item.author}</p>
          <p>일자 : {dateToString(item.publishedAt)}</p>
          <p>제목 : {item.title}</p>
          <p>설명 : {item.description}</p>
        </article>
      </a>
    </li>
  );
};

export default NewsArticle;
