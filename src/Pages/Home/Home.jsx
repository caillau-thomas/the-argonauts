import styled from 'styled-components'

import Squadron421 from '../../assets/Backgrounds/squadron-42-1.jpg'
import Squadron422 from '../../assets/Backgrounds/squadron-42-2.jpg'
import Video from '../../assets/videoplayback.mp4'
import { H1, H2, H4 } from '../../Components/GlobalStyle'
import Recrutement from '../../Components/RecrutementComponent'

const Body = styled.div`
  --scroll-margin-top: 100px;
  grid-template-columns: 1fr;
  @media (max-width: 1080px) {
    --scroll-margin-top: 80px;
  }
`

////////////////////////////////////////
const LandingDiv = styled.div`
  min-height: 100vh;
  scroll-margin-top: var(--scroll-margin-top);

  // VIDEO BACKGROUND
  video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -2;
  }
`
////////////////////////////////////////

const Landing = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: var(--space-2xl);
  justify-content: center;
  text-align: center;

  @media (max-width: 1080px) {
    padding: var(--space-l);
  }
`
////////////////////////////////////////

const About = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  scroll-margin-top: var(--scroll-margin-top);
`
const AboutTop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: calc(80vh - 50px);
  background-image: url(${Squadron422});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const AboutBottom = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(20vh - 50px);
  background-color: var(--color-secondary);
`
////////////////////////////////////////

const Sections = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr 1fr;
  min-height: calc(100vh - var(--scroll-margin-top));
  scroll-margin-top: var(--scroll-margin-top);
  background-image: url(${Squadron421});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const SectionsTop = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`
const SectionsMid = styled.div`
  display: flex;
  flex-direction: column;
`

const SectionsBottom = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`

////////////////////////////////////////

const Join = styled.div`
display: grid;
  grid-template-columns: 1fr;
  min-height: calc(100vh - var(--scroll-margin-top));
  scroll-margin-top: var(--scroll-margin-top);
  background-color: var(--color-secondary);
`
////////////////////////////////////////

export const Button = styled.button`
  padding: var(--space-2xs);
  background-color: var(--color-tertiary);
  border: none;
  z-index: 3;
  border-radius: 2px;
  font-weight: 400;
  color: var(--color-secondary);
  font-size: var(--font-size-1m);
  font-family: var(--font-primary);
  margin-top: var(--space-m);
  text-decoration: none;
  width: 200px;
  margin: 0 auto;
`

export const Home = () => {
  return (
    <Body>
      <LandingDiv id="Landing">
        <video autoPlay loop muted>
          <source src={Video} type="video/mp4" />
        </video>
        <Landing>
          <H1>ARGONAUTS</H1>
          <H4>AU DELA DU VERSE</H4>
        </Landing>
      </LandingDiv>
      <About id="Organisation">
        <AboutTop></AboutTop>
        <AboutBottom></AboutBottom>
      </About>
      <Sections id="Sections">
        <SectionsTop>
          <H2>
            DECOUVREZ NOS{' '}
            <span style={{ color: 'var(--color-tertiary)' }}>SECTIONS</span>
          </H2>
        </SectionsTop>
        <SectionsMid></SectionsMid>
        <SectionsBottom>
          <H4 style={{ color: 'var(--color-primary)' }}>
            DECOUVREZ NOS SECTIONS
          </H4>
          <H4>
            <span style={{ color: 'var(--color-primary)' }}>POUR UN </span>
            ENGAGEMENT COMMUN
          </H4>
        </SectionsBottom>
      </Sections>
      <Join id="Enrol">
        <Recrutement />
      </Join>
    </Body>
  )
}
