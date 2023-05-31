import { FC } from 'react';
import styles from '@/styles/styles';

interface IButton {
	label: string;
}

const Button: FC<IButton> = ({ label }) => {
	return <button className={styles.button}>{label}</button>;
};

export default Button;
