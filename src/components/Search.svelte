<script>
	import { movieStoreList } from '../stores.js';
	import Icon from 'svelte-awesome/components/Icon.svelte'
	import { faSearch } from '@fortawesome/free-solid-svg-icons';
	import movies from '../data/movies.js';

	const search = (e) => {
		console.log('search');
		const val = e.target.value.toLowerCase();
		const searchedMovies = movies.filter(movie => movie.title.toLowerCase().includes(val));
		console.log(searchedMovies.length);
		movieStoreList.update(() => searchedMovies);
	};
</script>

<style>
	.search {
		padding: 0 40px;
		grid-area: search;
		border-bottom: 1px solid rgba(0,0,0,0.08);
		display: grid;
		align-items: center;
	}
	.search-input {
		font-size: 32px;
		font-weight: 400;
		color: #4CAF50;
		background: 0 0;
		padding: 10px;
		border: none;
		width: 80%;
		box-sizing: border-box;
	}
	.search-input::placeholder {
		color: #9E9E9E;
	}
	.search-input:focus {
		outline: none;
	}
	.search-icon :global(svg){
		fill: #9E9E9E;
	}
</style>

<div class="search">
	<div>
		<label>
			<span class="search-icon">
				<Icon data={faSearch} scale="1.5" />
			</span>
			<input
				class="search-input"
				on:keyup={search}
				type="text"
				placeholder="Search movie..."
			>
		</label>
	</div>
</div>
