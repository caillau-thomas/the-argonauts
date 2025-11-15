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
            Fondée en 2953, nous sommes une organisation spécialisée dans la sécurité et le sauvetage.
            <br /><br />Notre efficacité repose sur la complémentarité de nos rôles, unissant l’expertise opérationnelle, 
            logistique et technique au service d’un même engagement.<br /><br /> Fidèles à notre vocation, nous assurons 
            la sécurité d’organisations partenaires, leur permettant de mener à bien leurs missions, même au travers des pires tempêtes.
          </P>
        </AboutCard>
      </Layout>
    </Container>
  )
}

export default About
