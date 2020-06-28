<script context="module">
	import movies from '../data/movies.js';
	export async function preload({ params, query }) {
		return { movies: movies};
	}
</script>

<script>
	export let movies;
	let current_page = 1;
	let max_movies = 24;
	const max_pages = Math.ceil(movies.length / max_movies);
	let movie_list = movies.slice(0, max_movies);
	const currDate = new Date();
	const currentYear = currDate.getFullYear();

	const changePage = (new_page) => {
		current_page = new_page;
		const init = (current_page - 1) * max_movies;
		const end = current_page * max_movies;
		console.log(`${init} - ${end}`);
		movie_list = movies.slice(init, end);
	};

	const getRatingColor = (rating) => {

		let color = ''
		if (6 <= rating && rating < 6.5){
			color = '#ff5722';
		} else if (6.5 <= rating && rating < 7){
			color = '#ff9800';
		} else if (7 <= rating && rating < 7.5){
			color = '#f5e23b';
		} else if (7.5 <= rating && rating < 8){
			color = '#cddc39';
		} else if (8 <= rating && rating < 8.5){
			color = '#8bc34a';
		} else if (8.5 <= rating){
			color = '#4caf50';
		} else {
			color = 'black';
		}
		return color;
	}

</script>

<style>
	a {
		text-decoration: inherit;
	}

	h6 {
		margin: 0;
	}

	.item-listing-skrn {
		border-radius: 5px;
		border: 1px solid rgba(0,0,0,0.08);
		box-shadow: 0 3px 8px rgba(0,0,0, 0.06);
		width: 100%;
	}
	.item-listing-image-skrn {
		overflow: hidden;
		position: relative;
		max-height: 240px;
	}
	.item-listing-image-skrn:before {
		content: "";
		background: url(../mesh.png) repeat;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		position: absolute;
		z-index: 2;
	}
	.item-listing-skrn img {
		width: 100%;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		cursor: pointer;
		transition: transform .3s, filter .3s ease-in-out;
	}
	.item-listing-skrn:hover img {
		transform: scale(1.2) rotate(5deg);
		filter: brightness(80%);
	}
	.item-listing-text-skrn {
		padding: 0 8px;
		height: 80px;
		width: 100%;
		overflow: hidden;
	}
	.item-listing-year{
		position: absolute;
		top: 4px;
		left: 4px;
		background: #00000070;
		padding: 2px 8px;
		border-radius: 4px;
		font-weight: bold;
		font-size: 20px;
		color: white;
		z-index: 3;
	}
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
	.item-listing-description {
		display: grid;
		grid-template-columns: 1fr 46px;
		grid-gap: 8px;
		align-items: center;
		height: 80px;
		font-size: 20px;
		line-height: 1.2rem;
	}
	.item-listing-rating-skrn{
		color:#42b740;
		font-weight: 900;
		font-size: 28px;
		line-height: 2em;
	}
	.pagination {
		width: fit-content;
		margin: 0 auto;
	}
	.pagination-number {
		display: inline-block;
		width: 32px;
		height: 32px;
		background: #8bc34a;
		color: white;
		text-align: center;
		font-size: 20px;
		cursor: pointer;
		margin: 40px 5px 80px;
		border-radius: 5px;
		padding: 1px;
	}
	.pagination-number:hover {
		background: #4CAF50;
	}
	@media (min-width: 768px) {
		/* portrait tablets, portrait iPad, e-readers (Nook/Kindle) */
		.container {
			grid-template-columns: repeat(3, 1fr);
		}
		.item-listing-text-skrn {
			padding: 0 16px;
		}
		.item-listing-image-skrn {
			max-height: 460px;
		}
	}
	@media (min-width: 1201px) {
		/* hi-res laptops and desktops */
		.container {
			grid-template-columns: repeat(4, 1fr);
		}
		.item-listing-text-skrn {
			padding: 0 24px;
		}
		.item-listing-image-skrn {
			max-height: 424px;
		}
	}
	@media (min-width: 1441px) {
		/* hi-res laptops and desktops */
		.container {
			grid-template-columns: repeat(5, 1fr);
		}
		.item-listing-image-skrn {
			max-height: 370px;
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
		{#each movie_list as movie, i}
			<a rel='prefetch' href="/movie/{movie.id}">
				<div class="item-listing-skrn">
					<div class="item-listing-image-skrn">
						<div class="item-listing-year" style="color:{movie.year === currentYear && '#FFEB3B'}">{movie.year}</div>
						<img loading="lazy" width="150" src={movie.poster} alt="Listing">
					</div>
					<div class="item-listing-text-skrn">
						<div class="item-listing-description">
							<h6> {movie.title} </h6>
							<span
								class="item-listing-rating-skrn"
								style="color:{getRatingColor(movie.rating)}"
							>
									{movie.rating}
							</span>
						</div><!-- close .item-listing-text-skrn-vertical-align -->
					</div><!-- close .item-listing-text-skrn -->
				</div>
			</a>
		{/each}
	</div>
	<div class="pagination">
		{#each Array(max_pages) as _, i}
			<div class="pagination-number"
				 on:click={() => changePage(i+1)}
				 style="background-color: {current_page === i+1 ? '#4CAF50' : '#8bc34a' }"
			>
				{i+1}
			</div>
		{/each}
	</div>
</div>



