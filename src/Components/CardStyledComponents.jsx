import styled from 'styled-components'

////////////////
//// ABOUT ////
//////////////

export const AboutCard = styled.div`
  padding: var(--space-m);
  text-align: center;
  flex: 1;
  height: 30vh; 
`
///////////////
// SECTIONS //
/////////////

export const SectionCard = styled.div`
  flex: 1;
  min-height: 20vh; 
  width: 80%;
  padding: var(--space-m);
  border-radius: 16px;

  background-color: var(--color-background); 
  color: var(--color-primary);
  border: 2px solid var(--color-border); 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.210);
  transition: all 0.25s ease-in-out;
`
export const HeadingCard = styled.div`
  width: 100%;
  text-align: left;
`

export const SectionsCardHeading = styled.div`
  font-size: xx-large;
`

export const ContentCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-m);
  flex-wrap: wrap;
  margin: var(--space-l);

  color: var(--color-secondary);
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`
////////////////
//// ENROL ////
//////////////

export const EnrolCard = styled.div`
  padding: var(--space-m);
  text-align: center;
  flex: 1;
  height: 30vh; 
`
