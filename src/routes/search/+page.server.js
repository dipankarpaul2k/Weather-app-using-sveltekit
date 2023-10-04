import { SECRET_API_KEY } from "$env/static/private";

export const load = async (serverLoadEvent) => {
    const { fetch } = serverLoadEvent;
    const API_KEY = SECRET_API_KEY;
    const city = serverLoadEvent.url.searchParams.get("city");
    if (!city) {
        return {
            error: "Please input a city",
        };
    }
    if (typeof city !== "string" || city.includes("<") || city.includes(">")) {
        return {
            error: "Invalid city parameter",
        };
    }

    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
    const url = `${BASE_URL}?q=${city}&units=metric&appid=${API_KEY}`;

    try {
        const res = await fetch(url);
        if (res.ok) {
            const weatherData = await res.json();
            return { weatherData, error: "" }
        } else if (res.status === 404) {
            return {
                error: `The location '${city}' could not be found`,
            };
        } else if (res.status === 401) {
            return {
                error: "Unauthorized. Please provide valid credentials.",
            };
        } else if (res.status === 403) {
            return {
                error: "Forbidden. You do not have permission to access this resource.",
            };
        } else if (res.status === 500) {
            return {
                error: "Internal server error. Please try again later.",
            };
        } else {
            return { error: "Unknown error occurred." };
        }
    } catch (err) {
        console.log(err);
        return { error: "Internal server error.." };
    }
}