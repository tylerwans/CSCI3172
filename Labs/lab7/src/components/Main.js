import React from 'react';
import cat1Image from '../images/cat.jpg'; 
import cat2Image from '../images/cat2.jpg'; 


const MainContent = () => {
    return (
        <main style={{ padding: '20px' }}>
            <h2>Welcome to Lab 7</h2>
            <p>This is a react application</p>

            <div>
            <h2>Look at this cat</h2>
            <img src={cat1Image} alt="Cat 1" style={{ width: '300px' }} />
        </div>

        <div>
        <h2>This cat is frickn dunking!</h2>
        <img src={cat2Image} alt="Cat 2" style={{ width: '300px' }} />
        </div>
            
        </main>
    );
};

export default MainContent;