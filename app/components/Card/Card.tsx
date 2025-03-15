import { CardProps } from './Card.props';
import styles from './Card.module.css';
import { JSX } from 'react';
import cn from 'classnames';
import Image from 'next/image';
import { Htag, Like, P, Tag, TagContainer } from '@/app/components';
import Link from 'next/link';
import ArrowIcon from './arrow.svg';

//Неточная структура компонента, по ходу изучения будут правки
export const Card = (props: CardProps): JSX.Element | null => {
	const { data = undefined, className, ...otherProps } = props;
	if (!data) return null;
	const { image, title, description, likes, link, tags, timeToRead } = data;

	return (
		<div className={cn(styles.card, className)} {...otherProps}>
			<Image
				className={styles.image}
				src={image}
				alt={'картинка'}
				width={330}
				height={200}
			/>
			<div className={styles['tags-container']}>
				<TagContainer data={tags} />
				<Like count={likes} />
			</div>
			<div className={styles['text-content-container']}>
				<Htag tag="h3">{title}</Htag>
				<P className={styles.paragraph} size="small">
					{description}
				</P>
			</div>
			<div className={styles['footer-container']}>
				<Tag>{timeToRead} минут</Tag>
				<Link className={styles.link} href={link}>
					<span>Читать</span>
					<ArrowIcon />
				</Link>
			</div>
		</div>
	);
};
