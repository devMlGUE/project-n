<script>
    export let changePage
    export let currentPage
    export let maxItems
    export let movieStoreList

    const getMaxPages = () => {
        return Math.ceil(movieStoreList.length / maxItems);
    };
</script>

<style>
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
</style>

<div class="pagination">
    {#each Array(getMaxPages(movieStoreList)) as _, i}
        <div class="pagination-number"
             on:click={() => changePage(i+1)}
             style="background-color: {currentPage === i+1 ? '#4CAF50' : '#8bc34a' }"
        >
            {i+1}
        </div>
    {/each}
</div>