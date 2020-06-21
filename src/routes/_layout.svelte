<script>
	import Nav from '../components/Nav.svelte';
	import Search from '../components/Search.svelte';
	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 100%;
		background-color: white;
		padding: 0;
		margin: 0 auto;
		box-sizing: border-box;
		display: grid;
		grid-template-columns: 80px 1fr;
		grid-template-rows: 90px 1fr;
		grid-template-areas:'nav search'
							'nav content';
	}

	:global(div) {
		box-sizing: border-box;
	}
	@media (min-width: 768px) {
		/* portrait tablets, portrait iPad, e-readers (Nook/Kindle) */
		main {
			grid-template-columns: 120px 1fr;
		}
	}
	@media (min-width: 1200px) {
		/* hi-res laptops and desktops */
		main {
			grid-template-columns: 160px 1fr;
		}

	}
</style>

<main>
	<Nav />
	<Search />
	<slot />
</main>