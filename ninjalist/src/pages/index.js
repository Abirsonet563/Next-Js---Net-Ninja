import Head from "next/head";
// import styles from '../styles/Home.module.css'
import Navbar from "./comps/Navbar"
import Footer from "./comps/Footer";
export default function Home () {

  return(
    <div>
      <Navbar/>
    <h1>About</h1>
    <p>LOL</p>
    <Footer/>
    </div>
  )
}