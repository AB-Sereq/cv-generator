import { FC } from 'react';
import styles from '@/styles/styles';

interface IButton {
	label: string;
	action: any;
}

const Button: FC<IButton> = ({ label, action }) => {
	return <button onClick={action} className={styles.button}>{label}</button>;
};

export default Button;
