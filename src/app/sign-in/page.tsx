'use client'

import { useState, useEffect } from "react"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"

import FormInput from "@/components/UI/form/FormInput"
import Button from "@/components/UI/buttons/Button"
import LoadingButton from "@/components/UI/buttons/LoadingButton"

import styles from "@/styles/auth/auth.module.css"

interface Data {
	email: string,
	password: string
}

export default function Login() {
    const session = useSession()
    const router = useRouter()
	const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [error, setError] = useState<String>('')
    const [data, setData] = useState<Data>({
            email: '',
            password: ''
            })


            useEffect(() => {
                if (session?.status === 'authenticated') {
                   router.push('/') 
                }
            })

            const loginUser = async (e: any) => {
                setError("")
				setIsLoading(true);
                e.preventDefault()
                signIn('credentials',
                 {...data, redirect: false
                })
                .then((callback) => {
                    if (callback?.error) {
                        console.log(callback);
                        setError("Niepoprawne dane logownaia")
						setIsLoading(false);
                    }

                    if(callback?.ok && !callback?.error) {
                        console.log(callback);
						setIsLoading(false);
                    }
                } )
            }
			console.log(isLoading)
    return (
      <>
        <div className="container">
          <div className="justifyContent" style={{width: "30vw", minWidth: "300px"}}>
		  	<h1 className="header">Logowanie</h1>
			<div>
            	<form onSubmit={loginUser}>
              		<div>
			  			<FormInput type='email' label='Adres mailowy' id='email' name='email' onChange={e => setData({ ...data, email: e.target.value })}/>
						<FormInput type='password' label='Hasło' id='password' name='password' onChange={e => setData({ ...data, password: e.target.value })}/>
                        <h2 className={styles.text}>Nie masz konta? <a href="./sign-up" className="text-primary">Zarejestruj się</a></h2>
                        <h3 className={`text-danger ${styles.text}`}>{error}</h3>
              		</div>
					  {isLoading ? <LoadingButton label="Ładowanie..."/> : <Button label='Zaloguj się' action={null} type="submit"/>}
            </form>

			</div>
          </div>
  
        </div>
      </>
    )
  }