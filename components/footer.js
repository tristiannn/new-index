import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import {Form, Col, Button, InputGroup, FormControl} from 'react-bootstrap'
import React, { useState, useEffect } from 'react'

export default function Footer() {
  
    return (
        <footer className={styles.footer}>
        <a
          href="https://www.github.com/tristiannn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tristiannn @ {' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
        </footer>
    )
}

