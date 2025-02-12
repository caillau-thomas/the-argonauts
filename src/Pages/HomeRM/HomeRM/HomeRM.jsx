import styled from 'styled-components'

import Squadron421 from '../../../assets/Backgrounds/squadron-42-1.jpg'
import Squadron422 from '../../../assets/Backgrounds/squadron-42-2.jpg'
import Squadron423 from '../../../assets/Backgrounds/squadron-42-3.jpg'
import Video from '../../../assets/videoplayback.mp4'
import {
  PrimaryCard,
  PrimaryCardContent,
  PrimaryCardList,
  PrimaryCardListElement,
  PrimaryCardSubTitle,
  PrimaryCardTitle,
  SecondaryCard,
  SecondaryCardList,
  SecondaryCardSubTitle,
  SecondaryCardTitle,
  TertiaryCard,
  TertiaryCardTitle,
} from '../../../Components/CardStyledComponents'
import Offres from '../../../Components/Offres'

const Body = styled.div`
  --scroll-margin-top: 100px;
  @media (max-width: 1080px) {
    --scroll-margin-top: 80px;
  }
`

////////////////////////////////////////
const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`
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
const Div = styled.div`
  min-height: calc(100vh - var(--scroll-margin-top));
  scroll-margin-top: var(--scroll-margin-top);
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
////////////////////////////////////////

const Landing = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  background-color: var(--color-filter);
  padding: var(--space-2xl);
  @media (max-width: 1080px) {
    padding: var(--space-l);
  }
`
////////////////////////////////////////

const About = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  min-height: calc(100vh - var(--scroll-margin-top));
  background-color: var(--color-filter);

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`
const AboutColumns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--color-filter);
  padding: var(--space-2xl);

  @media (max-width: 1080px) {
    flex-direction: column;
    padding: var(--space-l);
  }
`
////////////////////////////////////////

const Sections = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  min-height: calc(100vh - var(--scroll-margin-top));
  background-color: var(--color-filter);

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`
const SectionsColumns = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: var(--color-filter);
  padding: var(--space-2xl);

  @media (max-width: 1080px) {
    flex-direction: column;
    padding: var(--space-l);
  }
`
////////////////////////////////////////

const Join = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  min-height: calc(100vh - var(--scroll-margin-top));
  background-color: var(--color-filter);

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`
const JoinColumns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color-filter);
  padding: var(--space-2xl);

  @media (max-width: 1080px) {
    flex-direction: column;
    padding: var(--space-l);
  }
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

