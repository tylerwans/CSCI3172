import React from 'react';

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>First Name: {window.localStorage.getItem('firstName')}</p>
      <p>Last Name: {window.localStorage.getItem('lastName')}</p>
      <p>Email: {window.localStorage.getItem('email')}</p>
      <p>Favorite Season: {window.localStorage.getItem('season')}</p>
      <a href="/dashboard">Go to Dashboard</a>
    </div>
  );
}

export default Profile;
