import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';
import { JSX } from 'react';

export const Tag = (props: TagProps): JSX.Element => {
	const {
		children,
		color = 'grey',
		weight = 'normal',
		className,
		...otherProps
	} = props;

	return (
		<div
			className={cn(styles.tag, className, {
				[styles.grey]: color === 'grey',
				[styles.darkgrey]: color === 'darkgrey',
				[styles.normal]: weight === 'normal',
				[styles.bold]: weight === 'bold'
			})}
			{...otherProps}
		>
			{children}
		</div>
	);
};
