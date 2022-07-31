import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Container } from '.'

describe('<Container />', () => {
  it('should render <Container /> correctly', () => {
    const { container } = render(
      <Container>
        <h2>Test</h2>
      </Container>
    )

    screen.logTestingPlaygroundURL()

    const heading = screen.getByRole('heading', {
      name: /test/i,
    })

    expect(heading).toBeInTheDocument()
    expect(container.firstChild).toBeInTheDocument()

    expect(heading).toMatchSnapshot()
    expect(container.firstChild).toHaveStyle({
      width: '100%',
      maxWidth: '60rem',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingLeft: '1.6rem',
      paddingRight: '1.6rem',
      paddingTop: '7.2rem',
    })
    expect(container.firstChild).toMatchSnapshot()
  })
})
