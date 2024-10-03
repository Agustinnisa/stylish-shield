import React from 'react';
import { Card } from 'react-bootstrap';

const WeatherCard = ({ temp, rainProb, recommendation }) => {
  return (
    <Card>
      <Card.Body>
        <p>Temperature: {temp}°C</p>
        <p>Rain Probability: {rainProb}%</p>
        <p>Recommendation: {recommendation}</p>
      </Card.Body>
    </Card>
  );
};

export default WeatherCard;
