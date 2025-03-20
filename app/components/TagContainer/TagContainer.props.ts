import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TagContainerProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLUListElement>,
		HTMLUListElement
	> {
	data?: string[]; //будут данные для отрисовки перечня тегов, временная типизация
}
