import { TagContainerProps } from './TagContainer.props';
import styles from './TagContainer.module.css';
import { JSX } from 'react';
import { Tag } from '../Tag/Tag';
import { Like } from '../Like/Like';
import cn from 'classnames';

//Возможно все это нужно будет порефачить, пока нет четкого понимания как будут ходить данные
// Очевидно, что это будет не просто строка. Рассматриваем как заглушку
export const TagContainer = (props: TagContainerProps): JSX.Element | null => {
	const { className, data = [], ...otherProps } = props;

	if (!data || data.length === 0) return null;

	return (
		<ul className={cn(styles['tag-container'], className)} {...otherProps}>
			{data.map((tagInfo, index) => {
				if (Number.isInteger(Number(tagInfo))) {
					return (
						<li key={index} className={styles['list-item']}>
							<Tag>
								<Like count={Number(tagInfo)} />
							</Tag>
						</li>
					);
				}

				if (typeof tagInfo === 'string') {
					return (
						<li key={index} className={styles['list-item']}>
							<Tag>{tagInfo}</Tag>
						</li>
					);
				}

				return null;
			})}
		</ul>
	);
};
