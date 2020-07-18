<script context="module">
    import movies from '../../data/movies.js';

    const currDate = new Date();
    const currentYear = currDate.getFullYear();

    export async function preload({ params, query }) {
        const movie_list = movies.filter(obj => {
            const {category} = params;
            if (category === currentYear.toString()) {
                return obj.year === parseInt(category);
            }
            return obj.genre.toLowerCase().includes(params.category);
        })
        return { movie_list };
    }
</script>

<script>
    import Poster from '../../components/Poster.svelte';
    export let movie_list;
</script>

<style>
    .container {
        grid-area: content;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 16px;
        grid-row-gap: 24px;
        padding: 16px;
    }

    @media (min-width: 768px) {
        .container {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (min-width: 1201px) {
        .container {
            grid-template-columns: repeat(4, 1fr);
        }
    }

    @media (min-width: 1441px) {
        .container {
            grid-template-columns: repeat(5, 1fr);
        }
    }

    @media (min-width: 1681px) {
        .container {
            grid-template-columns: repeat(6, 1fr);
        }
    }

    @media (min-width: 1921px) {
        .container {
            grid-template-columns: repeat(7, 1fr);
        }
    }
</style>

<svelte:head>
    <title>Últimos </title>
</svelte:head>

<div class="container">
    {#each movie_list as movie, i}
        <Poster movie={movie} />
    {/each}
</div>
