import styled from 'styled-components'

import { AboutCard,ContentCard,SectionCard } from '../../Components/CardStyledComponents'

const Body = styled.div``

const LandingSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background-image: url("https://image.noelshack.com/fichiers/2025/04/3/1737581775-imgsc.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
`

const SectionAbout = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 100px); 
  scroll-margin-top: 100px;
  justify-content: center;
  gap: var(--space-m);
  padding: var(--space-l);
 
  background-color: var(--color-primary);


  @media (max-width: 1024px) {
    flex-direction: column;
    min-height: 100vh ;
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
  padding: var(--space-l);
    
  color: var(--color-primary);
  background-color: var(--color-secondary);
  
  &:has(.SectionCard:hover)
  .SectionCard:not(:hover){
    opacity:0.4;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    min-height: 100vh ;
    scroll-margin-top: 0px;
  }
`

export const Home = () => {
  return (
    <Body>
      <LandingSection>
        <h1>
          ARGONAUTS
          <br />
        </h1>

        <h2>AU-DELÀ DU VERS</h2>
      </LandingSection>
      <SectionAbout id='Organisation'>
        <AboutCard>
          <h1>SECTION INDUSTRIEL & LOGISTIQUE</h1>
          <p>
            À LA RECHERCHE DE CHALLENGES LOGISTIQUES ET DE DÉFIS INDUSTRIELS,
            NOUS ASSURONS L' AUTOSUFFISANCE DES ARGONAUTS ET BÂTISSONS LEUR
            AVENIR.
          </p>
          <p>
            EXTRAIRE DES RESSOURCES CONDUIRE LES CHAINES LOGISTIQUES BATIR NOS
            INFRASTRUCTURES
          </p>
        </AboutCard>
      </SectionAbout>
      <SectionSection id='Sections'>
        <h1>NOS SECTIONS</h1>
        <ContentCard>
          <SectionCard className='SectionCard'>
            <h1>SECTION INDUSTRIEL & LOGISTIQUE</h1>
            <p>
            À LA RECHERCHE DE CHALLENGES LOGISTIQUES ET DE DÉFIS INDUSTRIELS,
            NOUS ASSURONS L' AUTOSUFFISANCE DES ARGONAUTS ET BÂTISSONS LEUR
            AVENIR.
            </p>
            <p>
            EXTRAIRE DES RESSOURCES CONDUIRE LES CHAINES LOGISTIQUES BATIR NOS
            INFRASTRUCTURES
            </p>
          </SectionCard>
          <SectionCard className='SectionCard'>
            <h1>SECTION DE REPONSE A INCIDENT</h1>
            <p>
            À LA RECHERCHE D'ADRÉNALINE ET D'EXCELLENCE, 
            NOUS ASSURONS, SI NECESSAIRE AU PERIL DE NOS VIES, 
            LA SÉCURITÉ DES NÔTRES AINSI QUE
            CELLE DES CITOYENS DU VERSE.
            </p>
            <p>
            ESCORTER NOS CONVOIS REPONDRE AUX BALISE DE 
            DÉTRESSE DEFENDRE NOS ALLIÉS
            </p>
          </SectionCard>
          <SectionCard className='SectionCard'>
            <h1>SECTION DE SOUTIEN OPÉRATIONNEL</h1>

            <p>
            NOUS ASSISTONS LES DIFFÉRENTES SECTIONS DES ARGONAUTS SUR LES PLANS
            TECHNIQUE ET MÉDICAL, AFIN D’ASSURER LEUR BON FONCTIONNEMENT.
            </p>
            <p>ASSURER LA MAINTENANCE DE NOTRE FLOTTE SECOURS AUX BLESSES</p>
          </SectionCard>
        </ContentCard>
      </SectionSection>
      
    </Body>
  )
}
