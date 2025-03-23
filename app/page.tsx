'use client';

import styles from './page.module.css';
import { LikeButton, Card, Button } from '@/app/components';
import { useCallback, useState } from 'react';

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

const posts = new Array(6).fill(cardData);

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
			{posts.map((data, index) => (
				<Card key={index} data={data} />
			))}
			<div className={styles.btns}>
				<LikeButton liked={liked} onLike={handleLike} />
				<Button>Отправить</Button>
			</div>
		</div>
	);
}
