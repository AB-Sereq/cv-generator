'use client'

import { useState, useEffect } from "react"
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from "next/navigation"

import FormInput from "@/components/form/FormInput"
import Button from "@/components/buttons/Button"
import LoadingButton from "@/components/buttons/LoadingButton"

import styles from '@/styles/styles';

interface Data {
	email: string,
	password: string
}

export default function Login() {
    const session = useSession()
    const router = useRouter()
	const [isLoading, setIsLoading] = useState<Boolean>(false)
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
				setIsLoading(true);
                e.preventDefault()
                signIn('credentials',
                 {...data, redirect: false
                })
                .then((callback) => {
                    if (callback?.error) {
                        console.log(callback);
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
        <div className={styles.defaultConatiner}>
          <div className={styles.justifyContent} style={{width: "30vw", minWidth: "400px"}}>
		  	<h1 className={styles.h1}>Logowanie</h1>
			<div>
            	<form onSubmit={loginUser}>
              		<div>
			  			<FormInput type='email' label='Adres mailowy' id='email' name='email' onChange={e => setData({ ...data, email: e.target.value })}/>
						<FormInput type='password' label='Hasło' id='password' name='password' onChange={e => setData({ ...data, password: e.target.value })}/>

              		</div>
					  {isLoading ? <LoadingButton label="Ładowanie..."/> : <Button label='Zaloguj się' action={null} type="submit"/>}
            </form>

			</div>
          </div>
  
        </div>
      </>
    )
  }