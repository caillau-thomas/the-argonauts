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
            Fondée en 2015, nous sommes spécialisée dans la sécurité et le sauvetage.
          </P>
          <P>
            Afin de mener à bien nos missions, nous avons structuré notre organisation en plusieurs sections, chacune couvrant des activités essentielles à notre bon fonctionnement.
          </P>
          <P>
            Être un Argonauts ne se limite donc pas à nos activités principales, c’est appartenir à un groupe aux activités variées, unies par un engagement commun.
          </P>
        </AboutCard>
      </Layout>
    </Container>
  )
}

export default About
