'use client'

import styles from '@/styles/styles';

import FormInput from '@/components/form/FormInput';
import Button from '@/components/buttons/Button';

import Link from 'next/link';
import { useState } from 'react';

interface UserFormState {
    password: string;
    username: string
  }

const LoginPage = () => {
    const [userForm, setUserForm] = useState<UserFormState>({
        password: '',
        username: ''
      });

    const handleClick = ()=>{
        try{
			const response = fetch("http://localhost:3000/api/auth/login", {
				method: "POST",
				body: JSON.stringify({
					"username": userForm.username,
					"password": userForm.password
				})
			})
			.then((response) => response.json())
            .then((json) => console.log(json));
		}catch(error){
			console.log(error)
		}
	}
    

    const handleChange = (e: React.KeyboardEvent<HTMLInputElement>)=>{
        const name = e.currentTarget.name;
        const value = e.currentTarget.value

        setUserForm((prev)=>{
            return {... prev, [name]: value}
        })
    }
	return (
		<div className={styles.defaultConatiner}>
			<div className={styles.justifyContent} style={{width: "30vw", minWidth: "400px"}}>
				<h1 className={styles.h1}>Logowanie</h1>
				<div className=''>
					<FormInput type='text' label='Nazwa użytkownika' id='username' name='username' onChange={handleChange}/>
					<FormInput type='password' label='Hasło' id='password' name='password' onChange={handleChange}/>
				</div>
				<h2 className="fs-6 mb-5">Nie masz konta?  
                <Link href="./rejestracja">Zarejestruj się</Link>
            </h2>
			<Button label='Zaloguj się' action={handleClick}/>
			</div>
		</div>
	);
};

export default LoginPage;
