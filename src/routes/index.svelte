<script context="module">
	import { movieStoreList } from '../stores.js';
	import movies from '../data/movies.js';
	export async function preload({ params, query }) {
		movieStoreList.update(() => movies);
	}
</script>

<script>
	import {getRatingColor} from '../utils';
	import Paginator from '../components/Paginator.svelte';
	import Poster from '../components/Poster.svelte';
	import { get } from 'svelte/store';

	let currentPage = 1;
	const movies = get(movieStoreList);
	const maxMovies = 24;

	const changePage = (new_page) => {
		currentPage = new_page;
	};

	const sliceMovies = (movies, page) => {
		currentPage = page;
		const init = (currentPage - 1) * maxMovies;
		const end = currentPage * maxMovies;
		return movies.slice(init, end);
	};
</script>

<style>
	.content {
		grid-area: content;
	}

	.container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 16px;
		grid-row-gap: 24px;
		padding: 16px;
	}

	@media (min-width: 768px) {
		/* portrait tablets, portrait iPad, e-readers (Nook/Kindle) */
		.container {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (min-width: 1201px) {
		/* hi-res laptops and desktops */
		.container {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media (min-width: 1441px) {
		/* hi-res laptops and desktops */
		.container {
			grid-template-columns: repeat(5, 1fr);
		}
	}

	@media (min-width: 1681px) {
		/* hi-res laptops and desktops */
		.container {
			grid-template-columns: repeat(6, 1fr);
		}
	}

	@media (min-width: 1921px) {
		/* hi-res laptops and desktops */
		.container {
			grid-template-columns: repeat(7, 1fr);
		}
	}
</style>

<svelte:head>
	<title>Últimos </title>
</svelte:head>

<div class="content">
	<div class="container">
		{#each sliceMovies($movieStoreList, currentPage) as movie, i}
			<Poster movie={movie} />
		{/each}
	</div>
	<Paginator
		changePage={changePage}
		currentPage={currentPage}
		maxItems={maxMovies}
		movieStoreList={$movieStoreList}
	/>
</div>



