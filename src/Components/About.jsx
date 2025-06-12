import styled from 'styled-components'

import { AboutCard } from './CardStyledComponents'
import { P } from './GlobalStyle'

/////////////////////////////////////////////////

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;  
  @media (max-width: 1080px) {
    width: 100%;
  }
`

export const Layout = styled.div`
  display: flex;
  padding: var(--space-s) 0;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    padding: var(--space-s) var(--space-m);
  }
`
/////////////////////////////////////////////////


const About = () => {
  return (
    <Container>
      <Layout>
        <AboutCard>
          <P>
            Fondée en 2015, nous sommes une organisation de taille modeste, spécialisée dans la sécurité et le sauvetage.
            Nous collaborons avec d’autres organisations afin de les aider à mener à bien leurs missions. <br /><br />
            Pour garantir l’efficacité de nos opérations, nous avons structuré nos activités en plusieurs branches, chacune couvrant un domaine clé.
            Être un Argonauts, c’est faire partie d’un groupe aux compétences diversifiées, uni par un engagement commun.
          </P>
        </AboutCard>
      </Layout>
    </Container>
  )
}

export default About
