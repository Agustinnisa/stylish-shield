import React, { useEffect, useState } from "react";
import { getWeatherData } from "../api/WeatherApi";
import { Container, Table } from "react-bootstrap";

const WeatherDetail = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeatherData(46.9481, 7.4474);
      setWeather(data);
    };
    fetchWeather();
  }, []);

  return (
    <Container className="mt-4">
      <h3>Hourly Weather</h3>
      {weather ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Hour</th>
              <th>Temperature (°C)</th>
              <th>Rain Probability (%)</th>
              <th>Recommendation</th>
            </tr>
          </thead>
          <tbody>
            {weather.hourly.temperature_2m.map((temp, idx) => (
              <tr key={idx}>
                <td>{idx}:00</td>
                <td>{temp}</td>
                <td>{weather.hourly.precipitation_probability[idx]}</td>
                <td>
                  {temp < 10
                    ? "Wear a coat!"
                    : weather.hourly.precipitation_probability[idx] > 50
                    ? "Bring an umbrella!"
                    : "T-shirt weather"}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default WeatherDetail;
