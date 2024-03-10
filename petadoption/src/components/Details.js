import React from 'react';
import Header from './Header';
import { useParams } from 'react-router-dom';

const Details = () => {
  const petDetails = {
    name: 'Whiskers',
    breed: 'Persian',
    height: '10 inches',
    weight: '5 pounds',
    age: '2 years'
  };

  return (
    <div>
      <Header />
      <center>
        <h1>Pet Details</h1>
        <img src="/Cat.jpg" alt="Cat" style={{ maxWidth: '25%', height: 'auto' }} />
        <div>
          <h2>{petDetails.name}</h2>
          <p>Breed: {petDetails.breed}</p>
          <p>Height: {petDetails.height}</p>
          <p>Weight: {petDetails.weight}</p>
          <p>Age: {petDetails.age}</p>
        </div>
      </center>
    </div>
  );
};

export default Details;
