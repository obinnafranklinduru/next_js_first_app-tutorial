import Meta from '../components/Meta'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta title='About'/>
      <h1>About page</h1>

      <p>
        I'm Obinna Franklin Duru, I Created this website using NextJs.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quasi impedit eius dolore dolorem dignissimos itaque nobis eveniet culpa sit laudantium unde quam aliquid dicta labore, accusamus optio doloribus magni.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quasi impedit eius dolore dolorem dignissimos itaque nobis eveniet culpa sit laudantium unde quam aliquid dicta labore, accusamus optio doloribus magni.
      </p>
    </div>
  )
}