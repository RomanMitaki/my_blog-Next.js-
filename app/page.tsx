'use client';

import styles from './page.module.css';
import {
	LikeButton,
	Card,
	Htag,
	Like,
	P,
	Tag,
	TagContainer
} from '@/app/components';
import { useCallback, useState } from 'react';

const data = ['Front-end', '1 месяц назад', '89', 'Василий Пупкин'];

const cardData = {
	id: '1',
	image: 'https://picsum.photos/600/400',
	tags: ['Front-end', '1 месяц назад'],
	likes: 12,
	title: 'Как работать с CSS Grid',
	description:
		'Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему сеток в CSS. Гриды подойдут и для верстки основных областей страницы..',
	link: '#',
	timeToRead: 9
};

export default function Home() {
	const [liked, setLiked] = useState(false);

	const handleLike = useCallback(async () => {
		try {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/posts',
				{
					method: 'POST',
					body: JSON.stringify({ liked: !liked }),
					headers: { 'Content-Type': 'application/json' }
				}
			);

			if (!response.ok) {
				throw new Error(`Ошибка сервера: ${response.status}`);
			}

			setLiked(!liked);
		} catch (error) {
			console.error('Ошибка при запросе:', error);
		}
	}, [liked]);

	return (
		<div className={styles.page}>
			<Htag tag="h1">Заголовок 1</Htag>
			<Htag tag="h2">Заголовок 2</Htag>
			<Htag tag="h3">Заголовок 3</Htag>
			<P size="small">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
				consequuntur dolores ducimus eius enim libero natus nemo nihil nostrum
				nulla perferendis, quia sed velit voluptates voluptatum? Aliquid odit
				sequi sint.
			</P>
			<P>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
				consequuntur dolores ducimus eius enim libero natus nemo nihil nostrum
				nulla perferendis, quia sed velit voluptates voluptatum? Aliquid odit
				sequi sint.
			</P>
			<P size="large">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
				consequuntur dolores ducimus eius enim libero natus nemo nihil nostrum
				nulla perferendis, quia sed velit voluptates voluptatum? Aliquid odit
				sequi sint.
			</P>
			<div>
				<Tag color="darkgrey">Front-end</Tag>
				<Tag>1 месяц назад</Tag>
				<Tag weight="bold">Василий Пупкин</Tag>
			</div>
			<Like count={4} />
			<Like count={77} />
			<Like />
			<Tag>
				<Like count={16} />
			</Tag>
			<TagContainer data={data} />
			<Card data={cardData} />
			<LikeButton liked={liked} onLike={handleLike} />
		</div>
	);
}
