import ArticleList from '../components/ArticleList'
import Meta from '../components/Meta'
import { server } from '../config'
import styles from '../styles/Home.module.css'

export default function Home({articles}) {
  return (
    <div className={styles.container}>
      <Meta />
      <ArticleList articles={articles}/>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json().catch(err => err.message)
  return {
    props: {
      articles
    }
  }
}

// Using JsonPlaceHolder API
// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
//   const articles = await res.json().catch(err => err.message)
//   return {
//     props: {
//       articles
//     }
//   }
// }