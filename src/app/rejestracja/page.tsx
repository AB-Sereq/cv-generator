'use client'

import { useState, useEffect } from "react"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"
import axios from "axios"

import styles from '@/styles/styles';

import FormInput from "@/components/form/FormInput"
import Button from "@/components/buttons/Button"
import LoadingButton from "@/components/buttons/LoadingButton";

interface Data{
	name: string,
	email: string,
	password: string
}

export default function Register() {
	const session = useSession()
	const router = useRouter()

    const [isError, setIsError] = useState<Boolean>(false)
	const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [data, setData] = useState<Data>({
        name: '',
        email: '',
        password: ''
    })

	useEffect(() => {
		if (session?.status === 'authenticated') {
		   router.push('/') 
		}
	})

	const loginUser = async () =>{
		signIn('credentials',
                 {...data, redirect: false
                })
                .then((callback) => {
                    if (callback?.error) {
                        console.log(callback);
						setIsError(true)
                    }

                    if(callback?.ok && !callback?.error) {
                        console.log(callback);
                    }
                } )
	}

    const registerUser = async (e: any) => {
		setIsError(false)
		setIsLoading(true)
		console.log(data)
        e.preventDefault()
        await axios.post('/api/auth/register', data)
			.then(() => {loginUser()})
			.catch(() => setIsError(true))
		await setIsLoading(false)
    }

	console.log(session?.status === 'authenticated')

    return (
      <>
        <div className={styles.defaultConatiner}>
          <div className={styles.justifyContent} style={{width: "30vw", minWidth: "400px"}}>
		  	<h1 className={styles.h1}>Rejestracja</h1>
			<div>
				<form className="space-y-6" onSubmit={registerUser}>
					<div>
						<FormInput type='text' label='Nazwa użytkownika' id='name' name='name' onChange={e => setData({ ...data, name: e.target.value })}/>
						<FormInput type='email' label='Adres mailowy' id='email' name='email' onChange={e => setData({ ...data, email: e.target.value })}/>
						<FormInput type='password' label='Hasło' id='password' name='password' onChange={e => setData({ ...data, password: e.target.value })}/>
						<h2 className="fs-6">Masz już konto? <a href="./logowanie" className="text-primary">Zaloguj się</a></h2>
						{isError ? <h3 className="text-danger fs-6">Coś poszło nie tak!</h3> : ""}
					</div>
					{isLoading ? <LoadingButton label="Ładowanie..."/> : <Button label='Zarejestruj się' action={null} type="submit"/>}
				</form>

			</div>
          </div>

        </div>
      </>
    )
  }