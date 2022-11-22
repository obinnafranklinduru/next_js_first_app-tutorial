import Link from 'next/link'
import Style from '../styles/Article.module.css'

const ArticleItem = ({ article }) => {
    return (
    <Link href="/article/[id]" as={`/article/${article.id}`} legacyBehavior>
      <a className={Style.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  )
}

export default ArticleItem