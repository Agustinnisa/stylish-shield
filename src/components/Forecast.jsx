import React, { useEffect, useState } from "react";
import { getWeatherData } from "../api/WeatherApi";
import { Container, Card, Row, Col } from "react-bootstrap";

const WeeklyForecast = () => {
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
      <h3>Weekly Weather Forecast</h3>
      {weather ? (
        <Row>
          {weather.daily.temperature_2m_max.map((temp, idx) => (
            <Col key={idx}>
              <Card>
                <Card.Body>
                  <h5>Day {idx + 1}</h5>
                  <p>Max Temp: {temp}°C</p>
                  <p>
                    Rain Probability:{" "}
                    {weather.daily.precipitation_probability[idx]}%
                  </p>
                  <p>{temp < 15 ? "Wear a jacket" : "Casual clothing"}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default WeeklyForecast;
