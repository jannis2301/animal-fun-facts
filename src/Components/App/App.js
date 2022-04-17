import React from 'react';
import { animals } from '../Animals/Animals';
import './App.css';

class Animals extends React.Component {
  render() {
    const displayFact = e => {
      let facts = animals[e.target.alt].facts;
      const randomIndex = Math.floor(Math.random() * facts.length);
      const fact = document.getElementById('fact');   
      fact.style.display = 'block';
      fact.innerHTML = facts[randomIndex];
    } 

    const images = [];
    for (const animal in animals) {
      images.push(
        <img 
        key = {animal}
        className = 'animal' 
        alt = {animal} 
        src = {animals[animal].image}
        aria-label = {animal}
        role = 'button'
        onClick = {displayFact} 
        />);
    }
    const title = '';

    return (
       <div>
          <h1>{title === '' ? 'Click an animal for a fun fact' : title}
          </h1>
          <div className="animals">
            {images}
          </div>
          <p id="fact">
          </p>
        </div> 
    );
  }
};

export default Animals;
