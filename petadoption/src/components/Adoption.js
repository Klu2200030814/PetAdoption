import React, { useState } from 'react';
import axios from 'axios';
import './adopt.css';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const FormComponent = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/thank');
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userData = {
          firstName: formData.get('firstName'),
          lastName: formData.get('lastName'),
          address: formData.get('address'),
          phoneNumber: formData.get('phoneNumber'),
        };
    
        try {
          const response = await axios.post('http://localhost:8081/register', userData);
          console.log('Registration successful:', response.data);
          // Redirect to signin page after successful registration
          navigate('/signin');
        } catch (error) {
          console.error('Error during registration:', error);
        }
      };
    
    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label><h2>First Name:</h2></label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label><h2>Last Name:</h2></label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label><h2>Address:</h2></label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label><h2>Phone Number:</h2></label>
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <button type="submit" className="submit-button" onClick={handleClick}>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default FormComponent;
