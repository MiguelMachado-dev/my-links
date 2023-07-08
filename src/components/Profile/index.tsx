import * as S from './styles'

export const Profile = () => {
  return (
    <S.ProfileWrapper>
      <S.Avatar src="https://github.com/MiguelMachado-dev.png" />

      <S.UserInfo>
        <S.Username>Miguel Machado</S.Username>
        <S.Role>Software Engineer @ Globant</S.Role>
      </S.UserInfo>
    </S.ProfileWrapper>
  )
}
