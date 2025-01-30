import styled from 'styled-components'

import Squadron421 from '../../assets/Backgrounds/squadron-42-1.jpg'
import Squadron422 from '../../assets/Backgrounds/squadron-42-2.jpg'
import Squadron423 from '../../assets/Backgrounds/squadron-42-3.jpg'
import {
  AboutCard,
  Card,
  CardHeading,
  CardSubHeading,
  EnrolCard,
  SectionCards,
} from '../../Components/CardStyledComponents'
import { Button } from '../../Components/HeaderStyledComponents'

const Body = styled.div``

//////////////
// LANDING //
////////////

const LandingSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background-color: #000000c2;
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
  color: var(--color-tertiary);

  @media (max-width: 1024px) {
    font-size: var(--font-size-large);
    font-weight: 200;
    letter-spacing: var(--space-3xs);
  }
`

//////////////
/// ABOUT ///
////////////

const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-m);
  align-items: center;
  height: calc(100vh - 100px);
  scroll-margin-top: 100px;
  justify-items: center;
  padding: var(--space-l) var(--space-2m);

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

//////////////
// SECTION //
////////////

const SectionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 100px);
  scroll-margin-top: 100px;
  justify-content: center;
  padding: var(--space-l) var(--space-2m);
  gap: var(--space-m);

  color: var(--color-primary);
  background-image: url(${Squadron421});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:has(.Card:hover) .Card:not(:hover) {
    opacity: 0.4;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    min-height: 100vh;
    scroll-margin-top: 0px;
  }
`

const Content = styled.div`
  font-size: var(--font-size-2m);
  font-weight: 300;
  display: flex;
  text-align: justify;
  justify-content: center;
`

const SubContent = styled.div`
  font-size: var(--font-size-1m);
  color: var(--color-tertiary);
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: center;
  justify-content: center;
`

const SubContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`

////////////
// ENROL //
//////////


const EnrolSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-m);
  padding: var(--space-l) var(--space-2m);
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

//////////////
// GENERIC //
////////////


const Div = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-primary);
  justify-content: center;
  text-align: center;
  gap: 25px;
`


const Heading = styled.div`
  font-size: var(--font-size-1xl);
  font-weight: 400;
  letter-spacing: var(--space-2xs);
  text-shadow: 0px 0px 10px rgb(0, 0, 0);

  @media (max-width: 1024px) {
    font-size: var(--font-size-1xl);
    font-weight: 400;
    letter-spacing: var(--space-1xs);
  }
`

const SubHeadingContainer = styled.div`
  font-size: var(--font-size-large);
  font-weight: 400;
  letter-spacing: var(--space-2xs);
  text-shadow: 0px 0px 10px rgb(0, 0, 0);
  color: var(--color-tertiary);

  @media (max-width: 1024px) {
    font-size: var(--font-size-1m);
    font-weight: 300;
    letter-spacing: var(--space-3xs);
  }
`

const SubHeading = styled.div`
  font-size: var(--font-size-large);
  font-weight: 400;
  letter-spacing: var(--space-2xs);
  text-shadow: 0px 0px 10px rgb(0, 0, 0);
  color: var(--color-tertiary);

  @media (max-width: 1024px) {
    font-size: var(--font-size-1m);
    font-weight: 300;
    letter-spacing: var(--space-3xs);
  }
`

////////////////
// VIDEO BGC //
//////////////

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
        <Div>
          <LandingHeading>ARGONAUTS</LandingHeading>
          <LandingSubHeading>AU DELA DU VERS</LandingSubHeading>
        </Div>
      </LandingSection>
      <AboutSection id="Organisation">
        <AboutCard>
          <Div>
            <Heading>NOS MISSION</Heading>
            <SubHeadingContainer>
              <SubHeading>INTERVENIR POUR PROTEGER</SubHeading>
              <SubHeading>AGIR POUR SAUVER</SubHeading>
            </SubHeadingContainer>
            <Content>
              QUELS QU'EN SOIENT LES RISQUES
            </Content>
          </Div>
        </AboutCard>
        <AboutCard>
          <SectionCards>
            <Card>
              <Div>10 MEMBRES</Div>
              <Div>+50 INTERVENTIONS</Div>
              <Div>+100 VAISSEAUX</Div>
            </Card>
          </SectionCards>
        </AboutCard>
      </AboutSection>
      <SectionSection id="Sections">
        <CardHeading>
          <Heading>NOS SECTIONS</Heading>
          <SubHeading>
            DES MISSIONS VARIÉES POUR UN ENGAGEMENT COMMUN
          </SubHeading>
        </CardHeading>
        <SectionCards>
          <Card className="Card">
            <CardSubHeading>
              SECTION INDUSTRIEL & LOGISTIQUE
            </CardSubHeading>
            <Content>
              À LA RECHERCHE DE CHALLENGES LOGISTIQUES ET DE DÉFIS INDUSTRIELS,
              NOUS ASSURONS L'AUTOSUFFISANCE DES ARGONAUTS ET BÂTISSONS LEUR
              AVENIR.
            </Content>
            <SubContentContainer>
              <SubContent>EXTRACTION / TRAITEMENT DES RESSOURCES</SubContent>
              <SubContent>COMMERCE</SubContent>
              <SubContent>CHAINES LOGISTIQUES</SubContent>
              <SubContent>BASE BUILDING</SubContent>
            </SubContentContainer>
          </Card>
          <Card className="Card">
            <CardSubHeading>
              SECTION DE REPONSE A INCIDENT
            </CardSubHeading>
            <Content>
              À LA RECHERCHE D'ADRÉNALINE ET D'EXCELLENCE, NOUS ASSURONS LA
              SÉCURITÉ DES ARGONAUTS AINSI QUE CELLE DES CITOYENS DU VERSE.
            </Content>
            <SubContentContainer>
              <SubContent>ESCORTE</SubContent>
              <SubContent>PROTECTION RAPPROCHE</SubContent>
              <SubContent>SAUVETAGE</SubContent>
            </SubContentContainer>
          </Card>
          <Card className="Card">
            <CardSubHeading>SECTION D'APPUI</CardSubHeading>
            <Content>
              NOUS ASSISTONS LES DIFFÉRENTES SECTIONS DES ARGONAUTS SUR LES
              PLANS TECHNIQUE ET MÉDICAL, AFIN D’ASSURER LEUR BON
              FONCTIONNEMENT.
            </Content>
            <SubContentContainer>
              <SubContent>EQUIPE D'INGENIEURIE</SubContent>
              <SubContent>EQUIPES MEDICALES</SubContent>
            </SubContentContainer>
          </Card>
        </SectionCards>
      </SectionSection>
      <EnrolSection>
        <EnrolCard>
          <Div>
            <Heading>ET POURQUOI PAS VOUS</Heading>
            <SubHeadingContainer>
              <SubHeading>
                NOUS AVONS DES POSTES A POURVOIR
              </SubHeading>
              <SubHeading>
                ALORS POURQUOI NE PAS TENTER L'AVENTURE ?
              </SubHeading>
            </SubHeadingContainer>
            <Content>
              PEU IMPORTE VOS VAISSEAUX OU VOTRE EXPÉRIENCE DE JEU, NOUS
              SOMMES PRÊTS À VOUS ACCUEILLIR PARMI NOUS !
            </Content>
            <Content>
              <Button>NOUS REJOINDRE</Button>
            </Content>
          </Div>
        </EnrolCard>
      </EnrolSection>
    </Body>
  )
}
