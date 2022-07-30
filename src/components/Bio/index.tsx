import * as S from './styles'

interface IBioTypes {
  data: DataType
}

type DataType = {
  title: string
  content: string
}

export const Bio = ({ data }: IBioTypes) => {
  return (
    <S.BioWrapper>
      <S.BioTitle>{data.title}</S.BioTitle>
      <S.BioContent>{data.content}</S.BioContent>
    </S.BioWrapper>
  )
}
