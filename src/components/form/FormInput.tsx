import { FC, KeyboardEvent } from 'react';

interface IFormInput {
	type?: string;
	label: string;
	id: string;
	// onChange: (e: any) => void;
	// onKeyDown: (e: any) => void;
}

const FormInput: FC<IFormInput> = ({ type, label, id, onChange, onKeyDown }) => {
	return (
		<>
			<div className='form-floating mb-3'>
				<input
					type={type || 'text'}
					className='form-control'
					id={id}
					placeholder='name@example.com'
					// onChange={onChange}
					// onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && onKeyDown(e)}
					required
				/>
				<label htmlFor={id}>{label}</label>
			</div>
		</>
	);
};
export default FormInput;
