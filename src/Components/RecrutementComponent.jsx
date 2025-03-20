import styled from 'styled-components'

import { PrimaryJoinCard, SecondaryJoinCard } from './CardStyledComponents'
import { H2, H5, H6, H7 } from './GlobalStyle'

/////////////////////////////////////////////////

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  justify-content: center;
  gap: 50px;
  @media (max-width: 1080px) {
    width: 100%;
    gap: 20px;
  }
`

/////////////////////////////////////////////////

export const ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: -6em;
  margin-left: 0;
  align-items: start;
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
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
  gap: var(--space-xl);
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    padding: var(--space-m);
    gap: var(--space-3xl);
  }
`

export const LeftColumns = styled.div`
  display: grid;
  grid-template-rows: 0.5fr 1fr 1fr 1fr 0.5fr;
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
  grid-template-rows: 0.5fr 1fr 1fr 1fr;
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
  grid-template-rows: 1fr 1fr 1fr 0.5fr;
  gap: 50px;

  @media (max-width: 1080px) {
    grid-template-rows: 2fr 2fr;
    .Span {
      display: none;
    }
  }
`
/////////////////////////////////////////////////

export const Link = styled.a`
  display: flex;
  flex-direction: column;
  z-index: 1;
  background-color: var(--color-tertiary);
  border: none;
  border-radius: 4px;
  padding: var(--space-s);
  text-decoration: none;
  color: var(--color-secondary);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.191);
  text-align: center;
`

export const HomeIcon = styled.div`
  background-image: url("https://image.noelshack.com/fichiers/2025/04/3/1737561974-agn-logo.png");
  background-size: cover;
  background-position: center;
  width: 150px;
  height: 150px;

  @media (max-width: 1080px) {
    display: none;
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
            <H2>REJOINGNEZ NOUS</H2>
            <H5>FAITES PARTIE D'UNE AVENTURE HUMAINE</H5>
          </HeadingContainer>
        </ContainerTopContainer>
        <HeadingContainer />
      </ContainerTop>
      <Columns>
        <LeftColumns>
          <H7>PREREQUIS</H7>
          <PrimaryJoinCard backgroundImage="./public/assets/Icons/image_18.png">
            <H6>Avoir au moins 20 ans</H6>
          </PrimaryJoinCard>
          <PrimaryJoinCard backgroundImage="./public/assets/Icons/image_20.png">
            <H6>Etre Francophone</H6>
          </PrimaryJoinCard>
          <PrimaryJoinCard backgroundImage="./public/assets/Icons/image_19.png">
            <H6>N'etre afilié à aucune organisation</H6>
          </PrimaryJoinCard>
          <Link href="https://discord.gg/cdraKK43HS" target="_blank">
            <H6 style={{ color: 'var(--color-secondary)' }}>JE POSTULE</H6>
          </Link>
        </LeftColumns>
        <RightColumns>
          <LeftContent>
            <H7>LE RECRUTEMENT</H7>
            <SecondaryJoinCard backgroundImage="/assets/Icons/img21.png">
              <H6>Rejoignez le discord de recrutement</H6>
            </SecondaryJoinCard>
            <SecondaryJoinCard backgroundImage="./public/assets/Icons/img23.png">
              <H6>Devenez une recrue</H6>
            </SecondaryJoinCard>
            <span className="Span" />
            
          </LeftContent>
          <RightContent>
            <span className="Span" />
            <SecondaryJoinCard backgroundImage="./public/assets/Icons/img22.png">
              <H6>Passez votre entretient individuel</H6>
            </SecondaryJoinCard>
            <SecondaryJoinCard backgroundImage="./public/assets/Icons/img24.png">
              <H6>Devenez membre des Argonauts</H6>
            </SecondaryJoinCard>
            <span className="Span" />
          </RightContent>
        </RightColumns>
      </Columns>
    </Container>
  )
}

export default Recrutement
