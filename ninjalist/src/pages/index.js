import Head from "next/head";
import styles from '../styles/Home.module.css'
import Link from "next/link";
export default function Home () {

  return(
    <div>
    <h1 className={styles.title}>Home Page</h1>
    <p className={styles.text}>Lorem, Ipsum</p>
    <p className={styles.text}>Lorem, Ipsum</p>
<Link className={styles.btn} href="/ninja">See Ninja List</Link>
    </div>
  )
}