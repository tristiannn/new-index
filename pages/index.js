import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {Form, Col, Button, InputGroup, FormControl} from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
                    
  const [txtFirst, setTxtFirst] = useState('')
  const [txtSecond, setTxtSecond] = useState('')


  const getTxt = () => {
    console.log(txtFirst + txtSecond)
  }

  return (


    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Header/>

     
      <main className={styles.main}>
      <img src="./images/profile.jpg" className={styles.topImage}/>
      <section className={utilStyles.headingMd}>
        
        <p>Hi!, I'm Tristiann. I'm a freelance software enginer. <br/> You can contact me on <a href="https://instagram.com/tristiannn">Instagram</a> for business inquiry.
          </p>
       
       </section>
       <div className={styles.grid}>
          <a href="/counter" className={styles.card}>
            <h3>Counter &rarr;</h3>
            <p>test my counter app</p>
          </a>
          <a href="/message" className={styles.card}>
            <h3>Message &rarr;</h3>
            <p>Not running right now</p>
          </a>
          </div>
         </main>
        
      
      <Footer/>
     
    </div>
  )
}
