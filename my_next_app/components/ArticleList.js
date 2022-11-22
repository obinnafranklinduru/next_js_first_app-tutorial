import ArticleItem from './ArticleItem'
import Style from '../styles/Article.module.css'

const ArticleList = ({ articles }) => {
  return (
    <div className={Style.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  )
}

export default ArticleList