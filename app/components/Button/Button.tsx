import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import { JSX } from 'react';
import cn from 'classnames';

export const Button = (props: ButtonProps): JSX.Element => {
	const { children, className, handleClick, ...otherProps } = props;

	return (
		<button
			onClick={handleClick}
			className={cn(styles.button, className)}
			{...otherProps}
		>
			{children}
		</button>
	);
};
