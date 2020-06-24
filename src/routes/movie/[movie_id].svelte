<script context="module">
	import movies from '../../data/movies.js';
	export async function preload({ params, query }) {
		const movie = movies.find(obj => {
			return obj.id === parseInt(params.movie_id);
		})
		return { movie: movie };
	}
</script>

<script>
	export let movie;
	let show = true;

	import Loader from "../../components/Loader.svelte";

	const webtorrentConfig = {
		announce: [
				"wss://tracker.btorrent.xyz",
				"wss://tracker.openwebtorrent.com",
				"wss://video.blender.org:443/tracker/socket",
				"wss://tracker.sloppyta.co:443/announce",
				"wss://peertube.live:443/tracker/socket",
				"wss://open.tube:443/tracker/socket",
				"ws://tracker.sloppyta.co:80/announce"
		],
		maxWebConns: 8
	}

	function getMagnetLinkBySize(videos){
		let screenSize = 720;
		if (screen.height >= 1080){
			screenSize = 1080;
		}
		if (screen.height >= 2160){
			screenSize = 2160;
		}
		let video = videos.find(function (video) {
			return video.quality === screenSize;
		})
		if (!video){
			video = videos.find(function (video) {
				screenSize = screenSize/2;
				return video.quality === screenSize;
			})
			if (!video){
				video = videos.find(function (video) {
					screenSize = screenSize/2;
					return video.quality === screenSize;
				})
			}
		}
		console.log(screenSize);
		return video.magnet_link;
	}

	function initializeWebTorrent(){
		const client = new WebTorrent();
		const magnet_link = getMagnetLinkBySize(movie.videos);
		const torrent = client.add(magnet_link, webtorrentConfig);

		torrent.on('ready', function () {
			const file = torrent.files.find(function (file) {
				return file.name.endsWith('.mp4');
			})
			show = false;
			file.appendTo('.movie-video');
		});
		torrent.on('warning', function (err) {
			console.log(err);
		});
	}
</script>

<style>
	.movie{
		grid-area: content;
		padding: 16px 8px;
		display: grid;
		grid-template-columns: 1fr;
		align-items: center;
		grid-column-gap: 8px;
	}
	.movie-video {
		display: grid;
		justify-items: center;
	}
	.movie-card h1 {
		font-weight: 900;
		font-size: 48px;
		line-height: 1.1;
		margin-bottom: 25px;
	}
	:global(video) {
		width: 100%;
		background: var(--bg-img) no-repeat 0 0;
		background-position: center;
		background-size: cover;
	}
	:global(video:fullscreen) {
		background: #000;
		outline: none;
	}
	@media (min-width: 768px) {
		.movie{
			padding: 16px 16px;
			grid-column-gap: 16px;
			grid-template-columns: 2fr 3fr;
		}
	}
	@media (min-width: 1201px) {
		.movie{
			padding: 16px 24px;
		}
	}
	@media (min-width: 1441px) {
		.movie{
			padding: 24px 32px;
			grid-column-gap: 24px;
		}
	}
	@media (min-width: 1681px) {
		.movie{
			padding: 32px 40px;
			grid-column-gap: 32px;
		}
	}
	@media (min-width: 1921px) {
		.movie{
			padding: 32px 48px;
		}
	}
</style>

<svelte:head>
	<title>{movie.title} ({movie.year})</title>
	<script
		src="https://cdn.jsdelivr.net/npm/webtorrent@latest/webtorrent.min.js"
		on:load={initializeWebTorrent}
		async
	>

	</script>
</svelte:head>

<div class="movie">
	<div class="movie-card">
		<h1>{movie.title} ({movie.year})</h1>
		<p>{movie.plot}</p>
		<div>
			<p> <strong>Genre:</strong> {movie.genre} </p>
			<p> <strong>Rating:</strong> {movie.rating} </p>
			<p> <strong>Year:</strong> {movie.year} </p>
			<p> <strong>Runtime:</strong> {movie.runtime}m </p>
		</div>
	</div>

	<div class="movie-video" style="--bg-img: url('{movie.poster}')">
		<Loader show={show} />
	</div>
</div>

