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
  <meta name="title" content="Weather App | SvelteKit" />
  <meta name="description" content="A simple weather app using openweathermap api" />
  <meta name="keywords" content="HTML, CSS, JavaScript, svelte, sveltekit, api, vite" />
  <meta name="author" content="Dipankar Paul" />
  <meta name="image" content="https://cdn-icons-png.flaticon.com/128/9176/9176568.png" />
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
