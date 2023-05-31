import styles from '@/styles/styles';

import FormInput from '@/components/form/FormInput';
import Button from '@/components/buttons/Button';

const RegisterPage = () => {
	return (
		<div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
			<div className='w-100 p-5 ' style={{ maxWidth: '540px' }}>
				<h1 className={styles.h1}>Rejestracja</h1>
				<FormInput type='email' label='Adres mailowy' id='email' />
				<FormInput label='Nazwa użytkownika' id='username' />
				<FormInput type='password' label='Hasło' id='password' />
				<Button label='Zarejestruj się' />
			</div>
		</div>
	);
};

export default RegisterPage;
