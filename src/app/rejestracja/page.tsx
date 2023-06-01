'use client'

import styles from '@/styles/styles';

import FormInput from '@/components/form/FormInput';
import Button from '@/components/buttons/Button';

import Link from 'next/link';
import { useState } from 'react';

interface UserFormState {
    email: string;
    password: string;
    username: string
  }

const RegisterPage = () => {
	
	const [userForm, setUserForm] = useState<UserFormState>({
        email: '',
        password: '',
		username: ''
      });

	const [registerError, setRegisterError] = useState<boolean>(false)
	const [errorMessage, setErrorMessage] = useState<string>("")

	const addUser = ()=>{
		try{
			const response = fetch("http://localhost:3000/api/auth/register", {
				method: "POST",
				body: JSON.stringify({
					"email": userForm.email,
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

	const handleClick = ()=>{
		if(userForm.email === '' || userForm.password === '' || userForm.username === ''){
			setRegisterError(true)
			setErrorMessage("*Uzupelnij wszystkie pola!")
		}else if(userForm.password.length <= 5){
			setRegisterError(true)
			setErrorMessage("*Hasło powinno mieć co najmniej 6 znaków!")
		}else{
			setRegisterError(false)
			addUser()
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
				<h1 className={styles.h1}>Rejestracja</h1>
				<div className=''>
					{registerError === true ? <p className='text-danger'>{errorMessage}</p> : ''}
					<FormInput type='email' label='Adres mailowy' id='email' name='email' onChange={handleChange}/>
					<FormInput label='Nazwa użytkownika' id='username' name='username' onChange={handleChange}/>
					<FormInput type='password' label='Hasło' id='password' name='password' onChange={handleChange}/>
				</div>
				<h2 className="fs-6 mb-5">Masz już konto?  
                <Link href="./logowanie">Zaloguj się</Link>
            </h2>
				<Button label='Zarejestruj się' action={handleClick}/>
			</div>
		</div>
	);
};

export default RegisterPage;
