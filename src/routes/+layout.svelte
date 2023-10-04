<script>
  import "../app.css";
  import Header from "$lib/components/header.svelte";
  import Footer from "$lib/components/footer.svelte";
  import SearchForm from "$lib/components/searchForm.svelte";
</script>

<svelte:head>
  <title>Weather App</title>
  <link
    href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
    rel="stylesheet"
  />
</svelte:head>

<Header />
<SearchForm />

<main>
  <slot />
</main>

<Footer />

<style>
  main {
    padding: var(--pd);
    text-align: center;
  }
</style>
