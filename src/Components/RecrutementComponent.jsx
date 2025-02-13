import styled from 'styled-components'

/////////////////////////////////////////////////

export const PrimaryJoinCard = styled.div`
  display: grid;
  grid-template-rows: 2fr 4fr 1fr;

  @media (max-width: 1080px) {
  }
`

export const SecondaryJoinCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 25px;
  padding: var(--space-m);
  color: var(--color-primary);
`

export const TertiaryJoinCard = styled.div`
  color: var(--color-tertiary);
  backdrop-filter: blur(10px);
  border: 0.5px solid var(--color-border);
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.191);
`

export const TopRows = styled.div`
  display: grid;
  grid-template-columns: 0fr 1fr 0fr;
  @media (max-width: 1080px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    text-align: center;
  }
`
export const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`
export const BottomRows = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  width: 100%;
  color: aliceblue;

  @media (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`
/////////////////////////////////////////////////

export const HeadingContainer = styled.div`
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

export const Heading = styled.div`
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
export const HeadingTitle = styled.div`
  font-weight: 400;
  color: var(--color-primary);
  font-size: var(--font-size-1xl);
  text-shadow: var(--shadow-text);
`
export const HeadingSubTitle = styled.div`
  font-weight: 300;
  color: var(--color-tertiary);
  font-size: var(--font-size-1l);
  text-shadow: var(--shadow-text);
`

////////////////////////////////////////////////

export const CardTitle = styled.div`
  font-size: var(--font-size-large);
  font-weight: 400;
  text-align: center;
  justify-content: center;
`

export const PrimaryContent = styled.div`
  font-weight: 300;
  font-size: var(--font-size-2m);
  letter-spacing: var(--space-3xs);
  text-shadow: var(--shadow-text);
  color: var(--color-primary);

  @media (max-width: 1080px) {
    font-weight: 300;
    font-size: var(--font-size-1m);
    letter-spacing: var(--space-3xs);
    text-align: justify;
    justify-content: center;
  }
`

export const RulesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`

export const RulesItem = styled.div`
  color: var(--color-primary);
  margin: 20px;
  margin-top: 55px;
  padding-top: 20px;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    background-image: url("https://image.noelshack.com/fichiers/2025/04/3/1737561974-agn-logo.png"); // Remplace par le chemin vers ton image
    background-size: contain;
    background-repeat: no-repeat;
  }
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
    <PrimaryJoinCard>
      <TopRows>
        <Heading />
        <HeadingContainer>
          <Heading>
            <HomeIcon image="agn-logo.png" />
          </Heading>
          <Heading>
            <HeadingTitle>REJOINGNEZ NOUS !</HeadingTitle>
            <HeadingSubTitle>
              FAITES PARTIE D'UNE AVENTURE HUMAINE
            </HeadingSubTitle>
          </Heading>
        </HeadingContainer>

        <Heading />
      </TopRows>
      <Columns>
        <SecondaryJoinCard>
          <CardTitle>PREREQUIS</CardTitle>
          <TertiaryJoinCard>
            <PrimaryContent>
              Nous sommes prêts à vous accueillir parmi nous, peu importe vos
              vaisseaux ou votre expérience en jeu. Cependant, voici quelques
              prérequis importants à prendre en compte:
            </PrimaryContent>
            <RulesContainer>
              <RulesItem>ÊTRE AGÉ D'AU MOINS 20 ANS</RulesItem>
              <RulesItem>ETRE FRANCOPHONE</RulesItem>
              <RulesItem>N'ETRE AFFILIE A AUCUNE ORGANISATION</RulesItem>
            </RulesContainer>
          </TertiaryJoinCard>
        </SecondaryJoinCard>
        <SecondaryJoinCard>
          <CardTitle>ETAPES DE RECRUTEMENT</CardTitle>
        </SecondaryJoinCard>
      </Columns>
      <BottomRows>BTN</BottomRows>
    </PrimaryJoinCard>
  )
}

export default Recrutement
