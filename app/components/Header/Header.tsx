import { HeaderProps } from './Header.props';
import styles from './Header.module.css';
import { JSX } from 'react';
import Link from 'next/link';
import GithubIcon from './githubIcon.svg';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
	return (
		<div className={styles.header} {...props}>
			<Link className={styles.link} href="/">
				.my_blog
			</Link>
			<Link
				className={styles.link}
				href="https://github.com/RomanMitaki"
				target="_blank"
			>
				<GithubIcon />
			</Link>
		</div>
	);
};
