<script lang="ts">
	import { fetchComic } from './comic';
	import type { ComicProcessed } from './comic';

	let promise: Promise<ComicProcessed> = fetchComic();
</script>

{#await promise}
	<p>...waiting</p>
{:then comic}
	<div class="info-block">
		<h1>XKCD:</h1>
		<h2>{comic.title}</h2>
		<p>Comic uploaded:</p>
		<p>{comic.dateString}</p>
		<img class="xkcd-img" src={comic.img} alt={comic.alt} />
		<p>{comic.alt}</p>
	</div>
{:catch error}
	<p style="color: red">{error.message}</p>
{/await}

<style>
	.xkcd-img {
		display: block;
		margin-top: 50px;
	}

	.info-block {
		font-size: 20px;
		padding: 15px;
		text-align: left;
		max-width: 50%;
	}
</style>
