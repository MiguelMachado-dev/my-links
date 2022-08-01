import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Share } from '.'

describe('<Share />', () => {
  it('should render <Share /> correctly', () => {
    render(<Share />)

    expect(
      screen.getByRole('heading', {
        name: /compartilhe:/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /compartilhe:/i,
      })
    ).toMatchSnapshot()
  })
})
