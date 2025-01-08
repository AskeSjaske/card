'use client'
import cardstyle from './Sass/card.module.scss'
import './Sass/global.scss'

export default function Home() {
  return (
    <div>
      <main>
        <section id={cardstyle.cardContainer}>
          <div id={cardstyle.card}></div>
        </section>
      </main>
    </div>
  );
}
