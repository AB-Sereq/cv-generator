'use client'
 
import styles from "@/styles/components/UI/navbar.module.css"

import Link from 'next/link'

import { LogoutButton } from "@/app/auth"
import { useSession } from 'next-auth/react'

import { BiMenu } from "react-icons/bi";

const Navbar = () => {

  const session = useSession()
  console.log(session.status)
  return (
    <nav className={`bg-primary ${styles.navbar}`}>
      <Link href={"/"} className={styles.logo}>resu<span className={styles.span}>me</span></Link>
      <div className={styles.linksContainer}>
        <Link className={styles.link} href={"/cv-creator"}>Stwórz CV</Link>
        <Link className={styles.link} href={"/cv-create-dataset"}>Stwórz zestaw danych</Link>
        <Link className={styles.link} href={"/user-panel/created-cv"}>Panel użytkownika</Link>
      </div>
        {session?.status === 'authenticated' ? 
        <div className={styles.userControls}>
          <LogoutButton/>
        </div>
        :
        <div className={styles.userControls}>
          <Link className={styles.link} href="/sign-in">Logowanie</Link>
          <Link className={styles.link} href="/sign-up">Rejestracja</Link>
        </div>
      }
      <button className={styles.burgerMenu}><BiMenu size={30} color="white"/></button>
    </nav>
  )
}

export default Navbar