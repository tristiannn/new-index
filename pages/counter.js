import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Form, Col, Button, InputGroup, FormControl} from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'

export default function Counter () {

    const [tambah, setTambah] = useState(1)

    
    return (
        <div className={styles.container}>
            <Head>
                <title>Counter</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
    
                <Header/>
                        
                <main className={styles.main}>
                           <h1> Counter App </h1>
                           <p className="mb-3"> {tambah} </p>
                <div>
                      
                        {"    "}
                        <Button
                        variant='warning'
                        onClick= {() => {
                            setTambah(tambah - 1)
                        }}                  
                        > - </Button>
                         {"    "}
                          <Button
                        variant='danger'
                        onClick={() => {
                            setTambah(tambah + 1)
                        }}
                        > + </Button>
                </div>
               

                </main>

                <Footer/> 
        </div>
        
    )  
}
