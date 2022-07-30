import links from './content'
import Icons from './Icons'

import type { StyledIcon } from '@styled-icons/styled-icon'

import * as S from './styles'

export const SocialLinks = () => {
  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>
        {links.map((link, i) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const Icon: StyledIcon = Icons[link.label]

          return (
            <S.SocialItem key={i}>
              <a
                href={link.url}
                title={link.label === 'HomeAlt' ? 'Meu blog' : link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.IconAndTitle>
                  <S.IconWrapper>
                    <Icon />
                  </S.IconWrapper>
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
