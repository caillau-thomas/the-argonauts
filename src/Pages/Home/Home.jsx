import styled from 'styled-components'

import Video from '../../assets/videoplayback.mp4'
import AboutComponent from '../../Components/About'
import { AnimatedCounter } from '../../Components/AnimatedCounter'
import { H1, H2, H4 } from '../../Components/GlobalStyle'
import Recrutement from '../../Components/RecrutementComponent'
import { SectionsTimeline } from '../../Components/SectionsTimeline.jsx'

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
  background-color: var(--color-background);
`
const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  min-height: calc(80vh - var(--scroll-margin-top));
`

const AboutBottom = styled.div`
  display: flex;
  min-height: 20vh;
  justify-content: space-around;
  background-color: var(--color-secondary);

  @media (max-width: 1080px) {
    flex-direction: column;
    gap: var(--space-m);
    padding: var(--space-m);
  }
`
////////////////////////////////////////

const Sections = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-height: calc(100vh - var(--scroll-margin-top));
  scroll-margin-top: var(--scroll-margin-top);
  background-color: var(--color-background);
`
const SectionsTop = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
`

const SectionsMid = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
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
  min-height: calc(100vh - 232px);
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
        <AboutContent>
          <AboutComponent />
        </AboutContent>
        <AboutBottom>
          <AnimatedCounter endNumber={10} title="MEMBRES" prefix="+" icon={<img style={{ height: '100%' }} src="/membres.png" />} />
          <AnimatedCounter endNumber={100} title="VAISSEAUX" prefix="+" icon={<img style={{ height: '100%' }} src="/vaisseau.png" />}/>
          <AnimatedCounter endNumber={50} title="OPERATIONS" prefix="+" icon={<img style={{ height: '100%' }} src="/ope.png" />}/>
        </AboutBottom>
      </About>
      <Sections id="Sections" style={{ gridTemplateRows: 'max-content 1fr' }}>
        <SectionsTop>
          <H2>
            DECOUVREZ NOS{' '}
            <span style={{ color: 'var(--color-tertiary)' }}>SECTIONS</span>
          </H2>
        </SectionsTop>
        <SectionsTimeline />
      </Sections>
      <Join id="Enrol">
        <Recrutement />
      </Join>
    </Body>
  )
}
