import styled from 'styled-components'


/////////////////////////////
////// Grands écrans////////
///////////////////////////

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around; 
  position: fixed;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.210);
  width: 100%;
  background-color: var(--color-primary);
  color: var(--color-text-primary);
  font-size: var(--font-size-large);
  z-index: 9;

  @media (max-width: 1024px) {
    position: relative;
    justify-content: center;
  }
`

export const HeaderGD = styled.div`
  display: flex;
  flex-direction: row;
  gap: var(--space-s);
`
export const HeaderCentre = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: var(--space-s);

  @media (max-width: 1024px) {
    display: none;
  }
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-s);
  background-color: var(--color-secondary);
  color: var(--color-text-secondary);
  padding: var(--space-s);
`

export const Copyright = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: var(--space-s);
`

export const HomeIcon = styled.div`
  background-image: url('https://image.noelshack.com/fichiers/2025/04/3/1737561974-agn-logo.png'); 
  background-size: cover;        
  background-position: center;
  width: 100px;                   
  height: 100px; 
  
  @media (max-width: 1024px) {
    width: 80px;
    height: 80px;
  }
`


export const Logo = styled.div`
  background-image: url('https://image.noelshack.com/fichiers/2025/04/3/1737561974-madebycommunity.png'); 
  background-size: cover;        
  background-position: center;
  width: 60px;                   
  height: 60px; 
`

export const NavLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s;
`

export const Button = styled.button`
  padding: var(--space-s);
  border: none;
  border-radius: 2px;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.3s;
  color: var(--color-secondary);
  font-size: var(--font-size-1m);
  font-family: var(--font-primary);

  @media (max-width: 1024px) {
    display: none;
  }
`
////////////////////////////
////Tablettes-mobiles//////
//////////////////////////

export const BurgerButton = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 25px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 2;
 

  & > div {
    width: 100%;
    height: 3px;
    background-color: var(--color-secondary);
    border-radius: 5px;
  }

  @media (max-width: 1024px) {
    position: absolute;
    left: var(--space-s);
    display: flex;
  }
`
