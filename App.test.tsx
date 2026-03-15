import { render, screen } from '@testing-library/react'
import App from './App'
import { expect, test } from 'vitest'
import React from 'react'

test('renders title', () => {
  render(<App />)
  const titleElement = screen.getByRole('heading', { name: /Am I Covered\?/i, level: 1 })
  expect(titleElement).toBeInTheDocument()
})

test('renders initial prompt', () => {
  render(<App />)
  const promptElement = screen.getByText(/Please select a policy type to get started/i)
  expect(promptElement).toBeInTheDocument()
})
