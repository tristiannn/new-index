import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {Form, Col, Button, InputGroup, FormControl} from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Home() {
                    
  const [txtFirst, setTxtFirst] = useState('')
  const [txtSecond, setTxtSecond] = useState('')


  const getTxt = () => {
    console.log(txtFirst + txtSecond)
  }

  return (


    <div className={styles.container}>
      <Head>
        <title>new Crud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Header/>

      <main className={styles.main}>
       <div>
         <h1> Message Something </h1>
         {""}
         <>
           <br/>
           <br/>
         </>
         <div>
         
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1"> Txt </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Text Something"
              aria-label="Text Something"
              aria-describedby="basic-addon1"
              onChange={(event) => {
               setTxtFirst(event.target.value)
              }}
            />
            
          </InputGroup>

          <InputGroup className="mb-3">
          
            <FormControl
              placeholder="more something"
              onChange={(event) => {
                setTxtSecond(event.target.value)
              }}
            />
              <InputGroup.Prepend>
              <InputGroup.Text>
                ^
              </InputGroup.Text>
            </InputGroup.Prepend>

          </InputGroup>


          <Button variant='warning'
          onClick={getTxt}
          >SUBMIT</Button>
          
          
         </div>
        

       </div>

      </main>
      
      <Footer/>
     
    </div>
  )
}
