import styled from 'styled-components'

import Squadron421 from '../../assets/Backgrounds/squadron-42-1.jpg'
import Squadron422 from '../../assets/Backgrounds/squadron-42-2.jpg'
import Squadron423 from '../../assets/Backgrounds/squadron-42-3.jpg'
import Video from '../../assets/videoplayback.mp4'
import {
  Card,
  EnrolContentContainer,
  SectionsCard,
  SectionsCardContainer,
  SectionsCardSubHeading,
} from '../../Components/CardStyledComponents'

const Body = styled.div`
  --scroll-margin-top: 100px;
  @media (max-width: 1024px) {
    --scroll-margin-top: 80px;
  }
`

//////////////
// LANDING //
////////////

const LandingSection = styled.div`
  height: 100vh;
  position: relative;
  z-index: -1;

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

const LandingFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  background-color: var(--color-filter);

  @media (max-width: 1024px) {
    
  }
`

const LandingHeading = styled.div`
  font-size: var(--font-size-2xl);
  font-weight: 500;
  letter-spacing: var(--space-2xs);

  text-shadow: var(--shadow-text);

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

  text-shadow: var(--shadow-text);

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
  height: calc(100vh - var(--scroll-margin-top));
  scroll-margin-top: var(--scroll-margin-top);

  color: var(--color-secondary);
  background-image: url(${Squadron422});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const AboutFilter = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-m);
  align-items: center;
  justify-items: center;
  min-height: calc(100vh - 100px);

  background-color: var(--color-filter);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    scroll-margin-top: 0px;
  }
`

//////////////
// SECTION //
////////////

const SectionSection = styled.div`
  min-height: calc(100vh - var(--scroll-margin-top));
  scroll-margin-top: var(--scroll-margin-top);

  color: var(--color-primary);
  background-image: url(${Squadron421});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:has(.Card:hover) .Card:not(:hover) {
    opacity: 0.4;
  }
`

const SectionsFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 100px);
  justify-content: center;
  gap: var(--space-m);

  background-color: var(--color-filter);

  @media (max-width: 1024px) {
    flex-direction: column;
    scroll-margin-top: 0px;
  }
`

const Content = styled.div`
  font-size: var(--font-size-2m);
  font-weight: 300;
  display: flex;
  text-align: justify;
  justify-content: center;
  text-shadow: var(--shadow-text);
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
  height: calc(100vh - var(--scroll-margin-top));
  scroll-margin-top: var(--scroll-margin-top);

  color: var(--color-secondary);
  background-image: url(${Squadron423});
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const EnrolFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh - 100px);
  justify-content: center;
  gap: var(--space-m);
  padding: var(--space-l) var(--space-2m);

  background-color: var(--color-filter);

  @media (max-width: 1024px) {
    flex-direction: column;
    scroll-margin-top: 0px;
  }
`

//////////////
// GENERIC //
////////////

const Heading = styled.div`
  font-size: var(--font-size-1xl);
  font-weight: 400;
  letter-spacing: var(--space-2xs);
  text-shadow: var(--shadow-text);

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
  text-shadow: var(--shadow-text);
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
  text-shadow: var(--shadow-text);
  color: var(--color-tertiary);

  @media (max-width: 1024px) {
    font-size: var(--font-size-1m);
    font-weight: 300;
    letter-spacing: var(--space-3xs);
  }
`
export const Button = styled.button`
  padding: var(--space-2xs);
  background-color: var(--color-tertiary);
  border: none;
  border-radius: 2px;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.3s;
  color: var(--color-secondary);
  font-size: var(--font-size-1m);
  font-family: var(--font-primary);
