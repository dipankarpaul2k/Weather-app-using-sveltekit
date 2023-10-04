<div class="search_box">
  <form method="get" action="/search" class="search_form">
    <input
      type="search"
      name="city"
      id="search"
      class="search_input"
      placeholder="Search city"
      autocomplete="off"
    />
    <button class="search_button"><i class="ri-search-line" /></button>
  </form>
</div>

<style>
  .search_box {
    padding: var(--pd);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search_form {
    background-color: var(--color2);
    display: inline-block;
    width: 100%;
    max-width: 500px;
    height: 40px;
    padding-left: var(--pd);
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search_input {
    all: unset;
    flex: 1;
  }

  .search_button {
    all: unset;
    cursor: pointer;
    width: 10%;
    min-width: 45px;
    height: 100%;
    text-align: center;
    border-radius: 0 50px 50px 0;
  }

  .search_button:hover,
  .search_button:focus {
    background-color: var(--color_hover);
    filter: brightness(1.2);
  }
</style>
