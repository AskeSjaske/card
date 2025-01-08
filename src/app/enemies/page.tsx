'use client'

import { useEffect, useRef } from 'react'
import card from '../Sass/page.module.scss'
import Image from 'next/image'
import { gsap } from 'gsap'

const Page = () => {

  const refObj = useRef<HTMLDivElement>(null)

  useEffect(() => {

    console.log('im ready')

    gsap.to( refObj.current , {

      duration: 0.05,
      scaleX: -1,
      alpha: 0,
      repeat: 3,
      yoyo: true,
      onComplete: () => {
        gsap.to( refObj.current , {
          duration: 0.05,
          alpha: 1,
          scaleX: 1
        })
      }
    })

  }, [])

  
  return (
    <main>
      <section ref={refObj} id={card.cardContainer}>
        <div id={card.card}>
          <div id={card.headline}>Alien Scum</div>
          <div id={card.imagecon}>
            <Image 
              src='/assets/images/black-alien-scum.png'
              alt='Picture of the author'
              width={250}
              height={250}
              />
          </div>
          <div id={card.content}>Ninja Killer don't touch him</div>
        </div>
      </section>
    </main>
  )
}

export default Page