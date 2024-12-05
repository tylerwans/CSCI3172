import React from 'react';
import Cat from './image/cat2.jpg'

function Dashboard() {
  return (
    <div>
      <h1>Meow</h1>
      <img src={Cat} alt="Cat 2" style={{ width: '300px' }} />

    </div>
  );
}

export default Dashboard;
