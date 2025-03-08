import styled from 'styled-components'

import Squadron422 from '../assets/Backgrounds/squadron-42-2.jpg'
import { AboutCard } from './CardStyledComponents'
import { H8,H9, P } from './GlobalStyle'

/////////////////////////////////////////////////

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: var(--space-s) var(--space-m);
  @media (max-width: 1080px) {
    padding: var(--space-s) var(--space-l);
  }
`

export const Layout = styled.div`
  display: grid;
  grid-template-columns: 4fr 2fr;
  gap: var(--space-s);
  @media (max-width: 1080px) {
    gap: var(--space-l);
    grid-template-columns: 1fr;
    grid-template-rows: 3fr 1fr;
  }
`
export const HeadingContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
`
export const Side = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const Left = styled.div`
  display: flex;
  flex-direction: column;
`
export const Right = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: left;
  line-height: 1;
`

/////////////////////////////////////////////////


const About = () => {
  return (
    <Container>
      <HeadingContainer>
        <Side>
          <H9>AGIR</H9>
        </Side>
        <Side>
          <Left>
            <H8>POUR PROTEGER</H8>
          </Left>
          <Right>
            <H8>POUR SAUVER</H8>
          </Right>
        </Side>
      </HeadingContainer>
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
        <AboutCard style={{
          backgroundImage: `url(${Squadron422})`, height: '100%', width: '100%', backgroundSize: 'cover', backgroundPosition: 'center', 
        }}/>
      </Layout>
    </Container>
  )
}

export default About
