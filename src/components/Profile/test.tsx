import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Profile } from '.'

describe('<Profile />', () => {
  it('should render <Profile /> correctly', () => {
    render(<Profile />)

    expect(screen.getByRole('img')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /miguel machado/i,
      })
    ).toBeInTheDocument()

    expect(screen.getByText(/software engineer @ globant/i)).toBeInTheDocument()
  })
})
