// src/Player.js

import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({ name, team, nationality, Number, age, imageUrl }) => {
  return (
    <Card style={{ width: "18rem", margin: "10px"  }}  bg="info" expand="lg">
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Team: {team}</Card.Text>
        <Card.Text>Nationality: {nationality}</Card.Text>
        <Card.Text> Number: {Number}</Card.Text>
        <Card.Text>Age: {age}</Card.Text>
      </Card.Body>
    </Card>

    
  );
};

export default Player;
