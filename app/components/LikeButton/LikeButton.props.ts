import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface LikeButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	liked?: boolean;
	onLike?: () => void;
}
