import styled from 'styled-components'

import { PrimaryJoinCard, SecondaryJoinCard } from './CardStyledComponents'
import { H2, H5, H6, H7 } from './GlobalStyle'

/////////////////////////////////////////////////

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr;
  margin-right: 6em;
  margin-left: 6em;
  @media (max-width: 1080px) {
    margin-left: 2em;
    margin-right: 2em;
  }
`

/////////////////////////////////////////////////

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: -6em;
  margin-left: -6em;
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-right: 0em;
    margin-left: 0em;
  }
`
export const ContainerTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`
export const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`

////////////////////////////////////////////////

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 3fr 5fr;
  padding-top: 6em;
  padding-bottom: 10em;
  gap: var(--space-5xl);
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    padding-top: 3em;
    gap: var(--space-3xl);
  }
`

export const LeftColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  @media (max-width: 1080px) {
    text-align: center;
  }
`
export const RightColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
  gap: 50px;
  @media (max-width: 1080px) {
    text-align: center;
  }
  

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    .Span {
      display: none;
    }
  }
`

export const LeftContent = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 2fr 2fr 0.5fr;
  gap: 50px;

  @media (max-width: 1080px) {
    grid-template-rows: 2fr 2fr;
    .Span {
      display: none;
    }
  }
`

export const RightContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 2fr;
  gap: 50px;

  @media (max-width: 1080px) {
    grid-template-rows: 2fr 2fr;
    .Span {
      display: none;
    }
  }
`
/////////////////////////////////////////////////

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  z-index: 3;
  background-color: var(--color-tertiary);
  border: none;
  border-radius: 4px;
  padding: var(--space-m);
`

export const HomeIcon = styled.div`
  background-image: url("https://image.noelshack.com/fichiers/2025/04/3/1737561974-agn-logo.png");
  background-size: cover;
  background-position: center;
  width: 200px;
  height: 200px;

  @media (max-width: 1080px) {
    width: 120px;
    height: 120px;
  }
`

const Recrutement = () => {
  return (
    <Container>
      <ContainerTop>
        <ContainerTopContainer>
          <HeadingContainer>
            <HomeIcon image="agn-logo.png" />
          </HeadingContainer>
          <HeadingContainer>
            <H2>REJOINGNEZ NOUS !</H2>
            <H5>FAITES PARTIE D'UNE AVENTURE HUMAINE</H5>
          </HeadingContainer>
        </ContainerTopContainer>
        <HeadingContainer />
      </ContainerTop>
      <Columns>
        <LeftColumns>
          <H7>LES PREREQUIS</H7>
          <PrimaryJoinCard backgroundImage="/src/assets/Icons/image_18.png">
            <H6>Avoir au moins 20 ans</H6>
          </PrimaryJoinCard>
          <PrimaryJoinCard backgroundImage="/src/assets/Icons/image_20.png">
            <H6>Etre Francophone</H6>
          </PrimaryJoinCard>
          <PrimaryJoinCard backgroundImage="/src/assets/Icons/image_19.png">
            <H6>N'etre afilié à aucune organisation</H6>
          </PrimaryJoinCard>
          <Button href="#Sections">
            <H6 style={{ color: 'var(--color-secondary)' }}>JE POSTULE</H6>
          </Button>
        </LeftColumns>
        <RightColumns>
          <LeftContent>
            <H7>LE RECRUTEMENT</H7>
            <SecondaryJoinCard backgroundImage="/src/assets/Icons/img21.png">
              <H6>Rejoignez le discord de recrutement</H6>
            </SecondaryJoinCard>
            <SecondaryJoinCard backgroundImage="/src/assets/Icons/img23.png">
              <H6>Devenez une recrue</H6>
            </SecondaryJoinCard>
            <span className="Span" />
          </LeftContent>
          <RightContent>
            <span className="Span" />
            <SecondaryJoinCard backgroundImage="/src/assets/Icons/img22.png">
              <H6>Passez votre entretient individuel</H6>
            </SecondaryJoinCard>
            <SecondaryJoinCard backgroundImage="/src/assets/Icons/img24.png">
              <H6>Devenez membre des Argonauts</H6>
            </SecondaryJoinCard>
          </RightContent>
        </RightColumns>
      </Columns>
    </Container>
  )
}

export default Recrutement
