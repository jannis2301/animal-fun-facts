import React from 'react'
import App from './App'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { describe, it, expect, afterEach } from 'vitest'

describe('Animal Fun Facts', () => {
  afterEach(() => {
    cleanup()
  })

  it('renders the title', () => {
    render(<App />)
    const titleElement = screen.getByText(/Click an animal for a fun fact/i)
    expect(titleElement).toBeInTheDocument()
  })
})
