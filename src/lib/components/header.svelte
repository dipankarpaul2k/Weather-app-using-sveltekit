<header class="header">
  <a class="link home" href="/"><i class="ri-home-2-fill" /></a>
  <a
    class="link github"
    href="https://github.com/dipankarpaul2k"
    target="_blank"><i class="ri-github-fill" /></a
  >

  <div class="app_title">
    <h2>Weather App</h2>
    <p>Using SvelteKit & OpenWeather API</p>
  </div>
</header>

<style>
  .header {
    width: 100%;
    padding: 10px var(--pd);
    text-align: center;
    border-bottom: 1px solid var(--divider);

    display: grid;
    grid-template-areas: "home app_title github";
  }

  .link {
    all: unset;
    color: var(--fColor1);
    cursor: pointer;
  }

  .link.home {
    display: inline-block;
    grid-area: home;
    text-align: start;
  }

  .link.github {
    grid-area: github;
    text-align: end;
  }

  .app_title {
    grid-area: app_title;
    text-align: center;
  }

  @media screen and (max-width: 600px) {
    .header {
      grid-template-areas:
        "home github"
        "app_title app_title";
    }
  }

  .app_title h2 {
    font-size: calc(var(--fs) + 20px);
  }
</style>
