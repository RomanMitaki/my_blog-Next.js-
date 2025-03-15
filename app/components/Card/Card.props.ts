import { DetailedHTMLProps, HTMLAttributes } from 'react';

//Пока что все примерно "чтобы было"

export interface CardProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	data?: {
		id: string;
		image: string;
		tags: string[];
		likes: number;
		title: string;
		description: string;
		link: string;
		timeToRead: number;
	};
}
