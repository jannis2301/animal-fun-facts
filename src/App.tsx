import React, { useState, useRef, useEffect } from 'react'
import { fishes, FishData } from './data'
import './index.css'

const App = () => {
  const [animals, setAnimals] = useState<Array<FishData>>([])
  const [fact, setFact] = useState<string>('')
  const factRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (fishes) {
      setAnimals(fishes)
    } else {
      setAnimals([])
    }
  }, [])

  const displayFact = (id: number) => {
    const index = id - 1
    let facts = animals[index].facts
    let randomNumber = Math.floor(Math.random() * facts.length)
    if (randomNumber === index) {
      randomNumber = index + 1
    }
    let randomFact = facts[randomNumber]
    if (factRef.current === null) return
    factRef.current.style.display = 'block'
    setFact(randomFact)
  }

  return (
    <>
      <div className="animal-fun-facts">
        <h1 className="title">Click an animal for a fun fact</h1>
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
      </div>
    </>
  )
}

export default App
