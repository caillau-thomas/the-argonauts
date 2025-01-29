import styled from 'styled-components'

import Squadron421 from '../../assets/Backgrounds/squadron-42-1.jpg'
import Squadron422 from '../../assets/Backgrounds/squadron-42-2.jpg'
import Squadron423 from '../../assets/Backgrounds/squadron-42-3.jpg'
import {
  AboutCard,
  ContentCard,
  EnrolCard,
  HeadingCard,
  SectionCard,
  SectionsCardHeading,
} from '../../Components/CardStyledComponents'

const Body = styled.div``

const LandingSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background-color: #000000c2;
`

const SectionContent = styled.div`
  color: var(--color-primary);
  justify-content: center;
  text-align: center;
`

const LandingHeading = styled.div`
  font-size: var(--font-size-2xl);
  font-weight: 500;
  letter-spacing: var(--space-2xs);

  @media (max-width: 1024px) {
    font-size: var(--font-size-1xl);
    font-weight: 300;
    letter-spacing: var(--space-4xs);
  }
`

const LandingSubHeading = styled.div`
  font-size: var(--font-size-large);
  font-weight: 200;
  letter-spacing: var(--space-2xs);

  @media (max-width: 1024px) {
    font-size: var(--font-size-large);
    font-weight: 200;
    letter-spacing: var(--space-4xs);
  }
`

const Content = styled.div`
  font-size: medium;
  display: flex;
`

const VideoBackgroundContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -2;
`

const VideoBackground = styled.iframe`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  pointer-events: none;
  z-index: -2;
`

const SectionAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-m);
  align-items: center;
  height: calc(100vh - 100px);
  scroll-margin-top: 100px;
  justify-items: center;
  padding: var(--space-l);

  color: var(--color-secondary);
  background-image: url(${Squadron422});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    min-height: 100vh;
    scroll-margin-top: 0px;
  }
`
const DivHeading = styled.div`
  font-size: var(--font-size-1xl);
  font-weight: 300;
  letter-spacing: var(--space-2xs);

  @media (max-width: 1024px) {
    font-size: var(--font-size-1xl);
    font-weight: 300;
    letter-spacing: var(--space-1xs);
  }
`

const AboutSubHeading = styled.div`
  font-size: var(--font-size-1m);
  font-weight: 200;
  letter-spacing: var(--space-2xs);

  @media (max-width: 1024px) {
    font-size: var(--font-size-1m);
  font-weight: 200;
  letter-spacing: var(--space-1xs);
  }
`

const SectionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 100px);
  scroll-margin-top: 100px;
  justify-content: center;

  gap: var(--space-m);

  color: var(--color-primary);
  background-image: url(${Squadron421});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:has(.SectionCard:hover) .SectionCard:not(:hover) {
    opacity: 0.4;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    min-height: 100vh;
    scroll-margin-top: 0px;
  }
`

const SectionEnrol = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-m);
  padding: var(--space-l);
  height: calc(100vh - 100px);
  scroll-margin-top: 100px;

  color: var(--color-secondary);
  background-image: url(${Squadron423});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 1024px) {
    flex-direction: column;
    min-height: 100vh;
    scroll-margin-top: 0px;
  }
`

export const Home = () => {
  return (
    <Body>
      <LandingSection>
        <VideoBackgroundContainer>
          <VideoBackground
            src="https://www.youtube.com/embed/9YpudqtiDmQ?autoplay=1&controls=0&modestbranding=1&showinfo=0&rel=0&autohide=1&mute=1&loop=1&playlist=9YpudqtiDmQ"
            title="Background YouTube Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </VideoBackgroundContainer>
        <SectionContent>
          <LandingHeading>ARGONAUTS</LandingHeading>
          <LandingSubHeading>AU DELA DU VERS</LandingSubHeading>
        </SectionContent>
      </LandingSection>
      <SectionAbout id="Organisation">
        <AboutCard>
          <SectionContent>
            <DivHeading>NOS MISSION</DivHeading>
            <AboutSubHeading>LA SECURITE</AboutSubHeading>
            <AboutSubHeading>ET LE SAUVETAGE</AboutSubHeading>
          </SectionContent>
        </AboutCard>
        <AboutCard>
          <SectionContent>
            {/* Animation representant les 3 sections */}
          </SectionContent>
        </AboutCard>
      </SectionAbout>
      <SectionSection id="Sections">
        <HeadingCard>
          <DivHeading>NOS SECTIONS</DivHeading>
        </HeadingCard>
        <ContentCard>
          <SectionCard className="SectionCard">
            <SectionsCardHeading>
              SECTION INDUSTRIEL & LOGISTIQUE
            </SectionsCardHeading>
            <Content>
              EXTRAIRE DES RESSOURCES <br /> CONDUIRE LES CHAINES LOGISTIQUES{' '}
              <br /> BATIR NOS INFRASTRUCTURES
            </Content>
          </SectionCard>
          <SectionCard className="SectionCard">
            <SectionsCardHeading>
              SECTION DE REPONSE A INCIDENT
            </SectionsCardHeading>
            <Content>
              ESCORTER NOS CONVOIS <br /> REPONDRE AUX BALISE DE DÉTRESSE
              DEFENDRE NOS ALLIÉS
            </Content>
          </SectionCard>
          <SectionCard className="SectionCard">
            <SectionsCardHeading>
              SECTION DE SOUTIEN OPÉRATIONNEL
            </SectionsCardHeading>
            <Content>
              ASSURER LA MAINTENANCE DE NOTRE FLOTTE <br /> SECOURS AUX BLESSES
            </Content>
          </SectionCard>
        </ContentCard>
      </SectionSection>
      <SectionEnrol>
        <EnrolCard></EnrolCard>
      </SectionEnrol>
    </Body>
  )
}
