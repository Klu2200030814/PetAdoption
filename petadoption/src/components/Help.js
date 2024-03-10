import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import Header from './Header';

const HelpPage = () => {
    return (
        <div className="help-page">
            <Header/>
            <h1>How You Can Help</h1>
            <div className="help-content">
                <div className="help-image">
                    <img src="https://source.unsplash.com/800x400/?pet" alt="Pet Adoption" />
                </div>
                <div className="help-text">
                    <p>If you're passionate about helping animals find loving homes, there are many ways you can support our pet adoption center:</p>
                    <ul>
                        <li>Adopt a pet: Consider opening your heart and home to one of our furry friends in need.</li>
                        <li>Donate: Your generous donations help cover the costs of food, medical care, and shelter for the animals.</li>
                        <li>Volunteer: Join our team of dedicated volunteers and make a difference in the lives of animals.</li>
                        <li>Spread the word: Share our mission with your friends and family to help us reach more potential adopters.</li>
                    </ul>
                    <p>Every contribution, big or small, makes a difference in the lives of animals in need. Together, we can make a positive impact!</p>
                    <Link to="/contact" className="button">Contact Us</Link>
                </div>
            </div>
        </div>
    );
}

export default HelpPage;