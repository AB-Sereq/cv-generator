"use client"

import styles from "@/styles/user-panel/sidebar.module.css"

import Link from 'next/link'
const Sidebar = () => {

  return (
    <div className={`bg-primary ${styles.contentWrapper}`}>
      <h2 className={styles.header}>Panel użytkownika</h2>
      <div className={styles.linksContainer}>
        <Link href="/user-panel/created-cv" className={styles.link}>Stworzone CV</Link>
        <Link href="/user-panel/created-datasets" className={styles.link}>Twoje zestawy danych</Link>
        <Link href="/user-panel/account-settings" className={styles.link}>Ustawienia konta</Link>
      </div>
      <div>
        
      </div>
    </div>
  )
}

export default Sidebar