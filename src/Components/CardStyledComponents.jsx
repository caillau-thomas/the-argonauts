import styled from 'styled-components'

export const PrimaryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 25px;

  color: var(--color-primary);
`
export const SecondaryCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-around;
  align-items: stretch;

  backdrop-filter: blur(10px);
  border: 0.5px solid var(--color-border);
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.191);

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`
export const TertiaryCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 25px;
  padding: var(--space-m);
  color: var(--color-primary);
`

export const PrimaryCardTitle = styled.div`
  font-weight: 400;
  font-size: var(--font-size-2xl);
  letter-spacing: var(--space-2xs);
  text-shadow: var(--shadow-text);
  color: var(--color-primary);
  

  @media (max-width: 1080px) {
    font-weight: 400;
    font-size: var(--font-size-1xl);
    letter-spacing: 0;
  }
`

export const PrimaryCardSubTitle = styled.div`
  font-weight: 200;
  font-size: var(--font-size-large);
  letter-spacing: var(--space-2xs);
  color: var(--color-tertiary);
  text-shadow: var(--shadow-text);

  @media (max-width: 1080px) {
    font-weight: 200;
    font-size: var(--font-size-2m);
    letter-spacing: var(--space-3xs);
  }
`

export const SecondaryCardTitle = styled.div`
  font-weight: 400;
  color: var(--color-primary);
  font-size: var(--font-size-1xl);
  letter-spacing: var(--space-2xs);
  text-shadow: var(--shadow-text);

  @media (max-width: 1080px) {
    font-weight: 400;
    font-size: var(--font-size-1l);
    letter-spacing: var(--space-3xs);
  }
`

export const SecondaryCardSubTitle = styled.div`
  font-weight: 400;
  font-size: var(--font-size-large);
  letter-spacing: var(--space-2xs);
  text-shadow: var(--shadow-text);
  color: var(--color-tertiary);

  @media (max-width: 1080px) {
    font-weight: 300;
    font-size: var(--font-size-2m);
    letter-spacing: var(--space-3xs);
  }
`

export const PrimaryCardContent = styled.div`
  font-weight: 300;
  font-size: var(--font-size-2m);
  letter-spacing: var(--space-3xs);
  text-shadow: var(--shadow-text);
  color: var(--color-primary);
  z-index: 2;

  @media (max-width: 1080px) {
    font-weight: 300;
    font-size: var(--font-size-1m);
    letter-spacing: var(--space-3xs);
    text-align: justify;
  }
`

export const TertiaryCardTitle = styled.div`
  font-size: var(--font-size-large);
  font-weight: 400;
  text-align: center;
  justify-content: center;
`

export const PrimaryCardList = styled.div`
  font-size: var(--font-size-1m);
  color: var(--color-tertiary);
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: center;
  justify-content: center;
`

// export const SecondaryCardList = styled.div`
//   font-size: var(--font-size-1m);
//   color: var(--color-tertiary);
//   font-weight: 300;
//   display: flex;
//   flex-direction: column;
//   gap: var(--space-2xs);
//   margin-left: var(--space-4xl) ;
//   margin-right: var(--space-4xl) ;
//   padding-top: var(--space-m) ;
//   padding-bottom: var(--space-m) ;
//   text-align: center;
//   justify-content: center;
//   z-index: 0;

  
//   backdrop-filter: blur(10px);
//   border: 0.5px solid var(--color-border);
//   border-radius: 4px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.191);

//   @media (max-width: 1080px) {
//     flex-direction: column;
//     gap: var(--space-s);
//     font-weight: 300;
//     font-size: var(--font-size-1m);
//     letter-spacing: var(--space-3xs);
//     text-align: center;
//     padding: var(--space-2xs) ;
//     margin-left: var(--space-xs) ;
//     margin-right: var(--space-xs) ;
//   }
// `

export const SecondaryCardList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background-color: #fff;
`


export const SecondaryCardListElement = styled.div`
  display: grid;
  grid-template-rows:1fr;
`

export const PrimaryCardListElement = styled.div`
  font-size: var(--font-size-1m);
  color: var(--color-tertiary);
  font-weight: 400;
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: center;
  justify-content: center;
`

// ////////////////
// //// OLD CSS ////
// //////////////

// export const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   text-align: center;
//   gap: 25px;

//   color: var(--color-primary);
// `

// ///////////////
// // SECTIONS //
// /////////////

// // Les Cards de sections (SRI, SIL, SA)
// export const SectionsCard = styled.div`
//   display: flex;
//   flex-direction: column;
//   flex: 1;
//   gap: var(--space-2xl);
//   padding: var(--space-2xl);
//   border-radius: 16px;
//   color: var(--color-primary);
// `
// export const CardHeading = styled.div`
//   padding-top: var(--space-m);
//   width: 100%;
//   text-align: center;
// `

// // Titre des cards de section ( SRI, SIL, SA)
// export const SectionsCardSubHeading = styled.div`
//   font-size: var(--font-size-large);
//   font-weight: 400;
//   text-align: center;
//   justify-content: center;
// `
// // Container des cards de section ( SRI, SIL, SA)
// export const SectionsCardContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   align-items: stretch;
//   gap: var(--space-m);
//   flex-wrap: wrap;
//   margin: var(--space-m);
//   z-index: 2;

//   color: var(--color-secondary);
//   backdrop-filter: blur(10px);
//   border: 0.5px solid var(--color-border);
//   border-radius: 4px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.191);

//   @media (max-width: 1024px) {
//     flex-direction: column;
//   }
// `

// ///////////////
// //GENERIQUE //
// /////////////

// export const BackdropContainer = styled.div`
//   display: grid;
//   align-items: center;
//   justify-content: space-around;
//   gap: var(--space-m);
//   padding: var(--space-m);
//   margin: var(--space-m);

//   color: var(--color-primay);
//   backdrop-filter: blur(10px);
//   border: 0.5px solid var(--color-border);
//   border-radius: 4px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.191);

//   @media (max-width: 1024px) {
//     flex-direction: column;
//   }
// `

// export const BackdropAboutContainer = styled.div`
//   display: grid;
//   align-items: center;
//   justify-content: space-around;
//   gap: var(--space-m);
//   padding: var(--space-m);
//   margin: var(--space-m);
//   width: 50em;

//   color: var(--color-primay);
//   backdrop-filter: blur(10px);
//   border: 0.5px solid var(--color-border);
//   border-radius: 4px;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.191);

//   @media (max-width: 1024px) {
//     flex-direction: column;
//   }
// `
