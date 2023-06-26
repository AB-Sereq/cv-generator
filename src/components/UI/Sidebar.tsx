"use client"
import { usePathname } from 'next/navigation'

import Link from 'next/link'
const Sidebar = () => {
  return (
    <div>
        <ul>
            <li><Link href={"/panel-uzytkownika/stworzone-cv"}>Stworzone CV</Link></li>
            <li><Link href={"/panel-uzytkownika/zestawy danych"}>Zestawy danych</Link></li>
            <li><Link href={"/panel-uzytkownika/ustawienia konta"}>Ustawienia konta</Link></li>
        </ul>
    </div>
  )
}

export default Sidebar