import { SocialLinks } from './components/SocialLinks'
import { Bio } from './components/Bio'
import { Container } from './components/Container'
import { Profile } from './components/Profile'

const bioData = {
  title: 'Olá 👋',
  content:
    'Tenho 24 anos e trabalho como Frontend Engineer na Uber. Entusiasta de tecnologia e amante de jogos!',
}

// TODO: Lib para SEO - Title, twitter card, etc...
// TODO: Lib para icons
// TODO: PWA

function App() {
  return (
    <Container>
      <Profile />
      <Bio data={bioData} />
      <SocialLinks />
    </Container>
  )
}

export default App
