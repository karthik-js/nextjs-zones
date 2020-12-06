import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href='https://nextjs.org'>Home app</a>
        </h1>

        <div className={styles.grid}>
          <a href='/community' className={styles.card}>
            <h3>Community Page &rarr;</h3>
            <p>zones setup</p>
          </a>
        </div>
      </main>
    </div>
  )
}
