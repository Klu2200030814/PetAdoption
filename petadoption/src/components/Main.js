import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import LifeAdoptionLogo from '../LifeAdoptionLogo.jpg'; // Import the logo image
import './Main.css';

function Main() {
  return (
    <div>
      <div className='image-and-button-container'>
        <div className='image-Main'>
          <img style={{width:'50%',height:'70%'}} src={LifeAdoptionLogo} alt='logo'/>
        </div>
      </div>
      <div className='text-container'>
        <h2 className='text-heading'>Why Pet Adoption Matters</h2>
        <p className='text-paragraph'>
          Pet adoption not only saves lives but also brings immense joy and companionship to families. By adopting a pet from a shelter, you are giving a second chance to an animal in need. Pets offer unconditional love and loyalty, and they become cherished members of our families.
        </p>
        <p className='text-paragraph'>
          Moreover, pets have been shown to have numerous health benefits for humans. They can reduce stress, alleviate feelings of loneliness, and even lower blood pressure. Additionally, pets encourage us to stay active and lead healthier lifestyles.
        </p>
        <p className='text-paragraph'>
          Let's embrace pet adoption and give these loving animals the forever homes they deserve.
        </p>
      </div>
      <div className='button-container'>
        <Link to="/signin"> {/* Navigate to the sign-in page */}
          <button className="get-started-button">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default Main;
