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
        email: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          address: formData.address,
          email: formData.email,
        };
    
        try {
          const response = await axios.post('http://localhost:8081/register', userData);
          console.log('Registration successful:', response.data);
          navigate('/thank'); // Redirect after successful registration
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
                    <label><h2>Email:</h2></label>
                    <input type="text" name="email" value={formData.emai} onChange={handleChange} />
                </div>
                <div className="form-group">
                <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default FormComponent;
