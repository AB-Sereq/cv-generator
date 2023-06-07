import { getServerSession } from 'next-auth'
import { GET } from './api/auth/[...nextauth]/route'
import { LogoutButton } from './auth'
import { User } from './user'
import Link from 'next/link'

export default async function Home() {
  const session = await getServerSession(GET)

  return (
    <main>
      <Link href={"/logowanie"}>Logowanie</Link>
      <Link href={"/rejestracja"}>Rejestracja</Link>
      <LogoutButton />  
      <h2>Server Session</h2>
      <pre>{JSON.stringify(session)}</pre>
      <h2>Client Call</h2>
      <User />
    </main>
  )
}