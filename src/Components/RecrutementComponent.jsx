import styled from 'styled-components'

import { Card } from './CardStyledComponents'
import { H2, H5, H6 } from './GlobalStyle'

/////////////////////////////////////////////////

export const Container = styled.div`
  display: grid;
  grid-template-rows: 2fr 4fr;

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
  font-size: var(--font-size-large);
  font-weight: 400;
  align-items: right;
  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`

////////////////////////////////////////////////

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`

export const LeftColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  margin-left: 10em;
  margin-right: 10em;
  @media (max-width: 1080px) {
    margin-left: 5em;
    margin-right: 5em;
  }
`
export const RightColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr
  }
`

export const LeftContent = styled.div`
  display: grid;
  grid-template-rows: 2fr 2fr 1fr;
  gap: 25px;
  margin-left: 10em;
  @media (max-width: 1080px) {
    margin-left: 5em;
    margin-right: 5em;
    grid-template-rows: 2fr 2fr;
    .Span {
      display: none;
    }
  }
`

export const RightContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 2fr;
  gap: 25px;
  margin-right: 10em;
  @media (max-width: 1080px) {
    grid-template-rows: 2fr 2fr;
    margin-left: 5em;
    margin-right: 5em;
    .Span {
      display: none;
    }
  }
`

///////////////////////////////////////

export const Button = styled.button`
  background-color: var(--color-tertiary);
  border: none;
  border-radius: 2px;
  color: var(--color-secondary);
  padding-left: var(--space-large);
  padding-right: var(--space-large);
  text-decoration: none;
  margin: 0;
  height: 90px;
  @media (max-width: 1080px) {
    padding-left: var(--space-s);
    padding-right: var(--space-s);
    height: 70px;
  }
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
          <Card>
            <h3>Etre agé d'au moins 20 ans</h3>
          </Card>
          <Card>
            <h3>Etre agé d'au moins 20 ans</h3>
          </Card>
          <Card>
            <h3>Etre agé d'au moins 20 ans</h3>
          </Card>
          <Button>
            <H6>JE POSTULE</H6>
          </Button>
        </LeftColumns>
        <RightColumns>
          <LeftContent>
            <Card>
              <h3>Etre agé d'au moins 20 ans</h3>
            </Card>
            <Card>
              <h3>Etre agé d'au moins 20 ans</h3>
            </Card>
            <span className="Span" />
          </LeftContent>
          <RightContent>
            <span className="Span" />
            <Card>
              <h3>Etre agé d'au moins 20 ans</h3>
            </Card>
            <Card>
              <h3>Etre agé d'au moins 20 ans</h3>
            </Card>
          </RightContent>
        </RightColumns>
      </Columns>
    </Container>
  )
}

export default Recrutement
