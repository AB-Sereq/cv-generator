import { getServerSession } from 'next-auth'
import { GET } from './api/auth/[...nextauth]/route'
import { LogoutButton } from './auth'
import { User } from './user'
import Navbar from '@/components/UI/Navbar'

export default async function Home() {
  const session = await getServerSession(GET)

  return (
    <main>
      <Navbar/>
      <LogoutButton />  
      <h2>Server Session</h2>
      <pre>{JSON.stringify(session)}</pre>
      <h2>Client Call</h2>
      <User />
    </main>
  )
}