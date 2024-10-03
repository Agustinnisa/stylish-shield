import React from "react";
import { Card } from "react-bootstrap";

const OutfitCard = ({ outfit }) => {
  return (
    <Card>
      <Card.Body>
        <p>{outfit}</p>
      </Card.Body>
    </Card>
  );
};

export default OutfitCard;
