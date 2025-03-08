import styled from 'styled-components'

export const PrimaryJoinCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: var(--color-primary);
  padding: var(--space-s);

  background-color: #ffffff34;
  backdrop-filter: blur(10px);
  border: 0.5px solid var(--color-border);
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.191);

  position: relative; 
  
  &::after {
    content: "";
    position: absolute;
    top: -35px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px; 
    height: 60px; 
    background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
    background-size: cover;
    background-position: center;

    @media (max-width: 1080px) {
      width: 50px; 
      height: 50px; 
      top: -30px;
  }

  }
`
export const SecondaryJoinCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  text-align: left;
  color: var(--color-primary);
  padding: var(--space-s);

  background-color: #ffffff34;
  backdrop-filter: blur(10px);
  border: 0.5px solid var(--color-border);
  border-radius: 4px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.191);

  position: relative; 
  
  &::after {
    content: "";
    position: absolute;
    top: -25px;
    left: -0.2%;
    transform: translateX(-50%);
    width: 40px; 
    height: 40px; 
    background-image: ${props => props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
    background-size: cover;
    background-position: center;

    @media (max-width: 1080px) {
      left: 50%;
      top: -20px;
  }
}
`

export const AboutCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`