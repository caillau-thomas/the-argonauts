import styled from 'styled-components'


export const ContentCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-m);
  flex-wrap: wrap;
  color: var(--color-secondary);
  
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const SectionCard = styled.div`
  background-color: var(--color-primary);
  padding: var(--space-m);
  flex: 1;
  height: 60vh; 
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.210);
  transition: all 0.25s ease-in-out;
`

export const AboutCard = styled.div`
  padding: var(--space-m);
  text-align: center;
  flex: 1;
  height: 30vh; 
`

