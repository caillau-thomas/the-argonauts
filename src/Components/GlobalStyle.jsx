import styled from 'styled-components'

export const H1 = styled.h1`
  font-weight: 400;
  font-size: var(--font-size-3xl);
  text-shadow: var(--shadow-text);
  color: var(--color-primary);
  letter-spacing: var(--space-3xs);
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
  text-shadow: var(--shadow-text);
  margin: 0;

  @media (max-width: 1080px) {
    font-weight: 400;
    font-size: var(--font-size-1l);
  }
`

export const H3 = styled.h1`
  font-weight: 400;
  color: var(--color-primary);
  font-size: var(--font-size-xl);
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
  color: var(--color-tertiary);
  text-shadow: var(--shadow-text);
  letter-spacing: var(--space-3xs);
  
  @media (max-width: 1080px) {
    font-weight: 200;
    font-size: var(--font-size-2m);
    letter-spacing: 0;
  }
`
export const H5 = styled.h1`
  font-weight: 200;
  font-size: var(--font-size-1l);
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
  font-size: var(--font-size-large);
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
export const P = styled.h3`
  font-weight: 300;
  font-size: var(--font-size-large);
  color: var(--color-primary);
  margin: 0;
  text-align: justify;
  @media (max-width: 1080px) {
    font-weight: 300;
    font-size: var(--font-size-2m);
  }
`
export const H8 = styled.h1`
  font-weight: 400;
  margin: 0;
  font-size: var(--font-size-2m);
  color: var(--color-tertiary);
  text-shadow: var(--shadow-text);

  @media (max-width: 1080px) {
    font-weight: 200;
    font-size: var(--font-size-medium);
  }
`
export const H9 = styled.h1`
  font-weight: 400;
  margin: 0;
  color: var(--color-primary);
  font-size: var(--font-size-1xl);
  text-shadow: var(--shadow-text);

  @media (max-width: 1080px) {
    font-weight: 400;
    font-size: var(--font-size-xl);
  }
`
