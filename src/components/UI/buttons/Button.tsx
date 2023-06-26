import { FC } from 'react';
import styles from '@/styles/styles';

interface IButton {
	label: string;
	action: any;
	type: string;
}

const Button: FC<IButton> = ({ label, action, type }) => {
	return <button onClick={action} className={styles.button} type={type} >{label}</button>;
};

export default Button;
