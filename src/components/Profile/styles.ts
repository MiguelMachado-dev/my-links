import styled from 'styled-components'

export const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10px;
  border: 2px solid var(--highlight);
`

export const Username = styled.h2`
  font-size: 2.1rem;
  line-height: 1.6;
`

export const Role = styled.span`
  font-size: 1.6rem;
  line-height: 1.6;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.2rem;
`
