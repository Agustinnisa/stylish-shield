import React, { useEffect, useState } from "react";
import { getWeatherData } from "../api/WeatherApi";
import { Container, Button, Card } from "react-bootstrap";

const OutfitRecommendation = () => {
  const [weather, setWeather] = useState([]);
  const [savedOutfits, setSavedOutfits] = useState([]);

  useEffect(() => {
    const fetchWeather = async () => {
      const data = await getWeatherData(46.9481, 7.4474);
      setWeather(data);
    };
    fetchWeather();
  }, []);

  const saveOutfit = (outfit) => {
    setSavedOutfits([...savedOutfits, outfit]);
  };

  return (
    <Container className="mt-4">
      <h3>Outfit Recommendations</h3>
      {weather ? (
        <Card>
          <Card.Body>
            <p>Temperature: {weather.hourly.temperature_2m[0]}°C</p>
            <p>
              Suggested Outfit:{" "}
              {weather.hourly.temperature_2m[0] < 15
                ? "Jacket and pants"
                : "T-shirt and shorts"}
            </p>
            <Button
              onClick={() =>
                saveOutfit(
                  weather.hourly.temperature_2m[0] < 15
                    ? "Jacket and pants"
                    : "T-shirt and shorts"
                )
              }
            >
              Save Outfit
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading...</p>
      )}
      <h5>Saved Outfits</h5>
      {savedOutfits.length > 0 ? (
        savedOutfits.map((outfit, idx) => <p key={idx}>{outfit}</p>)
      ) : (
        <p>No saved outfits</p>
      )}
    </Container>
  );
};

export default OutfitRecommendation;
