import styled from 'styled-components'

export const H1 = styled.h1`
  font-weight: 400;
  font-size: var(--font-size-3xl);
  letter-spacing: var(--space-3xs);
  text-shadow: var(--shadow-text);
  color: var(--color-primary);
  margin: 0;
  
  @media (max-width: 1080px) {
    font-weight: 400;
    font-size: var(--font-size-1xl);
    letter-spacing: 0;
  }
`
export const H2 = styled.h1`
  font-weight: 400;
  color: var(--color-primary);
  font-size: var(--font-size-1xl);
  letter-spacing: var(--space-3xs);
  text-shadow: var(--shadow-text);
  margin: 0;

  @media (max-width: 1080px) {
    font-weight: 400;
    font-size: var(--font-size-1l);
    letter-spacing: var(--space-3xs);
  }
`

export const H3 = styled.h1`
  font-weight: 400;
  color: var(--color-primary);
  font-size: var(--font-size-xl);
  letter-spacing: var(--space-3xs);
  text-shadow: var(--shadow-text);
  margin: 0;

  @media (max-width: 1080px) {
    font-weight: 400;
    font-size: var(--font-size-large);
  }
`

export const H4 = styled.h1`
  font-weight: 200;
  font-size: var(--font-size-xl);
  letter-spacing: var(--space-3xs);
  color: var(--color-tertiary);
  text-shadow: var(--shadow-text);

  @media (max-width: 1080px) {
    font-weight: 200;
    font-size: var(--font-size-2m);
  }
`
export const H5 = styled.h1`
  font-weight: 200;
  font-size: var(--font-size-1l);
  letter-spacing: var(--space-3xs);
  color: var(--color-tertiary);
  text-shadow: var(--shadow-text);
  margin: 0;

  @media (max-width: 1080px) {
    font-weight: 200;
    font-size: var(--font-size-2m);
  }
`
export const H6 = styled.h1`
  font-weight: 300;
  font-size: var(--font-size-1l);
  color: var(--color-primary);
  margin: 0;
  @media (max-width: 1080px) {
    font-weight: 300;
    font-size: var(--font-size-2m);
  }
`

export const H7 = styled.h2`
  font-weight: 300;
  font-size: var(--font-size-xl);
  color: var(--color-primary);
  margin: 0;
  @media (max-width: 1080px) {
    font-weight: 300;
    font-size: var(--font-size-1l);
  }
`