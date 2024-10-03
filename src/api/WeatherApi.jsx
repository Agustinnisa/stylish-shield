const API_URL = "https://api.open-meteo.com/v1/forecast";

export const getWeatherData = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `${API_URL}?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,weather_code`
    );

    if (!response.ok) {
      throw new Error("Network response was not oke");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
