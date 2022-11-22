import Link from 'next/link'
//import { useRouter } from 'next/router'
import { server } from '../../../config'
import Meta from '../../../components/Meta'
// import ArticleItem from '../../components/ArticleItem'

const index = ({article}) => {
    // const router = useRouter();
    // const id = router.query.id
  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href='/'>Go Back</Link>
    </>
  )
}

// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json()
//     return {
//         props: {
//             article
//         }
//     }
// }

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)

//   const articles = await res.json()

//   const ids = articles.map((article) => article.id)
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }))

//   return {
//     paths,
//     fallback: false,
//   }
// }

// Using Server Side Rendering Pattern
// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json()
//     return {
//         props: {
//             article
//         }
//     }
// }

// export default index


export const getServerSideProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`);
    const article = await res.json()
    return {
        props: {
            article
        }
    }
}

export default index