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

const LandingHeading = styled.div`
  font-size: xx-large;
`

const DivHeading = styled.div`
  font-size: xx-large;
  width: 30%;
  text-align: left;

  background-color: var(--color-secondary);
  border-top-right-radius: 8px;
  border-bottom-right-radius:8px; 
  padding: var(--space-2xs);
  
`

const Content = styled.div`
  font-size: medium;
  display: flex;
`

const LandingSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background-image: url("https://image.noelshack.com/fichiers/2025/04/3/1737581775-imgsc.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

const SectionAbout = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 100px);
  scroll-margin-top: 100px;
  justify-content: center;
  gap: var(--space-m);
  padding: var(--space-l);

  color: var(--color-secondary);
  background-image: url(${Squadron422});
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
        <LandingHeading>
          ARGONAUTS
        </LandingHeading>
      </LandingSection>
      <SectionAbout id="Organisation">
        <AboutCard>
          <SectionsCardHeading>SECTION INDUSTRIEL & LOGISTIQUE</SectionsCardHeading>
          <Content>
            EXTRAIRE DES RESSOURCES CONDUIRE LES CHAINES LOGISTIQUES BATIR NOS
            INFRASTRUCTURES
          </Content>
        </AboutCard>
      </SectionAbout>
      <SectionSection id="Sections">
        <HeadingCard>
          <DivHeading>NOS SECTIONS</DivHeading>
        </HeadingCard>
        <ContentCard>
          <SectionCard className="SectionCard">
            <SectionsCardHeading>SECTION INDUSTRIEL & LOGISTIQUE</SectionsCardHeading>
            <Content>
              EXTRAIRE DES RESSOURCES <br /> CONDUIRE LES CHAINES LOGISTIQUES <br /> BATIR NOS
              INFRASTRUCTURES
            </Content>
          </SectionCard>
          <SectionCard className="SectionCard">
            <SectionsCardHeading>SECTION DE REPONSE A INCIDENT</SectionsCardHeading>
            <Content>
              ESCORTER NOS CONVOIS <br /> REPONDRE AUX BALISE DE DÉTRESSE DEFENDRE NOS
              ALLIÉS
            </Content>
          </SectionCard>
          <SectionCard className="SectionCard">
            <SectionsCardHeading>SECTION DE SOUTIEN OPÉRATIONNEL</SectionsCardHeading>
            <Content>ASSURER LA MAINTENANCE DE NOTRE FLOTTE <br /> SECOURS AUX BLESSES</Content>
          </SectionCard>
        </ContentCard>
      </SectionSection>
      <SectionEnrol>
        <EnrolCard>
          <LandingHeading>
          ARGONAUTS
          </LandingHeading>
        </EnrolCard>
      </SectionEnrol>
    </Body>
  )
}
