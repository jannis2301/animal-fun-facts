import React, { useState, useRef, useEffect } from 'react'
import { fishes, FishData } from './data'
import './index.css'

const App = () => {
  const [animals, setAnimals] = useState<Array<FishData>>([])
  const [fact, setFact] = useState<string>('')
  const factRef = useRef<HTMLParagraphElement | null>(null)
  const displayedFacts = useRef<{ [key: number]: number }>({})
  const hideFactTimeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (fishes) {
      setAnimals(fishes)
    } else {
      setAnimals([])
    }
  }, [])

  const getNextFactIndex = (id: number, factsLength: number) => {
    if (displayedFacts.current[id] === undefined) {
      // No facts displayed for this animal yet, start from the beginning
      displayedFacts.current[id] = 0
    } else {
      // Move to the next fact, or wrap around if all facts have been displayed
      displayedFacts.current[id] =
        (displayedFacts.current[id] + 1) % factsLength
    }
    return displayedFacts.current[id]
  }

  const displayFact = (id: number) => {
    const index = id - 1
    if (index < 0 || index >= animals.length) return

    const facts = animals[index].facts
    const factIndex = getNextFactIndex(id, facts.length)
    const factToDisplay = facts[factIndex]

    setFact(factToDisplay)

    if (factRef.current) {
      factRef.current.classList.add('show-fact')
    }

    // Clear the previous timeout (if any)
    if (hideFactTimeout.current) {
      clearTimeout(hideFactTimeout.current)
    }

    // Set a new timeout to hide the fact after 5 seconds
    hideFactTimeout.current = setTimeout(hideFact, 5000)
  }

  const hideFact = () => {
    if (factRef.current) {
      factRef.current.classList.remove('show-fact')
    }
  }

  return (
    <>
      <div className="animal-fun-facts">
        <h1 className="title">Click an animal for a fun fact</h1>
        <div className="animals">
          {animals.map(({ id, animal, image }) => {
            return (
              <img
                key={id}
                className="animal"
                alt={animal}
                src={image}
                aria-label={animal}
                role="button"
                onClick={() => {
                  displayFact(id)
                }}
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
