import links from './content'

import * as S from './styles'

export const SocialLinks = () => {
  return (
    <S.SocialLinksWrapper>
      <S.SocialLinksList>
        {links.map((link, i) => {
          return (
            <S.SocialItem key={i}>
              <a
                href={link.url}
                title={link.label === 'Blog' ? 'Meu blog' : link.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <S.IconAndTitle>
                  <link.icon size={32} weight="duotone" />
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
