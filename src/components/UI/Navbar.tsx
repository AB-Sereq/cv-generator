'use client'
 
import { usePathname } from 'next/navigation'

import Link from 'next/link'

const Navbar = () => {
    const pathname = usePathname()
    console.log(pathname)
  return (
    <nav>
        <Link href={"/"}>CV Generator</Link>
        <ul>
            <li><Link href={"/cv-kreator"}>Stwórz CV</Link></li>
            <li><Link href={"/cv-dane-domyslne"}>Stwórz zestaw danych</Link></li>
            <li><Link href={"/panel-użytkownika"}>Panel użytkownika</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar