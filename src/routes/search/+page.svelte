<script>
  import { onMount } from "svelte";

  export let data;
  let isLoading = true; // Initialize loading state

  // Reactive components,
  // constantly look for any changes in variables
  $: error = data.error;
  $: weatherData = data.weatherData;
  $: console.log(weatherData);
  $: iconURL = weatherData
    ? `https://openweathermap.org/img/wn/${weatherData.weather[0]?.icon}@2x.png`
    : "";

  onMount(async () => {
    if (data) {
      isLoading = false;
    }
  });
</script>

<!-- Show result -->
{#if isLoading}
  <p class="waiting">Loading...</p>
{:else if error}
  <p class="error">{error}</p>
{:else}
  <div class="card">
    <h2>{weatherData.name} , <small>{weatherData.sys.country}</small></h2>
    <p class="description">
      {weatherData.weather[0]?.description}
    </p>
    <div class="summary">
      <img
        title={weatherData.weather[0]?.description}
        alt="icon for weather"
        src={iconURL}
      />
      <span title="temperature" class="temp"
        >{Math.ceil(weatherData.main.temp)}°C</span
      >
    </div>
    <ul>
      <li>
        <span>Feels like: </span>
        {weatherData.main.feels_like} °C
      </li>
      <li><span>Clouds: </span>{weatherData.clouds.all} %</li>
      <li>
        <span>Humidity: </span>
        {weatherData.main.humidity} %
      </li>
      <li>
        <span>Pressure: </span>
        {(weatherData.main.pressure * 0.000987).toFixed(2)} atm
      </li>
      <li>
        <span>Wind speed: </span>
        {weatherData.wind.speed} m/s , <i class="ri-arrow-right-line" id="wind_icon" style="--deg: {weatherData.wind.deg}"/>
      </li>
    </ul>
  </div>
{/if}

<style>
  .card {
    max-width: 400px;
    background-color: var(--color2);
    border-radius: 20px;
    margin: 0 auto;
    padding: var(--pd);
  }

  .card h2 {
    font-size: calc(var(--fs) + 20px);
  }

  .card h2 > small {
    font-size: calc(var(--fs) + 5px);
  }

  .description {
    font-size: calc(var(--fs) + 10px);
    text-transform: uppercase;
  }

  .summary {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .temp {
    font-size: calc(var(--fs) + 20px);
  }

  .card ul {
    list-style-type: none;
    background-color: var(--color3);
    border-radius: 10px;
    padding: var(--pd);
  }

  .card ul li span {
    font-weight: 700;
  }

  #wind_icon {
    display: inline-block;
		transform: rotate(calc(var(--deg) * 1deg + 90deg));
	}
</style>
