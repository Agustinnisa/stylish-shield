import React, { useEffect, useState } from 'react';
import { getWeatherData } from '../api/WeatherApi';
import { Container, Card } from 'react-bootstrap';

const WeatherDashboard = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeatherData(46.9481, 7.4474);
      setWeather(data);
    };
    fetchWeather();
  }, []);

  const getClothingRecommendation = (temp, rainProb) => {
    if (temp < 10) return "Wear a coat!";
    if (rainProb > 50) return "Carry an umbrella!";
    return "T-shirt is fine!";
  };

  return (
    <Container className="mt-4">
      {weather ? (
        <Card>
          <Card.Body>
            <h3>Current Weather</h3>
            <p>Temperature: {weather.hourly.temperature_2m[0]}°C</p>
            <p>Rain Probability: {weather.hourly.precipitation_probability[0]}%</p>
            <p>Recommendation: {getClothingRecommendation(weather.hourly.temperature_2m[0], weather.hourly.precipitation_probability[0])}</p>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default WeatherDashboard;
