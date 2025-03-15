import { LikeProps } from './Like.props';
import styles from './Like.module.css';
import { JSX } from 'react';
import cn from 'classnames';
import LikeIcon from './like.svg';

export const Like = (props: LikeProps): JSX.Element => {
	const { count = 0, className, ...otherProps } = props;
	return (
		<div className={cn(styles.like, className)} {...otherProps}>
			<span>{count}</span>
			<LikeIcon className={styles.icon} size={16} />
		</div>
	);
};
