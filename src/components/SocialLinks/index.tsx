import * as Icon from 'phosphor-react'

import links from './content'

import * as S from './styles'

export const SocialLinks = () => {
  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>
        {links.map((link, i) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const SocialIcon = Icon[link.label]

          return (
            <S.SocialItem key={i}>
              <a
                href={link.url}
                title={link.title}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <S.IconAndTitle>
                  <SocialIcon size={32} weight="duotone" />
                  <p>{link.title}</p>
                </S.IconAndTitle>
              </a>
            </S.SocialItem>
          )
        })}
      </S.SocialLinksList>
    </S.SocialLinksWrapper>
  )
}
