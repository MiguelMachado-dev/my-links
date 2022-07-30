import styled from 'styled-components'

export const BioWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3.6rem 2rem;

  background-color: var(--highlight);
  color: var(--black);
  border-radius: 10px;
  margin-top: 3.2rem;
`

export const BioTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 1.5;
  padding-bottom: 1.6rem;
`

export const BioContent = styled.p`
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 500;
`
