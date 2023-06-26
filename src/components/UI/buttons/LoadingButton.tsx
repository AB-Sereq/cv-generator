import { FC } from 'react';
import styles from '@/styles/styles';

interface ILoadingButton {
	label: string;
}

const LoadingButton: FC<ILoadingButton> = ({ label }) => {
	return (
		<button className={styles.button} type='button' disabled>
			<span className='spinner-border spinner-border-sm' role='status' aria-hidden='true'></span>
			{label}
		</button>
	);
};

export default LoadingButton;
