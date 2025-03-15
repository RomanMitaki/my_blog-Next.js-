import { HtagProps } from './Htag.props';
import styles from './Htag.module.css';
import { JSX } from 'react';
import cn from 'classnames';

export const Htag = (props: HtagProps): JSX.Element => {
	const { tag, children, className, ...otherProps } = props;

	switch (tag) {
		case 'h1':
			return (
				<h1 className={cn(styles.h, className, styles.h1)} {...otherProps}>
					{children}
				</h1>
			);
		case 'h2':
			return (
				<h2 className={cn(styles.h, className, styles.h2)} {...otherProps}>
					{children}
				</h2>
			);
		case 'h3':
			return (
				<h3 className={cn(styles.h, className, styles.h3)} {...otherProps}>
					{children}
				</h3>
			);
		default:
			return <></>;
	}
};
