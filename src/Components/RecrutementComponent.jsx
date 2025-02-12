import styled from 'styled-components'

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

export const JoinCardColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`

export const JoinCardHeading = styled.div`
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

export const JoinCardRows = styled.div`
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
export const JoinCardRowsHeading = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  
  @media (max-width: 1080px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    text-align: center;
  }
`

export const JoinCardTitle = styled.div`
  font-size: var(--font-size-large);
  font-weight: 400;
  text-align: center;
  justify-content: center;
`

export const JoinCardHeadingTitle = styled.div`
  color: var(--color-primary);
`
export const JoinCardHeadingSubTitle = styled.div`
  color: var(--color-tertiary);
`

export const PrimaryJoinCardContent = styled.div`
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

export const TertiaryJoinCard = styled.div`
  color: var(--color-tertiary);
  backdrop-filter: blur(10px);
  border: 0.5px solid var(--color-border);
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.191);
`

export const RulesJoinCardItem = styled.div`
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
    top: -30px; // Ajuste la position de l'icône au-dessus du divider
    left: 50%;
    transform: translateX(-50%);
    width: 50px; // Taille de l'icône
    height: 50px; // Taille de l'icône
    background-image: url("https://image.noelshack.com/fichiers/2025/04/3/1737561974-agn-logo.png"); // Remplace par le chemin vers ton image
    background-size: contain; // Ajuste la taille de l'image pour qu'elle soit contenue dans le div
    background-repeat: no-repeat; // Evite la répétition de l'image
  }
`

export const RulesJoinCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 1080px) {
    grid-template-columns: 1fr;
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
      <JoinCardRowsHeading>
        <JoinCardHeading>
          <HomeIcon image="agn-logo.png" />
        </JoinCardHeading>
        <JoinCardHeading>
          <JoinCardHeadingTitle>REJOINGNEZ NOUS !</JoinCardHeadingTitle>
          <JoinCardHeadingSubTitle>
            FAITES PARTIE D'UNE AVENTURE HUMAINE
          </JoinCardHeadingSubTitle>
        </JoinCardHeading>
      </JoinCardRowsHeading>
      <JoinCardColumns>
        <SecondaryJoinCard>
          <JoinCardTitle>PREREQUIS</JoinCardTitle>
          <TertiaryJoinCard>
            <PrimaryJoinCardContent>
              Nous sommes prêts à vous accueillir parmi nous, peu importe vos
              vaisseaux ou votre expérience en jeu. Cependant, voici quelques
              prérequis importants à prendre en compte:
            </PrimaryJoinCardContent>
            <RulesJoinCardContainer>
              <RulesJoinCardItem>ÊTRE AGÉ D'AU MOINS 20 ANS</RulesJoinCardItem>
              <RulesJoinCardItem>ETRE FRANCOPHONE</RulesJoinCardItem>
              <RulesJoinCardItem>
                N'ETRE AFFILIE A AUCUNE ORGANISATION
              </RulesJoinCardItem>
            </RulesJoinCardContainer>
          </TertiaryJoinCard>
        </SecondaryJoinCard>
        <SecondaryJoinCard>
          <JoinCardTitle>ETAPES DE RECRUTEMENT</JoinCardTitle>
        </SecondaryJoinCard>
      </JoinCardColumns>
      <JoinCardRows>BTN</JoinCardRows>
    </PrimaryJoinCard>
  )
}

export default Recrutement
