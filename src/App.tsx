import { SocialLinks } from './components/SocialLinks'
import { Bio } from './components/Bio'
import { Container } from './components/Container'
import { Profile } from './components/Profile'
import { Share } from './components/Share'

const bioData = {
  title: 'Olá 👋',
  content:
    'Tenho 25 anos e trabalho como Software Engineer na Globant. Entusiasta de tecnologia e amante de jogos!',
}

// TODO: Lib para SEO - Title, twitter card, etc...
// TODO: PWA

function App() {
  return (
    <Container>
      <Profile />
      <Bio data={bioData} />
      <SocialLinks />

      <Share />
    </Container>
  )
}

export default App
