import Style from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={Style.title}>
        <span>Binna</span> News
      </h1>
      <p className={Style.description}>
        Keep up to date with the latest web dev news
      </p>
    </div>
  )
}

export default Header