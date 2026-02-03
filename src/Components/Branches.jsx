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
    padding: var(--space-s) var(--space-m) var(--space-s) var(--space-xs);
  }
`

export const Branches = () => {
  return (
    <Layout>
      <AboutCard>
        <H6>
          Notre organisation est divisée en deux branches, la branche Réponse à incidents, 
          qui mène les missions de sécurité et de sauvetage, et la branche Soutien logistique, 
          qui assure notre autonomie. Chacune regroupe différentes boucles de gameplay réparties 
          en groupes.<br /><br />
        </H6>
      </AboutCard>
      <div className="description">
        <img src={Structure} alt={Structure} />
      </div>
    </Layout>
  )
}
