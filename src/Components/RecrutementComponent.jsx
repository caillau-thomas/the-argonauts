import styled from 'styled-components'

import { H2, H4, H5 } from './GlobalStyle'

/////////////////////////////////////////////////

export const Card = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr 4fr;
  
  @media (max-width: 1080px) {
  }
`

/////////////////////////////////////////////////

export const CardTop = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 1080px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    text-align: center;
  }
`
export const CardTopContainer = styled.div`
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

export const TT = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
`

export const Columns = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
`

export const LeftColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  
`
export const RightColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const LeftContent = styled.div`
  display: grid;
  grid-template-rows: 2fr 2fr 1fr;
`

export const RightContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 2fr ;
`

///////////////////////////////////////

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
    <Card>
      <CardTop>
        <CardTopContainer>
          <HeadingContainer>
            <HomeIcon image="agn-logo.png" />
          </HeadingContainer>
          <HeadingContainer>
            <H2>REJOINGNEZ NOUS !</H2>
            <H5>
              FAITES PARTIE D'UNE AVENTURE HUMAINE
            </H5>
          </HeadingContainer>
        </CardTopContainer>
        <HeadingContainer />
      </CardTop>
      <TT>
        <H4 style={{ color: 'var(--color-primary)' }}>PLACEHOLDER</H4>
        <H4 style={{ color: 'var(--color-primary)' }}>PLACEHOLDER</H4>
      </TT>
      <Columns>
        <LeftColumns>
         
          <H5>PLACEHOLDER</H5>
          <H5>PLACEHOLDER</H5>
          <H5>PLACEHOLDER</H5>
          <H5>PLACEHOLDER</H5>
        </LeftColumns>
        <RightColumns>
          <LeftContent>
            <H5>PLACEHOLDER</H5>
            <H5>PLACEHOLDER</H5>
            <H5></H5>
          </LeftContent>
          <RightContent>
            <H5></H5>
            <H5>PLACEHOLDER</H5>
            <H5>PLACEHOLDER</H5>
          </RightContent>
        </RightColumns>
      </Columns>
    </Card>
  )
}

export default Recrutement
