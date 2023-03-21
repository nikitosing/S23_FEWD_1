<script lang="ts">
	import Social from './Social.svelte';
	import githubLogo from '../assets/github.png';
	import mailLogo from '../assets/mail.png';
	import telegramLogo from '../assets/telegram.png';
</script>

<footer>
	<p class="footer-text">Nikita Pozdniakov. 3023</p>
	<div class="social-links">
		<Social
			id={'gh-link'}
			href={'https://github.com/nikitosing'}
			src={githubLogo}
			classValue={'github'}
		/>
		<Social
			id={'tg-link'}
			href={'https://t.me/nikitosing4'}
			src={telegramLogo}
			classValue={'telegram'}
		/>
		<Social
			id={'email'}
			href={'mailto:n.pozdniakov@innopolis.university'}
			src={mailLogo}
			classValue={'mail'}
		/>
	</div>
</footer>

<style>
	.social-links {
		margin-right: 10px;
	}

	footer {
		display: flex;
		height: 70px;
		background-color: aqua;
		align-items: flex-end;
		flex-direction: row-reverse;
		padding: 5px;
	}

	.footer-text {
		font-size: 17px;
		margin-bottom: 0;
	}
</style>
