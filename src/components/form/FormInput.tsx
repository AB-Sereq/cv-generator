import { FC, KeyboardEvent } from 'react';

interface IFormInput {
	type?: string;
	label: string;
	id: string;
	name: string;
	onChange: (e: any) => void;
	// onKeyDown: (e: any) => void;
}

const FormInput: FC<IFormInput> = ({ type, label, id, onChange, name}) => {
	return (
		<>
			<div className='form-floating mb-3'>
				<input
					type={type || 'text'}
					className='form-control'
					id={id}
					placeholder={label}
					onChange={onChange}
					name={name}
					// onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && onKeyDown(e)}
					required
				/>
				<label htmlFor={id}>{label}</label>
			</div>
		</>
	);
};
export default FormInput;
