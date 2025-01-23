import styled from 'styled-components'

const LandingSection = styled.div`
  background-color: red;
  background-image: url('https://image.noelshack.com/fichiers/2025/04/3/1737581775-imgsc.jpg'); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  height: 100vh;
  display: flex;
  align-items: center; 
  justify-content: center;
`

export const Home = () => {
  return (
    <LandingSection>
      <h1>Bienvenue</h1>
    </LandingSection>
  )
}
