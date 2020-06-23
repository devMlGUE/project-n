<script>
	import Iconx from './Iconx.svelte';
</script>

<style>
	nav {
		 grid-area: nav;
		 width: 80px;
		box-shadow: 4px 4px 8px #00000017;
	}
	.nav-item {
		border-bottom: 1px solid #e7e7e7;
		height: 112px;
		display: grid;
		align-items: center;
		justify-items: center;
	}
	.nav-item a {
		text-decoration: none;
		color: #848484;
		transition-duration: 250ms;
		transition-property: padding-top, padding-bottom, color, background-color, width;
		transition-timing-function: ease-in-out;
	}

	.nav-item:hover a {
		color: #3db13d;
	}
	.nav-item.logo {
		height: 90px;
	}
	.nav-item:hover :global(svg){
		fill: #3db13d;
	}
	@media (min-width:768px) {
		/* portrait tablets, portrait iPad, e-readers (Nook/Kindle) */
		nav {
			width: 120px;
		}
	}
	@media (min-width:1200px) {
		/* hi-res laptops and desktops */
		nav {
			width: 160px;
		}
	}
</style>

<nav>
	<div class="nav-item logo">
		<a rel='prefetch' href="/">
			<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAmVBMVEX///8hHB0lISI0MTLh4eEUERLm5ubFxcUvKyyWlZWnpqeGhYZYVldPTU5BPj+fnp5/fX7y8vJubG3X19eNi4w7ODn6+fnBwcHOzs7Lysq0s7RUUlPs7Ozd3N3a2tpoZ2dcWltKSEnU09R5d3hzcnIaFhf29vaamJliYGGioaKDgYIPDQ68vLy3t7dHREWvrq+rq6uRkJEIBgd0xMAEAAADNElEQVQ4y42U17KrMAxFccf03hMgQCA9Of//cVc2qW9XMxlivNDeSDLG/0eYBENgWdwwNslh+7u3t84XEQzJ0BiwzU7shJg3Bvg0MfmbBLMJT4ydBCwohkAYMYbginYfLDNoirC66xWwLOC/XioMT853xk5jeIo4LHboOzCzvkAPOHXvC8TwW1OT8AM6JtIyLtUe39Sa0v6Y7PUeeCxf4CdgRd+k+wTT/An+phw/oLmCV67qCJueCbBG9bV8S5MV7EMFYjwtKUImWXUIZu8S1abWwJ5yE8N2QNDkikqThCBWvepIsOJIp8AtNCUxQZ6GtrI0waa3X8E+VW6IG3EFIlLPBIHhfVkjlC6E4FfLXTCPcDp2CqSoHyAjJoURxv1f66fERISvoPadjon2yBwpCSZRZjQ8QuhmqZT2B8TX5aCGgqM5v/emc4QShMJHj+xokmfVHWyC4bZPSuWR3UqRkKgFtT0t/WMYuyZmw1oeKKvTtcez8sj8MrevBz01XOwi0QgQ1yntFF6mbiM71+CBn6N0OWuxHb2NWTgik0WwCjyQriNn1uBkl8KK7DvXp2RTBPmZ9iC50xnB4+DMMWyVTG5jntTzegh4fpFFeCBENTIBDyh16qDQdfQ5NMW3175lQlwswRco0cWY3ZpAY+qR6ukJKOVSysLQ0dyEFdMz9MTLfAcGLTU7u9DlCXi8kZZ1MdbI/aqMS5uQv+riqsZjc2n04Np0I6pcvg4qn61KiBySeVZ71WPtNHoeZbxpcuslbexFYJW5L90a9YGrR98NNWgLHg5JwI1nUPsot+f76JLT4GDgcJfp42rnWy4v9hvMKv9RhZVwPeR1REl36naMj1xQX1gvaXhW+g9xv0Vdiq4mgKzea9ChBbf9ry9Z5iePgPpVe319FXz1kqYjdjSw743xDpocRgvexwNKsaejLk9PuUgOx9j4hCXn5WxZPQFlBUrdQhKHMBWP/RfI22F4bGc3JSto6xZeebMVzt34jpsTtKLSx/UFUuRujSZuxQ8YjsscFUmHMMT6LSwn2TTZ/kCNn6jcyAluDtPx56uMR55lUKX9L0iDQY5Utk60LG19Mf47/gEa7Du5xM/7UwAAAABJRU5ErkJggg==" alt="n logo">
		</a>
	</div>
	<div class="nav-item">
		<a rel='prefetch' href="/">
			<Iconx name="home" />
			Home
		</a>
	</div>
	<div class="nav-item">
		<a rel='prefetch' href="/movies">
			<Iconx name="movie" />
			Movies
		</a>
	</div>
	<div class="nav-item">
		<a rel='prefetch' href="/series">
			<Iconx name="tv" />
			Series
		</a>
	</div>
	<div class="nav-item">
		<a rel='prefetch' href="/ask">
			<Iconx name="request" />
			Requests
		</a>
	</div>
</nav>
