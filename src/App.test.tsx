import React from 'react'
import App from './App'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

describe('Animal Fun Facts', () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers()
  })

  afterEach(() => {
    cleanup()
  })

  it('renders the title', () => {
    render(<App />)
    const titleElement = screen.getByText(/Click an animal for a fun fact/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('displays the initial fact on clicking an animal', () => {
    render(<App />)
    const animalImage = screen.getByRole('button', { name: /dolphin/i })
    fireEvent.click(animalImage)

    const factElement = screen.getByText(
      /Dolphins have been shown to give distinct names to each other!/i
    )
    expect(factElement).toBeInTheDocument()
  })

  it('cycles through facts when clicking an animal multiple times', () => {
    render(<App />)
    const animalImage = screen.getByRole('button', { name: /dolphin/i })
    fireEvent.click(animalImage)

    const initialFactElement = screen.getByText(
      /Dolphins have been shown to give distinct names to each other!/i
    )
    expect(initialFactElement).toBeInTheDocument()

    fireEvent.click(animalImage)

    const updatedFactElement = screen.getByText(
      /Dolphins are known to display their own culture!/i
    )
    expect(updatedFactElement).toBeInTheDocument()
  })

  it('hides the fact after 5 seconds', async () => {
    render(<App />)
    const animalImage = screen.getByRole('button', { name: /dolphin/i })
    fireEvent.click(animalImage)

    const factElement = screen.getByText(
      /Dolphins have been shown to give distinct names to each other!/i
    )
    expect(factElement).toBeInTheDocument()
    expect(factElement).toHaveClass('show-fact')

    // Fast-forward time by 5 seconds
    vi.advanceTimersByTime(5000)

    expect(factElement).not.toHaveClass('show-fact')
  })
})
