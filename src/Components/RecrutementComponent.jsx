import styled from 'styled-components'

import { PrimaryJoinCard, SecondaryJoinCard } from './CardStyledComponents'
import { H2, H5, H6 } from './GlobalStyle'

/////////////////////////////////////////////////

export const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr;
  @media (max-width: 1080px) {
  }
`

/////////////////////////////////////////////////

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
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
  grid-template-columns: 2fr 4fr;
  padding-top: 6em;
  padding-bottom: 10em;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    gap: var(--space-5xl);
  }
`

export const LeftColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px;
  margin-left: 12em;
  min-width: 30em;
  @media (max-width: 1080px) {
    margin-left: 2em;
    margin-right: 2em;
    min-width: 0em;
  }
`
export const RightColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: left;
  gap: 50px;
  
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    .Span {
      display: none;
    }
  }
`

export const LeftContent = styled.div`
  display: grid;
  grid-template-rows: 2fr 2fr 1fr;
  gap: 50px;
  margin-left: 12em;
  min-width: 30em;
  @media (max-width: 1080px) {
    margin-left: 2em;
    margin-right: 2em;
    min-width: 0em;
    grid-template-rows: 2fr 2fr;
    .Span {
      display: none;
    }
  }
`

export const RightContent = styled.div`
  display: grid;
  grid-template-rows: 2fr 2fr;
  gap: 50px;
  margin-right: 12em;
  min-width: 30em;
  @media (max-width: 1080px) {
    margin-left: 2em;
    margin-right: 2em;
    min-width: 0em;
    .Span {
      display: none;
    }
  }
`
/////////////////////////////////////////////////

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: var(--color-primary);
  z-index: 3;
  background-color: var(--color-tertiary);
  border: none;
  border-radius: 4px;
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
          <PrimaryJoinCard backgroundImage="/src/assets/Icons/image_18.png">
            <H6>Avoir au moins 20 ans</H6>
          </PrimaryJoinCard>
          <PrimaryJoinCard backgroundImage="/src/assets/Icons/image_20.png">
            <H6>Etre Francophone</H6>
          </PrimaryJoinCard>
          <PrimaryJoinCard backgroundImage="/src/assets/Icons/image_19.png">
            <H6>N'etre afilié à aucune organisation</H6>
          </PrimaryJoinCard>
          <PrimaryJoinCard
            style={{
              justifyContent:  'end',
              backgroundColor: '#00000000',
              border:          '0',
            }}
          >
            <Button href="#Sections">
              <H6 style={{ color: 'var(--color-secondary)' }}>JE POSTULE</H6>
            </Button>
          </PrimaryJoinCard>
        </LeftColumns>
        <RightColumns>
          <LeftContent>
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
