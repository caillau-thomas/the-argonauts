import styled from 'styled-components'

import { AboutCard } from './CardStyledComponents'
import { P } from './GlobalStyle'

/////////////////////////////////////////////////

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
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
            Notre vocation est de protéger, soutenir et secourir les citoyens du Verse, quels qu’en soient les risques, même à travers les pires tempêtes.
            <br /><br />
            Mais être un Argonauts ne se limite pas au combat ou au sauvetage.
            Au-delà des opérations de terrain, notre efficacité repose sur des rôles civils, industriels et logistiques, indispensables à la préparation, au soutien et à la pérennité de nos activités.
            <br /><br />
            Notre organisation adopte ainsi une approche multirôle, mobilisant l’ensemble des boucles de gameplay au service d’un engagement commun.
            C’est cette complémentarité qui fait notre force et nous permet d’accompagner et de soutenir les autres.
          </P>
        </AboutCard>
      </Layout>
    </Container>
  )
}

export default About
