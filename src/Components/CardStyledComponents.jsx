import styled from 'styled-components'

////////////////
//// ABOUT ////
//////////////

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 25px;

  color: var(--color-primary);
`

///////////////
/// ENROLL ///
/////////////

export const RulesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: var(--space-m);
  flex-direction: row;
  padding: var(--space-m);
  margin: var(--space-m);

  color: var(--color-primay);
  backdrop-filter: blur(10px);
  border: 0.5px solid var(--color-border);
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.191);

  @media (max-width: 1024px) {
    flex-direction: column;
  }`

///////////////
// SECTIONS //
/////////////


// Les Cards de sections (SRI, SIL, SA)
export const SectionsCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: var(--space-2xl);
  padding: var(--space-2xl);
  border-radius: 16px;

  color: var(--color-primary);
  transition: all 0.25s ease-in-out;
`
export const CardHeading = styled.div`
  padding-top: var(--space-m);
  width: 100%;
  text-align: center;

`

// Titre des cards de section ( SRI, SIL, SA)
export const SectionsCardSubHeading = styled.div` 
  font-size: var(--font-size-large);
  font-weight: 400;
  text-align: center;
  justify-content: center;
`
// Container des cards de section ( SRI, SIL, SA)
export const SectionsCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: stretch;
  gap: var(--space-m);
  flex-wrap: wrap;
  margin: var(--space-m);
  z-index: 2;

  color: var(--color-secondary);
  backdrop-filter: blur(10px);
  border: 0.5px solid var(--color-border);
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.191);

  @media (max-width: 1024px) {
    flex-direction: column;
  }
  
`