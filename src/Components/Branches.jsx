import styled from 'styled-components'

import Structure from '/assets/Sections/Structure.png'

import { AboutCard } from './CardStyledComponents'
import { H6 } from './GlobalStyle'


const Layout = styled.div`
  display: grid;
  grid-template-columns: 6fr;
  grid-template-rows: repeat(2, max-content);
  width: 80%;
  padding: var(--space-s) var(--space-m);
  & > .title {
    grid-column: 1 / -1;
    text-align: center;
  }
  
  & > .description {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    
    & > img {
      width: 100%;
      height: auto;
    }
  }
  
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    width: 100%;
    justify-content: center;
    padding: var(--space-s) var(--space-m) var(--space-s) var(--space-m);
  }
`

export const Branches = () => {
  return (
    <Layout>
      <AboutCard>
        <H6 style={{ textAlign: 'justify' }}>
          Notre organisation se structure en deux sections complémentaires : 
          le section d'interventions (S.I), dédiée aux opérations, et la section d’appui, 
          qui garantit notre autonomie. Chacune regroupe des groupe spécialisées, 
          organisées par boucles de gameplay. <br /><br />
        </H6>
      </AboutCard>
      <div className="description">
        <img src={Structure} alt={Structure} />
      </div>
    </Layout>
  )
}
