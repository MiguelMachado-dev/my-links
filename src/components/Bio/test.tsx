import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Bio } from '.'

const bioData = {
  title: 'Olá 👋',
  content:
    'Tenho 24 anos e trabalho como Frontend Engineer na Uber. Entusiasta de tecnologia e amante de jogos!',
}

describe('<Bio />', () => {
  it('should render <Bio /> correctly', () => {
    render(<Bio data={bioData} />)

    expect(
      screen.getByRole('heading', {
        name: /olá 👋/i,
      })
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        /tenho 24 anos e trabalho como frontend engineer na uber\. entusiasta de tecnologia e amante de jogos!/i
      )
    ).toBeInTheDocument()
  })
})
