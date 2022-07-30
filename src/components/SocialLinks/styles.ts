import styled from 'styled-components'

export const SocialLinksWrapper = styled.nav`
  width: 100%;
  margin-top: 4.6rem;
  margin-bottom: 4.8rem;
`

export const SocialItem = styled.li`
  background-color: var(--mediumBackground);
  border: 2px solid var(--borders);
  border-radius: 10px;
  transition: filter 0.2s ease;

  &:hover {
    filter: contrast(108%);
  }
`

export const SocialLinksList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1.6rem;

  a {
    display: block;
    color: var(--white);
    text-decoration: none;
    transition: color 0.2s ease;
    padding: 2rem;

    &:hover {
      color: var(--highlight);
    }
  }
`

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
`

export const IconAndTitle = styled.div`
  display: flex;
  align-items: center;

  p {
    width: 100%;
    text-align: center;
    font-size: 1.4rem;
  }
`
