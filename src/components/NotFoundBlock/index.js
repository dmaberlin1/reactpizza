import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  return(
    <div className={styles.root}>
        <span>😒</span>
        <br/>
        <h1>Ничего не найдено </h1>
        <p className={styles.desription}> Наша система провела анализ данных, проблема с интернетом</p>
    </div>
  )
}
export default NotFoundBlock