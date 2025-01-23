import styled from 'styled-components'

import { SectionCard } from '../../Components/CardStyledComponents'

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

const SectionsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--space-1xs);

  background-color: var(--color-primary);
`


const SectionSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-m);
  padding: var(--space-l);
  flex-wrap: wrap;

  background-color: var(--color-primary);

  &:has(.SectionCard:hover)
  .SectionCard:not(:hover){
    opacity:0.4;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
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
      <SectionsTitle id='Sections'>
        <h1>NOS SECTIONS</h1>
      </SectionsTitle>
      <SectionSection >
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
      </SectionSection>
    </Body>
  )
}
