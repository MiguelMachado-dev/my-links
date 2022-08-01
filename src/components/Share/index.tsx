import {
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'

import * as S from './styles'

export const Share = () => {
  const WEBSITE_URL = 'https://meus-links.miguelmachado.dev'
  const buttonProps = {
    size: 32,
    round: true,
  }

  return (
    <S.ShareWrapper>
      <S.ShareTitle>Compartilhe:</S.ShareTitle>

      <S.ShareActions>
        <FacebookShareButton url={WEBSITE_URL}>
          <FacebookIcon {...buttonProps} />
        </FacebookShareButton>

        <WhatsappShareButton url={WEBSITE_URL}>
          <WhatsappIcon {...buttonProps} />
        </WhatsappShareButton>

        <TwitterShareButton url={WEBSITE_URL} via="oMigtito">
          <TwitterIcon {...buttonProps} />
        </TwitterShareButton>
      </S.ShareActions>
    </S.ShareWrapper>
  )
}
