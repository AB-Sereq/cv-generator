"use client"

import Navbar from '@/components/UI/Navbar'
import styles from "@/styles/homePage.module.css"

import { motion } from 'framer-motion'

import Link from 'next/link'
import Image from 'next/image'


export default function Home() {


  return (
      <div className={styles.container}>
        <Navbar/>
        <motion.div 
          className={styles.welcome}
          initial={{ opacity: 0, y:100 }}
          animate={{ opacity: 1, y:0 }}
          transition={{ duration: 1.5 }} >
          <section className={styles.leftSection}>
            <h1 className={styles.welcomeHeader}><span className={styles.welcomeSpan}>Stwórz</span> swoje wymarzone <span className={styles.welcomeSpan}>CV</span> razem z nami!</h1>
            <div className={styles.links}>
              <Link className={styles.CVLink} href={'/cv-creator'}>Stwórz CV</Link>
              <Link className={styles.registerLink} href="/sign-up">Zarejestruj się</Link>
            </div>
          </section>
          <section className={styles.rightSection}>
            <Image src={"/Hero.png"} 
            alt='hero img' 
            width={600}
            height={790}
            layout="intrinsic"/>
          </section>
        </motion.div>
        <section className={styles.sectionWrapper} id='howCreate'>
          <h2 className={styles.sectionHeader}>Jak stworzyć CV za pomocą RESUME?</h2>
          <div className={styles.content}>

            <div className={styles.cvImg}>
              <div className={styles.back}></div>
              <div className={styles.main}></div>
              <div className={styles.back}></div>
            </div>
            <motion.div 
            className={styles.shapesContainer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 2 }}
            viewport={{ once: true }}>

              <div className={styles.shape}>
                <Image src={"/shape2.png"} 
                  alt='hero img' 
                  width={240}
                  height={140}/>
                <h2 className={styles.shapeHeader}>Wybierz jeden z kilku dostęnych wzrów</h2>
              </div>

              <div className={styles.shape}>
                <Image src={"/shape2.png"} 
                  alt='hero img' 
                  width={240}
                  height={140}/>
                <h2 className={styles.shapeHeader}>Wybierz jeden z kilku dostęnych wzrów</h2>
              </div>

              <div className={styles.shape}>
                <Image src={"/shape2.png"} 
                  alt='hero img' 
                  width={240}
                  height={140}/>
                <h2 className={styles.shapeHeader}>Wybierz jeden z kilku dostęnych wzrów</h2>
              </div>
            </motion.div>
          </div>

        </section>
        <section className={styles.sectionWrapper} id='whyResume'>
          <h2 className={styles.sectionHeader}>Dlaczego warto skorzystać z RESUME?</h2>
          <motion.div className={styles.boxesWrapper}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 2 }}
            viewport={{ once: true }}>

            <div className={styles.row}>
              <div className={styles.box}>
                <h2 className={styles.boxHeader}>Wiele opcji personalizacji</h2>
                <p className={styles.boxText}>Korzystając z naszego kreatora masz możliwość zmiany koloru, fontu, wielkości tekstu a także szablonu</p>
              </div>
              <div className={styles.box}>
                <h2 className={styles.boxHeader}>Zaawansowane zarządzanie 
danymi oraz stworzonymi CV</h2>
                <p className={styles.boxText}>Możesz swobodnie zarządzać danymi oraz stworzonymi CV w panelu użytkownika</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.box}>
                <h2 className={styles.boxHeader}>Rozbudowany kreator</h2>
                <p className={styles.boxText}>Nasz krerator dostarcza wiele opcji personalizacji CV</p>
              </div>
              <div className={styles.box}>
                <h2 className={styles.boxHeader}>Brak ukrytych kosztów</h2>
                <p className={styles.boxText}>Korzystanie z RESUME jest całkowicie darmowe</p>
              </div>
            </div>
          </motion.div>
        </section>

    </div>
  )
}