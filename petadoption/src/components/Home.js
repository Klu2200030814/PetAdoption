import React from 'react';
import Header from './Header';
import backgroundImage from '../assets/pet.jpg'; // Import your background image

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '100vh' }}>
      <Header />
      <div className="container">
        <div className="box"></div>
      </div>
    </div>
  );
};

export default Home;
