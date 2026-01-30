import style from './FooterComponent.module.css'

const FooterComponen = () => {
  return (
	<footer className={style.footer}>
    <div>{new Date().getFullYear()} Simon Winter - Frontend Developer</div>
    <div className={style.company}>Code by Winter</div>
  </footer>
  )
}

export default FooterComponen