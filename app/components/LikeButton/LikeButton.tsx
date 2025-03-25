import { LikeButtonProps } from './LikeButton.props';
import styles from './LikeButton.module.css';
import { JSX } from 'react';
import cn from 'classnames';
import LikeIcon from './likeButton.svg';

export const LikeButton = (props: LikeButtonProps): JSX.Element => {
	const { className, liked = false, onLike, ...otherProps } = props;

	return (
		<button
			className={cn(styles.button, className, {
				[styles.liked]: liked
			})}
			onClick={onLike}
			{...otherProps}
		>
			<LikeIcon stroke={liked ? '#fff' : '#303030'} />
		</button>
	);
};