export const HomeRM = () => {
  return (
    <Body>
      <Layout>
        <LandingDiv id="Landing">
          <video autoPlay loop muted>
            <source src={Video} type="video/mp4" />
          </video>
          <Landing>
            <PrimaryCard>
              <PrimaryCardTitle>ARGONAUTS</PrimaryCardTitle>
              <PrimaryCardSubTitle>NOTRE MISSION COMMENCE</PrimaryCardSubTitle>
              <PrimaryCardSubTitle>
                LÀ OÙ VOTRE INSTINCT VOUS DIT DE FUIR
              </PrimaryCardSubTitle>
            </PrimaryCard>
          </Landing>
        </LandingDiv>
        <Div
          id="Organisation"
          style={{ backgroundImage: `url(${Squadron422})` }}
        >
          <About>
            <AboutColumns>
              <PrimaryCard>
                <SecondaryCardTitle>NOS MISSIONS</SecondaryCardTitle>
                <SecondaryCardSubTitle>
                  INTERVENIR POUR PROTEGER
                </SecondaryCardSubTitle>
                <SecondaryCardSubTitle>AGIR POUR SAUVER</SecondaryCardSubTitle>
                <PrimaryCardContent>
                  SPÉCIALISÉ DANS LA RÉPONSE À INCIDENTS, NOUS REALISONS
                  NOTAMENT DES OPERATIONS D'ESCORTE, DE COUVERTURE AERIENNE, DE
                  PROTECTION AU SOL, DE RECONNAISSANCE ET DE SAUVETAGE
                </PrimaryCardContent>
              </PrimaryCard>
            </AboutColumns>
            <AboutColumns>
              <PrimaryCard>
                <SecondaryCardTitle>NOS MISSIONS</SecondaryCardTitle>
                <SecondaryCardSubTitle>
                  INTERVENIR POUR PROTEGER
                </SecondaryCardSubTitle>
                <SecondaryCardSubTitle>AGIR POUR SAUVER</SecondaryCardSubTitle>
                <PrimaryCardContent>
                  SPÉCIALISÉ DANS LA RÉPONSE À INCIDENTS, NOUS REALISONS
                  NOTAMENT DES OPERATIONS D'ESCORTE, DE COUVERTURE AERIENNE, DE
                  PROTECTION AU SOL, DE RECONNAISSANCE ET DE SAUVETAGE
                </PrimaryCardContent>
              </PrimaryCard>
            </AboutColumns>
          </About>
        </Div>
        <Div id="Sections" style={{ backgroundImage: `url(${Squadron421})` }}>
          <Sections>
            <SectionsColumns>
              <PrimaryCard>
                <SecondaryCardTitle>NOS SECTIONS</SecondaryCardTitle>
                <SecondaryCardSubTitle>
                  DES MISSIONS VARIÉES POUR UN ENGAGEMENT COMMUN
                </SecondaryCardSubTitle>
                <PrimaryCardContent>
                LA STRUCTURE INTERNE DE L'ORGANISATION EST DIVISÉE EN TROIS SECTIONS
                </PrimaryCardContent>
                <PrimaryCardContent>
                CHACUNE PERMETTANT DE SUBVENIR À UN BESOIN SPÉCIFIQUE.
                </PrimaryCardContent>
              </PrimaryCard>
            </SectionsColumns>
            <SectionsColumns>
              <SecondaryCard>
                <TertiaryCard>
                  <TertiaryCardTitle>
                    SECTION DE REPONSE A INCIDENT
                  </TertiaryCardTitle>
                  <PrimaryCardContent>
                  LA SRI EST NOTRE FORCE D'INTERVENTION. ELLE RÉALISE DES MISSIONS DE SÉCURITÉ 
                  ET DE SAUVETAGE ET INTERVIENT NOTAMMENT À LA DEMANDE D'AUTRES ORGANISATIONS. 
                  SES MISSIONS SONT:
                  </PrimaryCardContent>
                  <PrimaryCardList>
                    <PrimaryCardListElement>L'ESCORTE</PrimaryCardListElement>
                    <PrimaryCardListElement>LA COUVERTURE AERIENNE</PrimaryCardListElement>
                    <PrimaryCardListElement>LA PROTECTION AU SOL</PrimaryCardListElement>
                    <PrimaryCardListElement>LE SAUVETAGE</PrimaryCardListElement>
                  </PrimaryCardList>
                </TertiaryCard>
                <TertiaryCard>
                  <TertiaryCardTitle>
                    SECTION INDUSTRIEL & LOGISTIQUE
                  </TertiaryCardTitle>
                  <PrimaryCardContent>
                    LA SIL EST LE POUMONS QUI ALIMENTE L'ORGANISATION, SANS ELLE PAS DE RESSOURCES,
                    PAS D'ECONOMIE, PAS DE TRANSPORT NI DE CONSTRUCTION DE BASE. ELLE EST LE PIVOT DE L'ORGANOSATION.
                    SES MISSIONS SONT :
                  </PrimaryCardContent>
                  <PrimaryCardList>
                    <PrimaryCardListElement>L'EXTRACTION DE RESSOURCES</PrimaryCardListElement>
                    <PrimaryCardListElement>
                      LE TRAITEMENT DES RESSOURCES
                    </PrimaryCardListElement>
                    <PrimaryCardListElement>LE COMMERCE</PrimaryCardListElement>
                    <PrimaryCardListElement>
                      LA LOGISTIQUES
                    </PrimaryCardListElement>
                    <PrimaryCardListElement>
                      LA CONSTRUCTION DE BASES
                    </PrimaryCardListElement>
                  </PrimaryCardList>
                </TertiaryCard>
                <TertiaryCard>
                  <TertiaryCardTitle>SECTION D'APPUI</TertiaryCardTitle>
                  <PrimaryCardContent>
                    LA SA REGROUPE LES EQUIPES D'INGENIEURS ET LES EQUIPES MEDICALES. 
                    LES MEMBRES DE LA SA SONT REPARTIENT DANS LES AUTRES SECTIONS, SELON
                    LES BESOINS LEURS BESOINS. SES MISSIONS SONT:
                  </PrimaryCardContent>
                  <PrimaryCardList>
                    <PrimaryCardListElement>
                      LA REPARATION DES VAISSEAUX
                    </PrimaryCardListElement>
                    <PrimaryCardListElement>
                      LA MAINTTENACE DE LA FLOTTE
                    </PrimaryCardListElement>
                    <PrimaryCardListElement>
                      L'ASSISTANCE MEDICALE
                    </PrimaryCardListElement>
                  </PrimaryCardList>
                </TertiaryCard>
              </SecondaryCard>
            </SectionsColumns>
          </Sections>
        </Div>
        <Div id="Enroll" style={{ backgroundImage: `url(${Squadron423})` }}>
          <Join>
            <JoinColumns>
              <PrimaryCard>
                <SecondaryCardTitle>ET POURQUOI PAS VOUS</SecondaryCardTitle>
                <SecondaryCardSubTitle>
                  NOUS SOMMES PRÊTS À VOUS ACCUEILLIR PARMI NOUS PEU IMPORTE VOS
                  VAISSEAUX OU VOTRE EXPÉRIENCE EN JEU
                </SecondaryCardSubTitle>
                <SecondaryCardList>
                  <PrimaryCardContent style={{ textAlign: 'center' }}>
                    QUELQUES PREREQUIS
                  </PrimaryCardContent>
                  <PrimaryCardListElement>
                    ETRE AGÉ D'AU MOINS 20 ANS
                  </PrimaryCardListElement>
                  <PrimaryCardListElement>
                    ETRE FRANCOPHONE
                  </PrimaryCardListElement>
                  <PrimaryCardListElement>
                    N'ETRE AFFILIE A AUCUNE ORGANISATION
                  </PrimaryCardListElement>
                </SecondaryCardList>
                <PrimaryCard>
                  <Button
                    as="a"
                    href="https://www.youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NOUS REJOINDRE
                  </Button>
                </PrimaryCard>
              </PrimaryCard>
            </JoinColumns>
            <JoinColumns>
              <PrimaryCard>
                <Offres />
              </PrimaryCard>
            </JoinColumns>
          </Join>
        </Div>
      </Layout>
    </Body>
  )
}
