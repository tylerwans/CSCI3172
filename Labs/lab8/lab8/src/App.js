import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    season: 'Spring',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      newErrors.firstName = 'First Name should contain alphabets only.';
    }
    if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      newErrors.lastName = 'Last Name should contain alphabets only.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format.';
    }
    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])(?=.*[A-Z]).{8,}$/.test(formData.password)) {
      newErrors.password = 'Password must contain at least 1 letter, 1 number, 1 special character, and 1 uppercase letter.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      // Save form data to localStorage
      window.localStorage.setItem('firstName', formData.firstName);
      window.localStorage.setItem('lastName', formData.lastName);
      window.localStorage.setItem('email', formData.email);
      window.localStorage.setItem('season', formData.season);
  
      // Navigate to Profile page
      window.location.href = '/profile';
    } else {
      setErrors(validationErrors);
    }
  };
  

  return (
    <div className="App">
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <div>{errors.firstName}</div>}
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <div>{errors.lastName}</div>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <div>{errors.email}</div>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <div>{errors.password}</div>}
        </div>
        <div>
          <label>Favorite Season:</label>
          <select name="season" value={formData.season} onChange={handleChange}>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