`

export const Home = () => {
  return (
    <Body>
      <LandingSection>
        <LandingFilter>
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
          <Card>
            <LandingHeading>ARGONAUTS</LandingHeading>
            <LandingSubHeading>AU DELA DU VERS</LandingSubHeading>
          </Card>
        </LandingFilter>
      </LandingSection>
      <AboutSection id="Organisation">
        <AboutFilter>
          <Card>
            <Heading>NOS MISSION</Heading>
            <SubHeadingContainer>
              <SubHeading>INTERVENIR POUR PROTEGER</SubHeading>
              <SubHeading>AGIR POUR SAUVER</SubHeading>
            </SubHeadingContainer>
            <Content>QUELS QU'EN SOIENT LES RISQUES</Content>
          </Card>
          <Card>
            <Card>10 MEMBRES</Card>
            <Card>+50 INTERVENTIONS</Card>
            <Card>+100 VAISSEAUX</Card>
          </Card>
        </AboutFilter>
      </AboutSection>
      <SectionSection id="Sections">
        <SectionsFilter>
          <Card>
            <Heading>NOS SECTIONS</Heading>
            <SubHeading>
              DES MISSIONS VARIÉES POUR UN ENGAGEMENT COMMUN
            </SubHeading>
          </Card>
          <SectionsCardContainer>
            <SectionsCard className="Card">
              <SectionsCardSubHeading>
                SECTION INDUSTRIEL & LOGISTIQUE
              </SectionsCardSubHeading>
              <Content>
                À LA RECHERCHE DE CHALLENGES LOGISTIQUES ET DE DÉFIS
                INDUSTRIELS, NOUS ASSURONS L'AUTOSUFFISANCE DES ARGONAUTS ET
                BÂTISSONS LEUR AVENIR.
              </Content>
              <SubContentContainer>
                <SubContent>EXTRACTION / TRAITEMENT DES RESSOURCES</SubContent>
                <SubContent>COMMERCE</SubContent>
                <SubContent>CHAINES LOGISTIQUES</SubContent>
                <SubContent>BASE BUILDING</SubContent>
              </SubContentContainer>
            </SectionsCard>
            <SectionsCard className="Card">
              <SectionsCardSubHeading>
                SECTION DE REPONSE A INCIDENT
              </SectionsCardSubHeading>
              <Content>
                À LA RECHERCHE D'ADRÉNALINE ET D'EXCELLENCE, NOUS ASSURONS LA
                SÉCURITÉ DES ARGONAUTS AINSI QUE CELLE DES CITOYENS DU VERSE.
              </Content>
              <SubContentContainer>
                <SubContent>ESCORTE</SubContent>
                <SubContent>PROTECTION RAPPROCHE</SubContent>
                <SubContent>SAUVETAGE</SubContent>
              </SubContentContainer>
            </SectionsCard>
            <SectionsCard className="Card">
              <SectionsCardSubHeading>SECTION D'APPUI</SectionsCardSubHeading>
              <Content>
                NOUS ASSISTONS LES DIFFÉRENTES SECTIONS DES ARGONAUTS SUR LES
                PLANS TECHNIQUE ET MÉDICAL, AFIN D’ASSURER LEUR BON
                FONCTIONNEMENT.
              </Content>
              <SubContentContainer>
                <SubContent>EQUIPE D'INGENIEURIE</SubContent>
                <SubContent>EQUIPES MEDICALES</SubContent>
              </SubContentContainer>
            </SectionsCard>
          </SectionsCardContainer>
        </SectionsFilter>
      </SectionSection>
      <EnrolSection>
        <EnrolFilter>
          <Card>
            <Heading>ET POURQUOI PAS VOUS</Heading>
            <SubHeadingContainer>
              <SubHeading>NOUS AVONS DES POSTES A POURVOIR</SubHeading>
            </SubHeadingContainer>
            <EnrolContentContainer>
              <Content>
                PEU IMPORTE VOS VAISSEAUX OU VOTRE EXPÉRIENCE DE JEU, NOUS
                SOMMES PRÊTS À VOUS ACCUEILLIR PARMI NOUS !
              </Content>
              <Content>
                <Button>NOUS REJOINDRE</Button>
              </Content>
            </EnrolContentContainer>
          </Card>
        </EnrolFilter>
      </EnrolSection>
    </Body>
  )
}
