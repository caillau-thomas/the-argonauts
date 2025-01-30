import styled from 'styled-components'

////////////////
//// ABOUT ////
//////////////

export const AboutCard = styled.div`
  text-align: center;
  min-height: 40vh;
`
///////////////
// SECTIONS //
/////////////

export const SectionCard = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: var(--space-2xl);
  padding: var(--space-m);
  border-radius: 16px;

  color: var(--color-primary);
  border: 2px solid var(--color-border);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.661);
  transition: all 0.25s ease-in-out;
  backdrop-filter: blur(10px);
`
export const HeadingCard = styled.div`
padding-top: var(--space-m);
  width: 100%;
  text-align: center;
`

export const SectionsCardHeading = styled.div`
  font-size: var(--font-size-large);
  font-weight: 400;
  text-align: center;
  justify-content: center;
`

export const ContentCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: stretch;
  gap: var(--space-m);
  flex-wrap: wrap;
  margin: var(--space-m);

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
