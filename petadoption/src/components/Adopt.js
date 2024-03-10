import React from 'react';
import Header from './Header';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import './Image .css';
const Adopt = ({ history }) => { // Destructure history from props
  const navigate = useNavigate();

  const handleAdoptClick = () => {
    navigate('/adoption');
  };
  const handleClick = () =>{
    navigate('/details');
  };

  return (
    <div className="Adopt">
      <Header />
      <header className="Adopt-header">
        <img src="/Cat.jpg" alt="Cat" className="medium-photo" />
        <div className="button-container">
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleAdoptClick}>Adopt me!</Button>
            <Button variant="contained" onClick={handleClick}>Details</Button>
          </Stack>
        </div>
      </header>
    </div>
  );
};

export default Adopt; 
