import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Form, Col, Button, InputGroup, FormControl} from 'react-bootstrap'
import React, { useState, useEffect } from 'react'

export default function Header() {
    
    return(
        <header className={styles.header}>
        <a href="/counter"> Counter </a>
        
        <a href="/message"> Message </a>
        <a href="/"> Home </a>
      </header>
    )

}
