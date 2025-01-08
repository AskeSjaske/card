'use client'
import image from 'next/image'
import Link from 'next/link'
import React,{ useState } from 'react'
import cardstyles from './Sass/page.module.scss'
import './Sass/global.scss'

export default function Home() {
  return (
    <main className={cardstyles.main}>
      <section id={cardstyles.cardContainer}>
       <div id={cardstyles.card}>
        
       </div>
      </section> 
    </main>
  )
}
