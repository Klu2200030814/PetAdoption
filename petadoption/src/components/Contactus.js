import React, { useState} from 'react';
import './Contacts.css'

function Contactus() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState(''); // State for address
  const [reasontoadopt, setReasontoadopt] = useState('');
  const [Sallaryperannum, setSallaryperannum] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check for required fields, including address (fixed typo)
    if (!name || !email || !reasontoadopt || !Sallaryperannum || !address) {
      alert('Please fill in all required fields.');
      return;
    }

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Address:', address);
    console.log('reasontoadopt:', reasontoadopt);
    console.log('Subject:', Sallaryperannum);

    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setReasontoadopt('');
    setSallaryperannum('');
  }

  // ... rest of your code

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" required value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="yourname@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
        <br />
        <label htmlFor="Salleryperannum">Salary per annum:</label>
        <input type="text" id="Sallaryperannum" name="Sallaryperannum" placeholder="Sallary per Annum" required value={Sallaryperannum} onChange={(e) => setSallaryperannum(e.target.value)} />
        <br />
        <label htmlFor="reason to adopt">reason to adopt:</label>
        <textarea id="reasontoadopt" name="reasontoadopt" rows="5" placeholder="Write your reason to adopt here" required value={reasontoadopt} onChange={(e) => setReasontoadopt(e.target.value)} />
        <br />
           

        <label htmlFor="address">Address:</label>
        <textarea id="address" name="address" rows="5" placeholder="Enter your address" required value={address} onChange={(e) => setAddress(e.target.value)} />
        <br />
        <button type="submit">Submit</button>   
       </form>
    </div>
  );
}
export default Contactus;