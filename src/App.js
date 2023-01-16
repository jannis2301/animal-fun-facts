import React, { useState, useRef, useEffect } from 'react'
import { fishes } from './data'

function App() {
  const [animals, setAnimals] = useState([])
  const [fact, setFact] = useState('')
  const factRef = useRef(null)

  useEffect(() => {
    if (fishes) {
      setAnimals(fishes)
    } else {
      setAnimals([])
    }
  }, [])

  const displayFact = (id) => {
    const index = id - 1
    let facts = animals[index].facts
    let randomNumber = Math.floor(Math.random() * facts.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    let randomFact = facts[randomNumber]
    factRef.current.style.display = 'block'
    setFact(randomFact)
  }

  return (
    <>
      <h1>Click an animal for a fun fact</h1>
      <div className="animals">
        {animals.map((item) => {
          const { id, animal, image } = item
          return (
            <img
              key={id}
              className="animal"
              alt={animal}
              src={image}
              aria-label={animal}
              role="button"
              onClick={() => displayFact(id)}
            />
          )
        })}
      </div>
      <p className="fact" ref={factRef}>
        {fact}
      </p>
    </>
  )
}

export default App
