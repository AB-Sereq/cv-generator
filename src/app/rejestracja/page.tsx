'use client'

import { useState } from "react"
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
    const [data, setData] = useState<Data>({
        name: '',
        email: '',
        password: ''
    })

	const [isLoading, setIsLoading] = useState<Boolean>(false)

    const registerUser = async (e: any) => {
		setIsLoading(true)
		console.log(data)
        e.preventDefault()
        await axios.post('/api/auth/register', data)
			.then(() => console.log('succes'))
			.catch(() => console.log('Something went wrong!'))
		await setIsLoading(false)
    }

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
					</div>
					{isLoading ? <LoadingButton label="Ładowanie..."/> : <Button label='Zarejestruj się' action={null} type="submit"/>}
				</form>

			</div>
          </div>

        </div>
      </>
    )
  }